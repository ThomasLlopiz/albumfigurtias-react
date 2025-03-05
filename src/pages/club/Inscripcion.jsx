import { useState } from 'react';

export const Inscripcion = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    genero: '',
    dni: '',
    direccion: '',
    telefono: '',
    fecha_nacimiento: '',
    responsable: '',
    planilla: false,
    disciplina: [],
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'disciplina') {
        if (checked) {
          setFormData({
            ...formData,
            disciplina: [...formData.disciplina, value],
          });
        } else {
          setFormData({
            ...formData,
            disciplina: formData.disciplina.filter((item) => item !== value),
          });
        }
      } else {
        setFormData({ ...formData, [name]: checked || value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.disciplina.length === 0) {
      setSuccessMessage('¡Por favor, selecciona al menos un deporte!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      return;
    }

    const dataToSend = {
      ...formData,
      responsable: formData.responsable || 'Sin responsable',
    };

    try {
      for (let disciplina of formData.disciplina) {
        const dataWithDisciplina = {
          ...dataToSend,
          disciplina: disciplina,
        };

        const response = await fetch(`${apiUrl}/api/inscripciones`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataWithDisciplina),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error en la respuesta del servidor:", errorText);
          throw new Error(`Error al crear inscripción para disciplina ${disciplina}`);
        }

        const newInscripcion = await response.json();
      }

      setSuccessMessage('¡Registrado con éxito!');
      setFormData({
        nombre: '',
        apellido: '',
        genero: '',
        dni: '',
        direccion: '',
        telefono: '',
        fecha_nacimiento: '',
        responsable: '',
        planilla: false,
        disciplina: [],
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 10000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='text-black'>

      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-6 space-y-6 mt-32">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Datos Personales</h2>
          <p className="text-sm text-gray-600 mt-2">Completa tus datos e inscríbete a tu deporte favorito.</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-500 text-white text-center p-3 rounded-md mb-4">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              required
              className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Apellido"
              required
              className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div>
            <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI</label>
            <input
              type="number"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              placeholder="DNI"
              required
              className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="responsable" className="block text-sm font-medium text-gray-700">Responsable (en caso de ser menor)</label>
            <input
              type="text"
              name="responsable"
              value={formData.responsable}
              onChange={handleChange}
              placeholder="Responsable"
              className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div>
            <label htmlFor="fecha_nacimiento" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
            <input
              type="date"
              name="fecha_nacimiento"
              value={formData.fecha_nacimiento}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div>
            <label htmlFor="genero" className="block text-sm font-medium text-gray-700">Género</label>
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
            >
              <option value="">Seleccione Género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Dirección"
              required
              className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="number"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
              required
              className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Deportes</label>
            <div className="mt-1 space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="disciplina"
                  value="Basquet"
                  checked={formData.disciplina.includes('Basquet')}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-1 mr-3">Basquet</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="disciplina"
                  value="Futbol"
                  checked={formData.disciplina.includes('Futbol')}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-1 mr-3">Futbol</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="disciplina"
                  value="Tenis"
                  checked={formData.disciplina.includes('Tenis')}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-1 mr-3">Tenis</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="disciplina"
                  value="Voley"
                  checked={formData.disciplina.includes('Voley')}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-1 mr-3">Voley</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            type="submit"
            className="w-full py-3 bg-green-800 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
          >
            Inscribirme
          </button>
        </div>
      </form>

      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center">¿Qué más debo completar para inscribirme?</h2>
          <p className="text-xl text-gray-600 mt-2 text-center">Debes descargar la ficha de inscripción, completarla y
            entregar en secretaria o a tu profesor.</p>
          <div className="flex justify-center py-4">
            <a target="_blank" href="./pdf/Ficha2025.pdf"
              className="px-4 py-3 bg-green-800 text-white text-xl font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2">
              Descargar Ficha
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
