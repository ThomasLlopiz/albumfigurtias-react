import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cuotas = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({
        nombre: "",
        deporte: "",
        mes: "",
    });
    const apiUrl = import.meta.env.VITE_API_URL;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const fetchCuotas = () => {
        fetch(`${apiUrl}/api/cuotas`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error al obtener las cuotas:", error);
            });
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const applyFilters = (data) => {
        if (
            !filters.nombre &&
            !filters.deporte &&
            !filters.mes
        ) {
            return data;
        }

        return data.filter((cuota) => {
            // Lógica de filtros, si es necesario
        });
    };

    const handleEstadoChange = async (id, currentEstado) => {
        const newEstado = !currentEstado;

        setData((prevData) =>
            prevData.map((cuota) =>
                cuota.id === id ? { ...cuota, pagado: newEstado } : cuota
            )
        );

        try {
            const response = await fetch(`${apiUrl}/api/cuotas/${id}/pagado`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ pagado: newEstado }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error al actualizar el estado de la cuota:", errorData);
                setData((prevData) =>
                    prevData.map((cuota) =>
                        cuota.id === id ? { ...cuota, pagado: currentEstado } : cuota
                    )
                );
            }
        } catch (error) {
            console.error("Error al cambiar el estado de la cuota:", error);
            setData((prevData) =>
                prevData.map((cuota) =>
                    cuota.id === id ? { ...cuota, pagado: currentEstado } : cuota
                )
            );
        }
    };

    useEffect(() => {
        fetchCuotas();
    }, []);

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
                            <th className="py-2 px-5 text-left">Cuenta</th>
                            <th className="py-2 px-5 text-left">Alumno</th>
                            <th className="py-2 px-5 text-left">Dirección</th>
                            <th className="py-2 px-5 text-left">Deporte</th>
                            <th className="py-2 px-5 text-left">Fecha</th>
                            <th className="py-2 px-5 text-left">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((datas) => {
                            return (
                                <tr
                                    key={datas.id}
                                    className="hover:bg-gray-100 border-b-2 text-left"
                                >
                                    <td className="px-5 lg:pl-5 py-2">
                                        {datas.numero_cuenta || "Cargando..."}
                                    </td>
                                    <td className="px-5 lg:pl-5 py-2">
                                        {datas.nombre || "Cargando..."}
                                    </td>
                                    <td className="px-5 lg:pl-5 py-2">
                                        {datas.direccion || "Cargando..."}
                                    </td>
                                    <td className="px-5 lg:pl-5 py-2">{datas.deporte}</td>
                                    <td className="px-5 lg:pl-5 py-2">{datas.fecha}</td>
                                    <td className="px-5 lg:pl-5 py-2 text-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={datas.pagado}
                                                onChange={() =>
                                                    handleEstadoChange(datas.id, datas.pagado)
                                                }
                                                className="sr-only peer"
                                            />
                                            <div
                                                className={`w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${datas.pagado ? "bg-green-600" : "bg-red-600"
                                                    }`}
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
                    Página {currentPage} de{" "}
                    {Math.ceil(applyFilters(data).length / itemsPerPage)}
                </span>
                <button
                    onClick={nextPage}
                    disabled={
                        currentPage === Math.ceil(applyFilters(data).length / itemsPerPage)
                    }
                    className="bg-green-600 hover:bg-green-800 text-white py-1 px-4 rounded-lg font-bold transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};
