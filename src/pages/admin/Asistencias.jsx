import { useEffect, useState } from 'react';

export const Asistencias = () => {
    const [data, setData] = useState([]);
    const [alumnosData, setAlumnosData] = useState({});
    const [groupedData, setGroupedData] = useState({});

    const asistencias = () => {
        fetch("http://localhost:8000/api/asistencias")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                groupByMonthAndAlumno(data);
                fetchAlumnosData(data);
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

    // Formatear mes para que siempre tenga dos dígitos (01, 02, ..., 12)
    const formatMonth = (month) => {
        return month < 10 ? `0${month + 1}` : month + 1;
    };

    const groupByMonthAndAlumno = (asistencias) => {
        const grouped = {};

        asistencias.forEach((asistencia) => {
            const date = new Date(asistencia.fecha);
            const monthYear = `${formatMonth(date.getMonth())}/${date.getFullYear()}`; // Cambiado a formato mes/año
            const alumnoId = asistencia.id_alumno;

            if (!grouped[monthYear]) {
                grouped[monthYear] = {};
            }

            if (!grouped[monthYear][alumnoId]) {
                grouped[monthYear][alumnoId] = 0;
            }

            grouped[monthYear][alumnoId]++;
        });

        setGroupedData(grouped);
    };

    useEffect(() => {
        asistencias();
    }, []);

    return (
        <div className='text-black text-center py-32'>
            <h1 className="text-2xl font-semibold mb-8">Asistencias por Alumno</h1>
            {
                Object.keys(groupedData).map((monthYear) => (
                    <div key={monthYear} className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">{monthYear}</h2>
                        <table className="mx-auto w-1/2">
                            <thead className='border-b-2'>
                                <tr>
                                    <th className="py-2 px-5 text-left">Alumno</th>
                                    <th className="py-2 px-5 text-left">Asistencias</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(groupedData[monthYear]).map((alumnoId) => {
                                        const alumno = alumnosData[alumnoId];
                                        return (
                                            <tr key={alumnoId} className="hover:bg-gray-100 border-b-2 text-left">
                                                <td className="px-4 py-2">{alumno ? `${alumno.nombre} ${alumno.apellido}` : 'Cargando...'}</td>
                                                <td className="px-4 py-2">{groupedData[monthYear][alumnoId]}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ))
            }
        </div>
    );
};
