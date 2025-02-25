import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Experiencias = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const dni = queryParams.get('dni');

    const [experiences, setExperiences] = useState([]);
    const [formData, setFormData] = useState({
        dni: dni || '',
        empresa: '',
        referencia: '',
        categoria: '',
        puesto: '',
        fecha_inicio: '',
        fecha_fin: '',
        motivo_fin: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState({ text: '', type: '' });

    const fetchExperiences = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/experiences?dni=${dni}`);
            const data = await response.json();
            setExperiences(data);
        } catch (error) {
            console.error('Error al cargar experiencias:', error);
        }
    };

    useEffect(() => {
        if (dni) fetchExperiences();
    }, [dni]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (editingId) {
                response = await fetch(`http://localhost:8000/api/experiences/${editingId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            } else {
                response = await fetch('http://localhost:8000/api/experiences', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            }

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Error al guardar experiencia');

            setMessage({ text: editingId ? 'Experiencia actualizada' : 'Experiencia creada', type: 'success' });
            setFormData({ dni, empresa: '', referencia: '', categoria: '', puesto: '', fecha_inicio: '', fecha_fin: '', motivo_fin: '' });
            setEditingId(null);
            fetchExperiences();
        } catch (error) {
            setMessage({ text: error.message, type: 'error' });
        }
    };

    const handleEdit = (exp) => {
        setFormData(exp);
        setEditingId(exp.id);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/experiences/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Error al eliminar experiencia');

            setMessage({ text: 'Experiencia eliminada', type: 'success' });
            fetchExperiences();
        } catch (error) {
            setMessage({ text: error.message, type: 'error' });
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Experiencias Laborales</h1>
            {message.text && (
                <div className={`mb-4 p-2 text-white ${message.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
                    {message.text}
                </div>
            )}

            {/* Formulario para agregar/editar experiencia */}
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Empresa</label>
                        <input
                            type="text"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Puesto</label>
                        <input
                            type="text"
                            name="puesto"
                            value={formData.puesto}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Categoría</label>
                        <input
                            type="text"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Referencia</label>
                        <input
                            type="text"
                            name="referencia"
                            value={formData.referencia}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Fecha Inicio</label>
                        <input
                            type="date"
                            name="fecha_inicio"
                            value={formData.fecha_inicio}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Fecha Fin</label>
                        <input
                            type="date"
                            name="fecha_fin"
                            value={formData.fecha_fin}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Motivo Fin</label>
                        <textarea
                            name="motivo_fin"
                            value={formData.motivo_fin}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border rounded-md"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 py-2 px-4 bg-green-800 text-white rounded-md hover:bg-green-600"
                >
                    {editingId ? 'Actualizar Experiencia' : 'Agregar Experiencia'}
                </button>
            </form>

            {/* Lista de experiencias */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Lista de Experiencias</h2>
                {experiences.length === 0 ? (
                    <p>No hay experiencias registradas aún.</p>
                ) : (
                    <ul className="space-y-4">
                        {experiences.map((exp) => (
                            <li key={exp.id} className="border p-4 rounded-md">
                                <p><strong>Empresa:</strong> {exp.empresa}</p>
                                <p><strong>Puesto:</strong> {exp.puesto}</p>
                                <p><strong>Fechas:</strong> {exp.fecha_inicio} - {exp.fecha_fin || 'Actual'}</p>
                                <p><strong>Motivo Fin:</strong> {exp.motivo_fin || 'N/A'}</p>
                                <div className="mt-2 space-x-2">
                                    <button
                                        onClick={() => handleEdit(exp)}
                                        className="py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(exp.id)}
                                        className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button
                onClick={() => navigate('/')} // O donde quieras regresar
                className="mt-6 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
                Volver
            </button>
        </div>
    );
};