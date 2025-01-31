import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Asistencia = () => {
  const location = useLocation();
  const [asistencias, setAsistencias] = useState([]);

  const searchParams = new URLSearchParams(location.search);
  const deporte = searchParams.get("deporte");
  const categoria = searchParams.get("categoria");

  useEffect(() => {
    console.log(deporte, categoria);
    fetch("http://localhost:8000/api/inscripciones")
      .then((response) => response.json())
      .then((data) => {
        const inscripcionesFiltradas = data.filter((inscripcion) => {
          return (
            inscripcion.disciplina === deporte &&
            verificarCategoria(inscripcion.fecha_nacimiento, categoria)
          );
        });
        setAsistencias(inscripcionesFiltradas);
      });
  }, [deporte, categoria]);

  const verificarCategoria = (fechaNacimiento, categoria) => {
    const edad = calcularEdad(fechaNacimiento);
    switch (categoria) {
      case "Sub 12":
        return edad < 12;
      case "Sub 15":
        return edad < 15;
      case "Sub 18":
        return edad < 18;
      case "Primera":
        return edad >= 18;
      default:
        return false;
    }
  };

  const calcularEdad = (fechaNacimiento) => {
    const fecha = new Date(fechaNacimiento);
    const currentYear = new Date().getFullYear();
    const edad = currentYear - fecha.getFullYear();
    return edad;
  };

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

  return (
    <div className="text-black text-center mt-32">
      <h1 className="text-4xl font-bold">Asistencia</h1>
      {asistencias.map((asistencia) => (
        <div
          key={asistencia.id}
          className="flex justify-between items-center gap-2 border-2 border-gray-400 w-full md:w-72 rounded-lg mx-auto mb-1"
        >
          <button
            className="bg-red-700 px-2 py-1 rounded-lg text-white font-extrabold ml-1"
            onClick={() => marcarInasistencia(asistencia.id)}
          >
            x
          </button>
          <p className="text-white text-md font-semibold bg-blue-700 px-5 py-1 rounded-lg mt-1 mb-1">
            {asistencia.nombre} {asistencia.apellido}
          </p>
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
