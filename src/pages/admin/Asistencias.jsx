import { useEffect, useState } from 'react';

export const Asistencias = () => {
    const [data, setData] = useState([]);
    const [alumnosData, setAlumnosData] = useState({});
    const [groupedData, setGroupedData] = useState({});
    const [deportesData, setDeportesData] = useState({});
    const [filters, setFilters] = useState({
        nombre: '',
        deporte: '',
        categoria: '',
        mes: '',
    });

    const asistencias = () => {
        fetch("http://localhost:8000/api/asistencias")
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
        const alumnoIds = [...new Set(asistencias.map((asistencia) => asistencia.id_alumno))];
        Promise.all(
            alumnoIds.map((id) =>
                fetch(`http://localhost:8000/api/inscripciones/${id}`)
                    .then((response) => response.json())
                    .then((alumno) => {
                        setAlumnosData((prev) => ({
                            ...prev,
                            [id]: alumno,
                        }));
                    })
                    .catch((error) => console.error(`Error al obtener el alumno con id ${id}:`, error))
            )
        );
    };

    const fetchDeportesData = (asistencias) => {
        const deporteIds = [...new Set(asistencias.map((asistencia) => asistencia.id_deporte))];
        Promise.all(
            deporteIds.map((id) =>
                fetch(`http://localhost:8000/api/deportes/${id}`)
                    .then((response) => response.json())
                    .then((deporte) => {
                        setDeportesData((prev) => ({
                            ...prev,
                            [id]: deporte,
                        }));
                    })
                    .catch((error) => console.error(`Error al obtener el deporte con id ${id}:`, error))
            )
        );
    };

    const formatMonth = (month) => {
        return month < 10 ? `0${month + 1}` : month + 1;
    };

    const groupByMonthAndAlumno = (asistencias) => {
        const grouped = {};

        asistencias.forEach((asistencia) => {
            const date = new Date(asistencia.fecha);
            const monthYear = `${formatMonth(date.getMonth())}/${date.getFullYear()}`;
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

        if (!filters.nombre && !filters.deporte && !filters.categoria && !filters.mes) {
            console.log("Mostrando todos los datos porque no hay filtros.");
            return filteredData;
        }

        return filteredData.filter((item) => {
            const alumno = item.alumno;
            const deporte = item.deporte;
            console.log("Alumno:", alumno);
            console.log("Deporte:", deporte);

            if (!alumno || !deporte) {
                console.log("No se encontró alumno o deporte para este item", item);
                return false;
            }

            const date = new Date(item.fecha);
            const monthYear = `${formatMonth(date.getMonth())}/${date.getFullYear()}`;
            const alumnoNombreCompleto = `${alumno.nombre} ${alumno.apellido}`.toLowerCase();
            const deporteNombre = deporte.deporte.toLowerCase();
            const deporteCategoria = deporte.categoria.toLowerCase();

            console.log("Comparando alumnoNombreCompleto:", alumnoNombreCompleto, "con filtro de nombre:", filters.nombre);
            console.log("Comparando deporteNombre:", deporteNombre, "con filtro de deporte:", filters.deporte);
            console.log("Comparando deporteCategoria:", deporteCategoria, "con filtro de categoria:", filters.categoria);
            console.log("Comparando mes:", monthYear, "con filtro de mes:", filters.mes);

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

    useEffect(() => {
        asistencias();
    }, []);

    return (
        <div className="text-black text-center py-32">
            <h1 className="text-2xl font-semibold mb-8">Asistencias por Alumno</h1>

            {/* Filtros */}
            <div className="mb-4">
                <input
                    type="text"
                    name="nombre"
                    value={filters.nombre}
                    onChange={handleFilterChange}
                    placeholder="Filtrar por nombre"
                    className="px-4 py-2 border border-gray-300 rounded-lg mb-2"
                />
                <input
                    type="text"
                    name="deporte"
                    value={filters.deporte}
                    onChange={handleFilterChange}
                    placeholder="Filtrar por deporte"
                    className="px-4 py-2 border border-gray-300 rounded-lg mb-2"
                />
                <input
                    type="text"
                    name="categoria"
                    value={filters.categoria}
                    onChange={handleFilterChange}
                    placeholder="Filtrar por categoría"
                    className="px-4 py-2 border border-gray-300 rounded-lg mb-2"
                />
                <input
                    type="month"
                    name="mes"
                    value={filters.mes}
                    onChange={handleFilterChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg mb-2"
                />
            </div>

            {Object.keys(groupedData).map((monthYear) => (
                <div key={monthYear} className="mb-8">
                    <table className="mx-auto w-1/2">
                        <thead className="border-b-2">
                            <tr>
                                <th className="py-2 px-5 text-left">Mes</th>
                                <th className="py-2 px-5 text-left">Alumno</th>
                                <th className="py-2 px-5 text-left">Deporte</th>
                                <th className="py-2 px-5 text-left">Categoría</th>
                                <th className="py-2 px-5 text-left">Asistencias</th>
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
                                <tr key={alumnoId} className="hover:bg-gray-100 border-b-2 text-left">
                                    <td className="px-4 py-2">{monthYear}</td>
                                    <td className="px-4 py-2">{alumno ? `${alumno.nombre} ${alumno.apellido}` : 'Cargando...'}</td>
                                    <td className="px-4 py-2">{deporte ? deporte.deporte : 'Cargando...'}</td>
                                    <td className="px-4 py-2">{deporte ? deporte.categoria : 'Cargando...'}</td>
                                    <td className="px-4 py-2">{asistencia}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};
