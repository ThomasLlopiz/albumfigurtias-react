import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';

export const Inscriptos = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [inscripciones, setInscripciones] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroDisciplina, setFiltroDisciplina] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [editingInscripcion, setEditingInscripcion] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const itemsPerPage = 12;
    const navigate = useNavigate();

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(inscripcionesFiltradas);

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Inscripciones");

        XLSX.writeFile(wb, "inscripciones.xlsx");
    };

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

    const openEditModal = (inscripcion) => {
        setEditingInscripcion(inscripcion);
        setIsModalOpen(true);
    };

    const closeEditModal = () => {
        setIsModalOpen(false);
        setEditingInscripcion(null);
    };

    const handleSaveChanges = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/inscripciones/${editingInscripcion.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingInscripcion),
            });

            if (response.ok) {
                setInscripciones(prevInscripciones =>
                    prevInscripciones.map(inscripcion =>
                        inscripcion.id === editingInscripcion.id ? editingInscripcion : inscripcion
                    )
                );
                closeEditModal();
            } else {
                console.error('Error al actualizar la inscripción');
            }
        } catch (error) {
            console.error('Error al guardar los cambios:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingInscripcion(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        fetchIncripciones();
    }, []);

    const inscripcionesFiltradas = inscripciones.filter(inscripcion => {
        const coincideNombre = inscripcion.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
        const coincideDisciplina = filtroDisciplina === '' || inscripcion.disciplina.toLowerCase() === filtroDisciplina.toLowerCase();
        return coincideNombre && coincideDisciplina;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = inscripcionesFiltradas.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(inscripcionesFiltradas.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="mx-auto p-6 mt-32 text-black">
            <div className='flex justify-around items-center mb-10'>
                <h2 className="text-3xl font-semibold text-black-800 mb-6 text-center">LISTADO DE INSCRIPCIONES</h2>
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate("/admin")}
                        className="bg-green-600 hover:bg-green-800 text-white py-1 px-6 rounded-lg font-bold transition duration-200"
                    >
                        Volver
                    </button>
                    <button
                        onClick={exportToExcel}
                        className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-6 rounded-lg font-bold transition duration-200"
                    >
                        Exportar a Excel
                    </button>
                </div>
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
                    <option value="padel">Padel</option>
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
                            <th className="px-4 py-2 text-left border-b">Número de Cuenta</th>
                            <th className="px-4 py-2 text-left border-b">Planilla</th>
                            <th className="px-4 py-2 text-left border-b">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((inscripcion) => (
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
                                <td className="px-4 py-2 border-b border-green-600">{inscripcion.numero_cuenta || 'N/A'}</td>
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
                                <td className="px-4 py-2 border-b border-green-600">
                                    <button
                                        onClick={() => openEditModal(inscripcion)}
                                        className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-4 rounded-lg font-bold transition duration-200"
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
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
                    Página {currentPage} de {Math.ceil(inscripcionesFiltradas.length / itemsPerPage)}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(inscripcionesFiltradas.length / itemsPerPage)}
                    className="bg-green-600 hover:bg-green-800 text-white py-1 px-4 rounded-lg font-bold transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Siguiente
                </button>
            </div>

            {/* Modal de edición */}
            {isModalOpen && editingInscripcion && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Editar Inscripción</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={editingInscripcion.nombre}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    value={editingInscripcion.apellido}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Género</label>
                                <input
                                    type="text"
                                    name="genero"
                                    value={editingInscripcion.genero}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">DNI</label>
                                <input
                                    type="number"
                                    name="dni"
                                    value={editingInscripcion.dni}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Dirección</label>
                                <input
                                    type="text"
                                    name="direccion"
                                    value={editingInscripcion.direccion}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                                <input
                                    type="number"
                                    name="telefono"
                                    value={editingInscripcion.telefono}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                                <input
                                    type="date"
                                    name="fecha_nacimiento"
                                    value={editingInscripcion.fecha_nacimiento}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Responsable</label>
                                <input
                                    type="text"
                                    name="responsable"
                                    value={editingInscripcion.responsable || ''}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Disciplina</label>
                                <input
                                    type="text"
                                    name="disciplina"
                                    value={editingInscripcion.disciplina}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Número de Cuenta</label>
                                <input
                                    type="number"
                                    name="numero_cuenta"
                                    value={editingInscripcion.numero_cuenta || ''}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={closeEditModal}
                                    className="bg-gray-600 hover:bg-gray-800 text-white py-1 px-4 rounded-lg font-bold transition duration-200"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSaveChanges}
                                    className="bg-green-600 hover:bg-green-800 text-white py-1 px-4 rounded-lg font-bold transition duration-200"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};