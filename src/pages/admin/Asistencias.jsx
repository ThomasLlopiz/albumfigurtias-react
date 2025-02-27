import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Asistencias = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [alumnosData, setAlumnosData] = useState({});
    const [groupedData, setGroupedData] = useState({});
    const [deportesData, setDeportesData] = useState({});
    const [filters, setFilters] = useState({
        nombre: "",
        deporte: "",
        categoria: "",
        mes: "",
    });
    const apiUrl = import.meta.env.VITE_API_URL;

    const asistencias = () => {
        fetch(`${apiUrl}/api/asistencias/activas`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                groupByMonthAndAlumno(data);
                fetchAlumnosData(data);
                fetchDeportesData(data);
            })
            .catch((error) => {
                console.error("Error al obtener las asistencias:", error);
            });
    };

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

    const formatMonth = (month) => {
        return month < 10 ? `0${month + 1}` : month + 1;
    };

    const groupByMonthAndAlumno = (asistencias) => {
        const grouped = {};

        asistencias.forEach((asistencia) => {
            if (!asistencia.fecha) {
                console.error("Fecha no encontrada para asistencia:", asistencia);
                return;
            }

            const date = new Date(asistencia.fecha);
            if (isNaN(date)) {
                console.error("Fecha no válida:", asistencia.fecha);
                return;
            }

            const monthYear = `${date.getFullYear()}-${formatMonth(date.getMonth())}`;
            const alumnoId = asistencia.id_alumno;
            const deporteId = asistencia.id_deporte;

            if (!grouped[monthYear]) {
                grouped[monthYear] = {};
            }

            if (!grouped[monthYear][alumnoId]) {
                grouped[monthYear][alumnoId] = {
                    count: 0,
                    deporteId: deporteId,
                };
            }

            grouped[monthYear][alumnoId].count++;
        });

        setGroupedData(grouped);
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const applyFilters = (filteredData) => {
        if (
            !filters.nombre &&
            !filters.deporte &&
            !filters.categoria &&
            !filters.mes
        ) {
            return filteredData;
        }

        return filteredData.filter((item) => {
            const alumno = item.alumno;
            const deporte = item.deporte;
            if (!alumno || !deporte) {
                return false;
            }

            if (!item.monthYear) {
                console.error("monthYear no encontrado para el item:", item);
                return false;
            }

            const alumnoNombreCompleto =
                `${alumno.nombre} ${alumno.apellido}`.toLowerCase();
            const deporteNombre = deporte.deporte.toLowerCase();
            const deporteCategoria = deporte.categoria.toLowerCase();
            const matchesNombre = filters.nombre
                ? alumnoNombreCompleto.includes(filters.nombre.toLowerCase())
                : true;
            const matchesDeporte = filters.deporte
                ? deporteNombre.includes(filters.deporte.toLowerCase())
                : true;
            const matchesCategoria = filters.categoria
                ? deporteCategoria.includes(filters.categoria.toLowerCase())
                : true;
            const matchesMes = filters.mes ? item.monthYear === filters.mes : true;

            return matchesNombre && matchesDeporte && matchesCategoria && matchesMes;
        });
    };

    useEffect(() => {
        asistencias();
    }, []);

    return (
        <div className="text-black text-center pt-32 pb-10 px-2">
            <div className="flex items-center justify-between mb-3">
                <h1 className="text-2xl font-semibold">Asistencias por Alumno</h1>
                <button
                    onClick={() => navigate("/admin")}
                    className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
                >
                    Volver
                </button>
            </div>

            <div className="flex flex-col w-full mb-4 md:grid md:grid-cols-4 md:gap-4 lg:w-3/4 md:mx-auto">
                {/* Filtro por nombre */}
                <div className="">
                    <input
                        type="text"
                        name="nombre"
                        value={filters.nombre}
                        onChange={handleFilterChange}
                        placeholder="Filtrar por nombre"
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full"
                    />
                </div>

                {/* Filtro por deporte */}
                <div className="">
                    <input
                        type="text"
                        name="deporte"
                        value={filters.deporte}
                        onChange={handleFilterChange}
                        placeholder="Filtrar por deporte"
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full"
                    />
                </div>

                {/* Filtro por categoría */}
                <div className="">
                    <input
                        type="text"
                        name="categoria"
                        value={filters.categoria}
                        onChange={handleFilterChange}
                        placeholder="Filtrar por categoría"
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full"
                    />
                </div>

                {/* Filtro por mes */}
                <div className="">
                    <input
                        type="month"
                        name="mes"
                        value={filters.mes}
                        onChange={handleFilterChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full"
                    />
                </div>
            </div>

            {Object.keys(groupedData).map((monthYear) => (
                <div key={monthYear} className="mb-8">
                    <table className="mx-auto w-full lg:w-3/4">
                        <thead className="border-b-2">
                            <tr>
                                <th className="py-2 md:px-5 text-left">Alumno</th>
                                <th className="py-2 md:px-5 text-left">Deporte</th>
                                <th className="py-2 md:px-5 text-left">Categoría</th>
                                <th className="py-2 md:px-5 text-left">Asistencias</th>
                                <th className="py-2 md:px-5 text-left">Mes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applyFilters(
                                Object.keys(groupedData[monthYear]).map((alumnoId) => {
                                    const alumno = alumnosData[alumnoId];
                                    const asistencia = groupedData[monthYear][alumnoId].count;
                                    const deporteId = groupedData[monthYear][alumnoId].deporteId;
                                    const deporte = deportesData[deporteId];

                                    return {
                                        alumnoId,
                                        alumno,
                                        asistencia,
                                        deporte,
                                        monthYear,
                                    };
                                })
                            ).map(({ alumnoId, alumno, asistencia, deporte, monthYear }) => (
                                <tr
                                    key={alumnoId}
                                    className="hover:bg-gray-100 border-b-2 text-left"
                                >
                                    <td className="pr-5 lg:pl-5 py-2">
                                        {alumno
                                            ? `${alumno.nombre} ${alumno.apellido}`
                                            : "Cargando..."}
                                    </td>
                                    <td className="pr-5 lg:pl-5 py-2">
                                        {deporte ? deporte.deporte : "Cargando..."}
                                    </td>
                                    <td className="pr-5 lg:pl-5 py-2">
                                        {deporte ? deporte.categoria : "Cargando..."}
                                    </td>
                                    <td className="pr-5 lg:pl-5 py-2">{asistencia}</td>
                                    <td className="pr-5 lg:pl-5 py-2">{monthYear}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};
