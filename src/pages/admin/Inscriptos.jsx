import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const Inscriptos = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [inscripciones, setInscripciones] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroDisciplina, setFiltroDisciplina] = useState('');
    const navigate = useNavigate();

    const fetchIncripciones = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/inscripciones`);
            const data = await response.json();
            setInscripciones(data);
        } catch (error) {
            console.error('Error al obtener las inscripciones:', error);
        }
    };

    const handlePlanillaChange = async (id, currentPlanilla) => {
        const newPlanilla = !currentPlanilla;
        setInscripciones(prevInscripciones =>
            prevInscripciones.map(inscripcion =>
                inscripcion.id === id ? { ...inscripcion, planilla: newPlanilla } : inscripcion
            )
        );

        try {
            const response = await fetch(`${apiUrl}/api/inscripciones/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ planilla: newPlanilla }),
            });

            if (!response.ok) {
                setInscripciones(prevInscripciones =>
                    prevInscripciones.map(inscripcion =>
                        inscripcion.id === id ? { ...inscripcion, planilla: currentPlanilla } : inscripcion
                    )
                );
                console.error('Error al actualizar la planilla');
            }
        } catch (error) {
            setInscripciones(prevInscripciones =>
                prevInscripciones.map(inscripcion =>
                    inscripcion.id === id ? { ...inscripcion, planilla: currentPlanilla } : inscripcion
                )
            );
            console.error('Error al cambiar el estado de planilla:', error);
        }
    };

    useEffect(() => {
        fetchIncripciones();
    }, []);

    const inscripcionesFiltradas = inscripciones.filter(inscripcion => {
        const coincideNombre = inscripcion.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
        const coincideDisciplina = filtroDisciplina === '' || inscripcion.disciplina.toLowerCase() === filtroDisciplina.toLowerCase();
        return coincideNombre && coincideDisciplina;
    });

    return (
        <div className="mx-auto p-6 mt-32 text-black">
            <div className='flex justify-around items-center mb-10'>
                <h2 className="text-3xl font-semibold text-black-800 mb-6 text-center">LISTADO DE INSCRIPCIONES</h2>
                <button
                    onClick={() => navigate("/admin")}
                    className="bg-green-600 hover:bg-green-800 text-white py-1 px-6 rounded-lg font-bold transition duration-200"
                >
                    Volver
                </button>
            </div>

            {/* Filtros */}
            <div className="mb-6 flex gap-4 justify-center">
                <input
                    type="text"
                    placeholder="Filtrar por nombre"
                    value={filtroNombre}
                    onChange={(e) => setFiltroNombre(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <select
                    value={filtroDisciplina}
                    onChange={(e) => setFiltroDisciplina(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                    <option value="">Todos los deportes</option>
                    <option value="voley">Voley</option>
                    <option value="basquet">Básquet</option>
                    <option value="tenis">Tenis</option>
                    <option value="futbol">Fútbol</option>
                </select>
            </div>

            {/* Contenedor con scroll lateral en mobile */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-green-600 whitespace-nowrap">
                    <thead>
                        <tr className="bg-green-600 text-white">
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
                        {inscripcionesFiltradas.map((inscripcion) => (
                            <tr key={inscripcion.id}>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.nombre}</td>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.apellido}</td>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.genero}</td>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.dni}</td>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.direccion}</td>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.telefono}</td>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.fecha_nacimiento}</td>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.responsable || 'N/A'}</td>
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.disciplina}</td>
                                <td className="px-4 py-2 border-b border-green-600 text-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={inscripcion.planilla}
                                            onChange={() => handlePlanillaChange(inscripcion.id, inscripcion.planilla)}
                                            className="sr-only peer"
                                        />
                                        <div
                                            className={`w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${inscripcion.planilla ? 'bg-green-600' : 'bg-red-600'}`}
                                        ></div>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};