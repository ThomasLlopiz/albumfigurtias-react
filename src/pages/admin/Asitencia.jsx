import { useEffect, useState } from "react";

export const Asitencia = () => {
  const [asistencias, setAsistencias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/inscripciones")
      .then((response) => response.json())
      .then((data) => {
        setAsistencias(data);
      });
  }, []);

  useEffect(() => {
    console.log(asistencias);
  }, [asistencias]);

  const marcarInasistencia = (id) => {
    setAsistencias((prevAsistencias) =>
      prevAsistencias.map((asistencia) =>
        asistencia.id === id
          ? { ...asistencia, estado: "inasistencia" }
          : asistencia
      )
    );
  };

  const marcarAsistio = (id) => {
    setAsistencias((prevAsistencias) =>
      prevAsistencias.map((asistencia) =>
        asistencia.id === id ? { ...asistencia, estado: "asistió" } : asistencia
      )
    );
  };

  const asistenciasSinProcesar = asistencias.filter(
    (asistencia) => asistencia.planilla === 0
  );

  return (
    <div className="text-black text-center">
      <h1 className="text-4xl font-bold">Asistencia</h1> <br />
      {asistenciasSinProcesar.map((asistencia, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-2 border-2 border-gray-400 w-full md:w-72 rounded-lg mx-auto mb-1"
        >
          {/* Botón para marcar como inasistencia */}
          <button
            className="bg-red-700 px-2 py-1 rounded-lg text-white font-extrabold ml-1"
            onClick={() => marcarInasistencia(asistencia.id)}
          >
            x
          </button>

          {/* Nombre de la persona */}
          <p className="text-white text-md font-semibold bg-blue-700 px-5 py-1 rounded-lg mt-1 mb-1">
            {asistencia.nombre} {asistencia.apellido}
          </p>

          {/* Botón para marcar como asistió */}
          <button
            className="bg-green-700 px-2 py-1 rounded-lg text-white font-extrabold mr-1"
            onClick={() => marcarAsistio(asistencia.id)}
          >
            O
          </button>
        </div>
      ))}
    </div>
  );
};
