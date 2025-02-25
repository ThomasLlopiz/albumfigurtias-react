import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Curriculum = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        dni: '',
        genero: '',
        fecha_nacimiento: '',
        provincia: '',
        localidad: '',
        direccion: '',
        mail: '',
        telefono: '',
        estado_civil: '',
        cv: null,
        nivel_estudio: '',
        institucion: '',
        titulo: '',
        situacion_laboral: '',
        otro_titulo: '',
    });
    const [isUpdate, setIsUpdate] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const fetchPostulante = async (dni, genero) => {
        if (!dni || !genero) return;
        try {
            const response = await fetch(
                `http://localhost:8000/api/postulantes?dni=${dni}&genero=${genero}`
            );
            const result = await response.json();
            const data = result.data.find((p) => p.dni === dni && p.genero === genero);
            if (data) {
                setFormData({ ...data, cv: null });
                setIsUpdate(true);
            }
        } catch (error) {
            console.error('Error al cargar datos:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key] !== null) form.append(key, formData[key]);
        });

        try {
            let response;
            if (isUpdate) {
                response = await fetch(`http://localhost:8000/api/postulantes/${formData.dni}`, {
                    method: 'PUT',
                    body: form,
                });
            } else {
                response = await fetch('http://localhost:8000/api/postulantes', {
                    method: 'POST',
                    body: form,
                });
            }

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Error al guardar datos');
            }

            setMessage({
                text: isUpdate ? 'Actualización exitosa' : 'Inserción exitosa',
                type: 'success',
            });

            if (result.status) {
                navigate(`/experiencias?dni=${encodeURIComponent(formData.dni)}`);
            }
        } catch (error) {
            setMessage({
                text: error.message,
                type: 'error',
            });
        }
    };

    useEffect(() => {
        const { dni, genero } = formData;
        if (dni && genero) fetchPostulante(dni, genero);
    }, [formData.dni, formData.genero]);

    return (
        <>
            <style>
                {`
          /* Estilos del PHP */
          .space-y-24 > * + * {
            margin-top: 6rem;
          }
        `}
            </style>
            <div className="space-y-24">
                <div className="max-w-7xl mx-auto p-6">
                    {message.text && (
                        <div
                            className={`mb-4 p-2 text-white ${message.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                                }`}
                        >
                            {message.text}
                        </div>
                    )}
                    <form id="entradaForm" onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Datos Personales</h2>
                            <p className="text-sm text-gray-600 mt-2">
                                Complete sus datos personales para cargar su Curriculum Vitae.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                    Nombre y Apellido
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre y Apellido"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                                    DNI
                                </label>
                                <input
                                    type="number"
                                    id="dni"
                                    name="dni"
                                    placeholder="DNI"
                                    value={formData.dni}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="genero" className="block text-sm font-medium text-gray-700">
                                    Género
                                </label>
                                <select
                                    id="genero"
                                    name="genero"
                                    value={formData.genero}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                >
                                    <option value="">Selecciona tu género</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="fecha_nacimiento" className="block text-sm font-medium text-gray-700">
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    type="date"
                                    id="fecha_nacimiento"
                                    name="fecha_nacimiento"
                                    value={formData.fecha_nacimiento}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="provincia" className="block text-sm font-medium text-gray-700">
                                    Provincia
                                </label>
                                <input
                                    type="text"
                                    id="provincia"
                                    name="provincia"
                                    placeholder="Provincia"
                                    value={formData.provincia}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="localidad" className="block text-sm font-medium text-gray-700">
                                    Localidad
                                </label>
                                <input
                                    type="text"
                                    id="localidad"
                                    name="localidad"
                                    placeholder="Localidad"
                                    value={formData.localidad}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                                    Dirección
                                </label>
                                <input
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    placeholder="Dirección"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div>
                                <label htmlFor="mail" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="mail"
                                    name="mail"
                                    placeholder="Email"
                                    value={formData.mail}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Teléfono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="estado_civil" className="block text-sm font-medium text-gray-700">
                                    Estado Civil
                                </label>
                                <select
                                    id="estado_civil"
                                    name="estado_civil"
                                    value={formData.estado_civil}
                                    onChange={handleChange}
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                >
                                    <option value="">Selecciona tu estado civil</option>
                                    <option value="Casado">Casado</option>
                                    <option value="Divorciado">Divorciado</option>
                                    <option value="Soltero">Soltero</option>
                                    <option value="Viudo">Viudo</option>
                                    <option value="En Concubinato">En Concubinato</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                                Sube tu CV (PDF)
                            </label>
                            <input
                                type="file"
                                id="cv"
                                name="cv"
                                accept="application/pdf"
                                onChange={handleChange}
                                className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                            />
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-800">Estudios</h2>
                            <p className="text-sm text-gray-600 mt-2">
                                Indique el mayor nivel de estudio que ha realizado, junto con el nombre de la institución y el título obtenido.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="nivel_estudio" className="block text-sm font-medium text-gray-700">
                                    Nivel de Estudios
                                </label>
                                <select
                                    id="nivel_estudio"
                                    name="nivel_estudio"
                                    value={formData.nivel_estudio}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                >
                                    <option value="">--Selecciona tu nivel de estudios--</option>
                                    <option value="Secundario Completo">Secundario Completo</option>
                                    <option value="Terciario en Curso">Terciario en Curso</option>
                                    <option value="Terciario Completo">Terciario Completo</option>
                                    <option value="Universitario en Curso">Universitario en Curso</option>
                                    <option value="Universitario Completo">Universitario Completo</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                                    Título Obtenido
                                </label>
                                <input
                                    type="text"
                                    id="titulo"
                                    name="titulo"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                    placeholder="Escribe tu título"
                                />
                            </div>

                            <div>
                                <label htmlFor="institucion" className="block text-sm font-medium text-gray-700">
                                    Institución
                                </label>
                                <input
                                    type="text"
                                    id="institucion"
                                    name="institucion"
                                    value={formData.institucion}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                    placeholder="Escribe tu institución"
                                />
                            </div>

                            <div>
                                <label htmlFor="situacion_laboral" className="block text-sm font-medium text-gray-700">
                                    Situación Laboral
                                </label>
                                <select
                                    id="situacion_laboral"
                                    name="situacion_laboral"
                                    value={formData.situacion_laboral}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                >
                                    <option value="">Selecciona tu situación laboral</option>
                                    <option value="Independiente">Independiente</option>
                                    <option value="Sin trabajo">Sin trabajo</option>
                                    <option value="Trabajo temporal">Trabajo temporal</option>
                                    <option value="Trabajo efectivo">Trabajo efectivo</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="otro_titulo" className="block text-sm font-medium text-gray-700">
                                Otro Título
                            </label>
                            <input
                                type="text"
                                id="otro_titulo"
                                name="otro_titulo"
                                value={formData.otro_titulo}
                                onChange={handleChange}
                                required
                                className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
                                placeholder="Escribe otro título"
                            />
                        </div>

                        <div className="mt-6 flex space-x-4">
                            {isUpdate && (
                                <a
                                    href={`/experiencias?dni=${encodeURIComponent(formData.dni)}`}
                                    className="w-1/5 text-center py-3 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                >
                                    Agregar Experiencia
                                </a>
                            )}
                            <button
                                type="submit"
                                className={`${isUpdate ? 'w-4/5' : 'w-full'} py-3 bg-green-800 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2`}
                            >
                                Guardar Datos
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};