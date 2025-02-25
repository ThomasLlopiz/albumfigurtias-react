import { useState, useEffect } from "react";
export const Curriculums = () => {
  const [postulantes, setPostulantes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuestaPostulantes = await fetch('http://localhost:8000/api/postulantes');
        if (!respuestaPostulantes.ok) throw new Error('No se pudieron obtener los postulantes');
        const datosPostulantes = await respuestaPostulantes.json();

        const postulantesConExperiencias = await Promise.all(
          datosPostulantes.data.map(async (postulante) => {
            const respuestaExperiencias = await fetch(
              `http://localhost:8000/api/experiences?dni=${postulante.dni}`
            );
            if (!respuestaExperiencias.ok) throw new Error('No se pudieron obtener las experiencias');
            const datosExperiencias = await respuestaExperiencias.json();
            return { ...postulante, experiences: datosExperiencias };
          })
        );

        setPostulantes(postulantesConExperiencias);
        setCargando(false);
      } catch (err) {
        setError('Error al obtener los datos: ' + err.message);
        setCargando(false);
      }
    };

    obtenerDatos();
  }, []);

  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="my-20">
      <h1 className="text-center text-3xl font-semibold mb-6">Currículums</h1>
      {postulantes.length === 0 ? (
        <p className="text-center">No se encontraron postulantes.</p>
      ) : (
        <div className="">
          <table className="border-collapse border border-green-800 w-11/12 mx-auto rounded-lg">
            <thead>
              <tr className="bg-green-800 text-white">
                <th className="px-6 py-3 border border-green-800 text-left font-normal">Nombre</th>
                <th className="px-6 py-3 border border-green-800 text-left font-normal">DNI</th>
                <th className="px-6 py-3 border border-green-800 text-left font-normal">Correo</th>
                <th className="px-6 py-3 border border-green-800 text-left font-normal">Teléfono</th>
                <th className="px-6 py-3 border border-green-800 text-left font-normal">Experiencias</th>
              </tr>
            </thead>
            <tbody>
              {postulantes.map((postulante) => (
                <tr key={postulante.id} className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 border border-green-800">{postulante.nombre || 'No se proporcionó nombre'}</td>
                  <td className="px-6 py-4 border border-green-800">{postulante.dni || 'N/A'}</td>
                  <td className="px-6 py-4 border border-green-800">{postulante.mail || 'N/A'}</td>
                  <td className="px-6 py-4 border border-green-800">{postulante.telefono || 'N/A'}</td>
                  <td className="px-6 py-4 border border-green-800">
                    {postulante.experiences.length > 0 ? (
                      <ul className="list-none pl-0">
                        {postulante.experiences.map((exp) => (
                          <li key={exp.id} className="text-sm mb-2">
                            <strong>{exp.empresa || 'Empresa desconocida'}</strong> - {exp.puesto || 'Puesto desconocido'}<br />
                            <span>Desde: {exp.fecha_inicio || 'N/A'} Hasta: {exp.fecha_fin || 'N/A'}</span><br />
                            <span>Motivo de finalización: {exp.motivo_fin || 'N/A'}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay experiencias registradas.</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


