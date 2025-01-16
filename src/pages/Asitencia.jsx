import React, { useState } from "react";
import asistenciaData from "../utiltis/asistencia.json";

export const Asitencia = () => {
  // Cargar las asistencias en el estado
  const [asistencias, setAsistencias] = useState(asistenciaData.asistencia);

  // Función para manejar la acción cuando se hace clic en "x" (inasistencia)
  const marcarInasistencia = (id) => {
    setAsistencias((prevAsistencias) =>
      prevAsistencias.map((asistencia) =>
        asistencia.id === id
          ? { ...asistencia, estado: "inasistencia" }
          : asistencia
      )
    );
  };

  // Función para manejar la acción cuando se hace clic en "O" (asistió)
  const marcarAsistio = (id) => {
    setAsistencias((prevAsistencias) =>
      prevAsistencias.map((asistencia) =>
        asistencia.id === id ? { ...asistencia, estado: "asistió" } : asistencia
      )
    );
  };

  // Filtrar las asistencias para mostrar solo las que están "sin procesar"
  const asistenciasSinProcesar = asistencias.filter(
    (asistencia) => asistencia.estado === "sin procesar"
  );

  return (
    <div className="text-black text-center">
      <h1 className="text-4xl font-bold">Asistencia</h1> <br />
      {asistenciasSinProcesar.map((asistencia, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-2 border-2 border-gray-400 w-full md:w-1/6 rounded-lg mx-auto mb-1"
        >
          {/* Botón para marcar como inasistencia */}
          <button
            className="bg-red-700 px-2 py-1 rounded-lg text-white font-extrabold"
            onClick={() => marcarInasistencia(asistencia.id)}
          >
            x
          </button>

          {/* Nombre de la persona */}
          <p className="text-white text-md font-semibold bg-blue-700 px-5 py-1 rounded-lg mt-1 mb-1">
            {asistencia.nombre}
          </p>

          {/* Botón para marcar como asistió */}
          <button
            className="bg-green-700 px-2 py-1 rounded-lg text-white font-extrabold"
            onClick={() => marcarAsistio(asistencia.id)}
          >
            O
          </button>
        </div>
      ))}
    </div>
  );
};
