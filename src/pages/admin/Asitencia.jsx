import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Asistencia = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inscriptos, setInscriptos] = useState([]);
  const [inscriptosGuardados, setInscriptosGuardados] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const deporte = searchParams.get("deporte");
  const categoria = searchParams.get("categoria");
  const idDeporte = searchParams.get("idDeporte");
  const genero = searchParams.get("genero");
  const formattedDate = new Date().toISOString().slice(0, 19).replace("T", " ");

  const fetchInscriptos = () => {
    setLoading(true);
    fetch("http://localhost:8000/api/inscripciones")
      .then((response) => response.json())
      .then((data) => {
        const inscripcionesFiltradas = data.filter((inscripcion) => {
          return (
            inscripcion.disciplina === deporte &&
            verificarCategoria(inscripcion.fecha_nacimiento, categoria) &&
            inscripcion.genero === genero
          );
        });

        const inscripcionesAmostrar = inscripcionesFiltradas.filter(
          (inscripcion) =>
            !inscriptosGuardados.some((guardada) => guardada.id === inscripcion.id)
        );

        setInscriptos(inscripcionesAmostrar);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const inscriptosGuardados =
      JSON.parse(localStorage.getItem("inscriptos")) || [];
    setInscriptosGuardados(inscriptosGuardados);

    fetchInscriptos();
  }, [deporte, categoria]);

  useEffect(() => {
    if (inscriptosGuardados.length > 0) {
      localStorage.setItem("inscriptos", JSON.stringify(inscriptosGuardados));
    }
  }, [inscriptosGuardados]);

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

  const marcarInasistencia = (inscripcion) => {
    const nuevaListaInscriptos = [
      ...inscriptosGuardados,
      { ...inscripcion, estado: "inasistencia" },
    ];
    setInscriptosGuardados(nuevaListaInscriptos);
    localStorage.setItem("inscriptos", JSON.stringify(nuevaListaInscriptos));

    setInscriptos((prevInscriptos) =>
      prevInscriptos.filter((asistencia) => asistencia.id !== inscripcion.id)
    );
    const requestData = {
      id_alumno: inscripcion.id,
      id_deporte: idDeporte,
      fecha: formattedDate,
      estado: true,
    };
    fetch("http://localhost:8000/api/asistencias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          return response.text().then((text) => {
            throw new Error(`Error ${response.status}: ${text}`);
          });
        }
      })
      .then((data) => {
        console.log("Asistencia registrada en el backend:", data);

      })
      .catch((error) => {
        console.error("Error al registrar la asistencia en el backend:", error);
      });
  };

  const marcarAsistio = (inscripcion) => {
    const nuevaListaInscriptos = [
      ...inscriptosGuardados,
      { ...inscripcion, estado: "asistió" },
    ];
    setInscriptosGuardados(nuevaListaInscriptos);
    localStorage.setItem("inscriptos", JSON.stringify(nuevaListaInscriptos));

    setInscriptos((prevInscriptos) =>
      prevInscriptos.filter((asistencia) => asistencia.id !== inscripcion.id)
    );
    const requestData = {
      id_alumno: inscripcion.id,
      id_deporte: idDeporte,
      fecha: formattedDate,
      estado: true,
    };
    fetch("http://localhost:8000/api/asistencias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          return response.text().then((text) => {
            throw new Error(`Error ${response.status}: ${text}`);
          });
        }
      })
      .then((data) => {
        console.log("Asistencia registrada en el backend:", data);
        console.log("Datos enviados al backend:", requestData);
      })
      .catch((error) => {
        console.error("Error al registrar la asistencia en el backend:", error);
        console.log("Datos enviados al backend:", requestData);
      });
  };

  const reiniciarAsistencia = () => {
    localStorage.removeItem("inscriptos");
    setInscriptosGuardados([]);
    setInscriptos([]);
    fetchInscriptos();
  };

  return (
    <div className="bg-gray-100 min-h-screen text-black py-16">
      <h1 className="text-4xl font-semibold text-center text-green-700 px-1 py-12">
        Asistencia {deporte} - {categoria}
      </h1>
      {/* Mostrar mensaje de carga */}
      {loading && <div className="text-center text-green-700">Cargando...</div>}

      <div className="flex flex-col items-center gap-4">

        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => navigate("/deportes")}
            className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
          >
            Volver
          </button>
          <button
            onClick={reiniciarAsistencia}
            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
          >
            Reiniciar asistencia
          </button>
        </div>

        {inscriptos.map((asistencia) => (
          <div
            key={asistencia.id}
            className="sm:w-1/3 w-96 bg-white rounded-xl shadow-md p-6 flex justify-between items-center gap-4 hover:shadow-xl transition-all duration-300"
          >
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg font-bold transition duration-200"
              onClick={() => marcarInasistencia(asistencia)}
            >
              Ausente
            </button>
            <div className="flex flex-col items-center text-center">
              <p className="text-md font-semibold text-gray-800">
                {asistencia.nombre} {asistencia.apellido}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-lg font-bold transition duration-200"
                onClick={() => marcarAsistio(asistencia)}
              >
                Presente
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
