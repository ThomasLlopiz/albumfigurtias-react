import { useState, useEffect } from 'react';

export const Inscriptos = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [inscripciones, setInscripciones] = useState([]);

    // Función para obtener las inscripciones desde la API
    const fetchIncripciones = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/inscripciones`);
            const data = await response.json();
            setInscripciones(data);
        } catch (error) {
            console.error('Error al obtener las inscripciones:', error);
        }
    };

    // Función para actualizar el estado de "planilla"
    const handlePlanillaChange = async (id, planilla) => {
        try {
            const response = await fetch(`${apiUrl}/api/inscripciones/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ planilla: !planilla }), // Invertir el estado de planilla
            });

            if (response.ok) {
                const updatedInscripcion = await response.json();
                setInscripciones(inscripciones.map(inscripcion =>
                    inscripcion.id === id ? { ...inscripcion, planilla: updatedInscripcion.planilla } : inscripcion
                ));
            } else {
                console.error('Error al actualizar la planilla');
            }
        } catch (error) {
            console.error('Error al cambiar el estado de planilla:', error);
        }
    };

    useEffect(() => {
        fetchIncripciones(); // Llamar a la API cuando el componente se monte
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6 mt-32 text-black">
            <h2 className="text-2xl font-semibold text-black-800 mb-6">Listado de Inscripciones</h2>

            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left border-b">Nombre</th>
                        <th className="px-4 py-2 text-left border-b">Apellido</th>
                        <th className="px-4 py-2 text-left border-b">Género</th>
                        <th className="px-4 py-2 text-left border-b">DNI</th>
                        <th className="px-4 py-2 text-left border-b">Dirección</th>
                        <th className="px-4 py-2 text-left border-b">Teléfono</th>
                        <th className="px-4 py-2 text-left border-b">Fecha de Nacimiento</th>
                        <th className="px-4 py-2 text-left border-b">Responsable</th>
                        <th className="px-4 py-2 text-left border-b">Disciplina</th>
                        <th className="px-4 py-2 text-left border-b">Planilla</th>
                    </tr>
                </thead>
                <tbody>
                    {inscripciones.map((inscripcion) => (
                        <tr key={inscripcion.id}>
                            <td className="px-4 py-2 border-b">{inscripcion.nombre}</td>
                            <td className="px-4 py-2 border-b">{inscripcion.apellido}</td>
                            <td className="px-4 py-2 border-b">{inscripcion.genero}</td>
                            <td className="px-4 py-2 border-b">{inscripcion.dni}</td>
                            <td className="px-4 py-2 border-b">{inscripcion.direccion}</td>
                            <td className="px-4 py-2 border-b">{inscripcion.telefono}</td>
                            <td className="px-4 py-2 border-b">{inscripcion.fecha_nacimiento}</td>
                            <td className="px-4 py-2 border-b">{inscripcion.responsable || 'N/A'}</td>
                            <td className="px-4 py-2 border-b">{inscripcion.disciplina}</td>
                            <td className="px-4 py-2 border-b text-center">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={inscripcion.planilla}
                                        onChange={() => handlePlanillaChange(inscripcion.id, inscripcion.planilla)}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
