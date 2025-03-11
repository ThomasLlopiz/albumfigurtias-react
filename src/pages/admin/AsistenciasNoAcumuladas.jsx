import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AsistenciasNoAcumuladas = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [alumnosData, setAlumnosData] = useState({});
    const [deportesData, setDeportesData] = useState({});
    const [filters, setFilters] = useState({
        nombre: "",
        deporte: "",
        categoria: "",
        mes: "",
    });
    const apiUrl = import.meta.env.VITE_API_URL;

    // Paginación
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Establece el número de elementos por página

    // Obtener todas las asistencias (activas e inactivas)
    const fetchAsistencias = () => {
        fetch(`${apiUrl}/api/asistencias`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                fetchAlumnosData(data);
                fetchDeportesData(data);
            })
            .catch((error) => {
                console.error("Error al obtener las asistencias:", error);
            });
    };

    // Obtener datos de los alumnos
    const fetchAlumnosData = (asistencias) => {
        const alumnoIds = [
            ...new Set(asistencias.map((asistencia) => asistencia.id_alumno)),
        ];
        Promise.all(
            alumnoIds.map((id) =>
                fetch(`${apiUrl}/api/inscripciones/${id}`)
                    .then((response) => response.json())
                    .then((alumno) => {
                        setAlumnosData((prev) => ({
                            ...prev,
                            [id]: alumno,
                        }));
                    })
                    .catch((error) =>
                        console.error(`Error al obtener el alumno con id ${id}:`, error)
                    )
            )
        );
    };

    // Obtener datos de los deportes
    const fetchDeportesData = (asistencias) => {
        const deporteIds = [
            ...new Set(asistencias.map((asistencia) => asistencia.id_deporte)),
        ];
        Promise.all(
            deporteIds.map((id) =>
                fetch(`${apiUrl}/api/deportes/${id}`)
                    .then((response) => response.json())
                    .then((deporte) => {
                        setDeportesData((prev) => ({
                            ...prev,
                            [id]: deporte,
                        }));
                    })
                    .catch((error) =>
                        console.error(`Error al obtener el deporte con id ${id}:`, error)
                    )
            )
        );
    };

    // Formatear el mes para mostrarlo correctamente
    const formatMonth = (month) => {
        return month < 10 ? `0${month + 1}` : month + 1;
    };

    // Manejar cambios en los filtros
    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    // Aplicar los filtros a los datos
    const applyFilters = (data) => {
        if (
            !filters.nombre &&
            !filters.deporte &&
            !filters.categoria &&
            !filters.mes
        ) {
            return data;
        }

        return data.filter((asistencia) => {
            const alumno = alumnosData[asistencia.id_alumno];
            const deporte = deportesData[asistencia.id_deporte];
            if (!alumno || !deporte) {
                return false;
            }

            const alumnoNombreCompleto =
                `${alumno.nombre} ${alumno.apellido}`.toLowerCase();
            const deporteNombre = deporte.deporte.toLowerCase();
            const deporteCategoria = deporte.categoria.toLowerCase();
            const fechaAsistencia = new Date(asistencia.fecha);
            const monthYear = `${fechaAsistencia.getFullYear()}-${formatMonth(
                fechaAsistencia.getMonth()
            )}`;

            const matchesNombre = filters.nombre
                ? alumnoNombreCompleto.includes(filters.nombre.toLowerCase())
                : true;
            const matchesDeporte = filters.deporte
                ? deporteNombre.includes(filters.deporte.toLowerCase())
                : true;
            const matchesCategoria = filters.categoria
                ? deporteCategoria.includes(filters.categoria.toLowerCase())
                : true;
            const matchesMes = filters.mes ? monthYear === filters.mes : true;

            return matchesNombre && matchesDeporte && matchesCategoria && matchesMes;
        });
    };

    // Cambiar el estado de una asistencia
    const handleEstadoChange = async (id, currentEstado) => {
        const newEstado = !currentEstado;

        // Actualizar el estado local
        setData((prevData) =>
            prevData.map((asistencia) =>
                asistencia.id === id
                    ? { ...asistencia, estado: newEstado }
                    : asistencia
            )
        );

        try {
            const response = await fetch(`${apiUrl}/api/asistencias/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ estado: newEstado }),
            });

            if (!response.ok) {
                // Revertir el cambio si la API falla
                setData((prevData) =>
                    prevData.map((asistencia) =>
                        asistencia.id === id
                            ? { ...asistencia, estado: currentEstado }
                            : asistencia
                    )
                );
                console.error("Error al actualizar el estado de la asistencia");
            }
        } catch (error) {
            // Revertir el cambio si hay un error
            setData((prevData) =>
                prevData.map((asistencia) =>
                    asistencia.id === id
                        ? { ...asistencia, estado: currentEstado }
                        : asistencia
                )
            );
            console.error("Error al cambiar el estado de la asistencia:", error);
        }
    };

    // Cargar las asistencias al montar el componente
    useEffect(() => {
        fetchAsistencias();
    }, []);

    // Lógica de paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = applyFilters(data).slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(applyFilters(data).length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="text-black text-center pt-32 pb-10 px-2 w-4/4">
            <div className="flex items-center justify-between mb-3 lg:w-3/4 mx-auto">
                <h1 className="text-2xl font-semibold">Asistencias (No Acumuladas)</h1>
                <button
                    onClick={() => navigate("/admin")}
                    className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
                >
                    Volver
                </button>
            </div>

            {/* Filtros */}
            <div className="flex flex-col w-full mb-4 md:grid md:grid-cols-4 md:gap-4 lg:w-3/4 md:mx-auto">
                <div>
                    <input
                        type="text"
                        name="nombre"
                        value={filters.nombre}
                        onChange={handleFilterChange}
                        placeholder="Filtrar por nombre"
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="deporte"
                        value={filters.deporte}
                        onChange={handleFilterChange}
                        placeholder="Filtrar por deporte"
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="categoria"
                        value={filters.categoria}
                        onChange={handleFilterChange}
                        placeholder="Filtrar por categoría"
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full"
                    />
                </div>
                <div>
                    <input
                        type="month"
                        name="mes"
                        value={filters.mes}
                        onChange={handleFilterChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full"
                    />
                </div>
            </div>

            {/* Contenedor de la tabla con scroll horizontal */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-green-600 whitespace-nowrap">
                    <thead className="border-b-2">
                        <tr>
                            <th className="py-2 px-5 text-left">Alumno</th>
                            <th className="py-2 px-5 text-left">Deporte</th>
                            <th className="py-2 px-5 text-left">Categoría</th>
                            <th className="py-2 px-5 text-left">Fecha</th>
                            <th className="py-2 px-5 text-left">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((asistencia) => {
                            const alumno = alumnosData[asistencia.id_alumno];
                            const deporte = deportesData[asistencia.id_deporte];
                            const fecha = new Date(asistencia.fecha).toLocaleDateString();

                            return (
                                <tr
                                    key={asistencia.id}
                                    className="hover:bg-gray-100 border-b-2 text-left"
                                >
                                    <td className="px-5 lg:pl-5 py-2">
                                        {alumno
                                            ? `${alumno.nombre} ${alumno.apellido}`
                                            : "Cargando..."}
                                    </td>
                                    <td className="px-5 lg:pl-5 py-2">
                                        {deporte ? deporte.deporte : "Cargando..."}
                                    </td>
                                    <td className="px-5 lg:pl-5 py-2">
                                        {deporte ? deporte.categoria : "Cargando..."}
                                    </td>
                                    <td className="px-5 lg:pl-5 py-2">{fecha}</td>
                                    <td className="px-5 lg:pl-5 py-2 text-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={asistencia.estado}
                                                onChange={() =>
                                                    handleEstadoChange(asistencia.id, asistencia.estado)
                                                }
                                                className="sr-only peer"
                                            />
                                            <div
                                                className={`w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${asistencia.estado ? 'bg-green-600' : 'bg-red-600'}`}
                                            ></div>
                                        </label>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="bg-green-600 hover:bg-green-800 text-white py-1 px-4 rounded-lg font-bold transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Anterior
                </button>
                <span className="mx-4 text-lg font-semibold">
                    Página {currentPage} de {Math.ceil(applyFilters(data).length / itemsPerPage)}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(applyFilters(data).length / itemsPerPage)}
                    className="bg-green-600 hover:bg-green-800 text-white py-1 px-4 rounded-lg font-bold transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};
