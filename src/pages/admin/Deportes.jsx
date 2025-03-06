import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faBasketballBall, faVolleyballBall, faBaseballBall } from "@fortawesome/free-solid-svg-icons";

export const Deportes = () => {
  const [deportes, setDeportes] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/deportes`)
      .then((res) => res.json())
      .then((data) => {
        setDeportes(data);
      })
      .catch((error) => console.error("Error al obtener los deportes:", error));
  }, []);

  const handleDeporteClick = (deporte) => {
    // Verifica si id_usuarios es una cadena, si no, convierte a cadena separada por comas
    const idsPermitidos = Array.isArray(deporte.id_usuarios)
      ? deporte.id_usuarios.join(",") // Convierte el arreglo de IDs a una cadena separada por comas
      : deporte.id_usuarios; // Si ya es una cadena, mantenlo tal cual

    if (idsPermitidos.split(",").includes(id.toString())) {
      navigate(
        `/asistencia?deporte=${deporte.deporte}&categoria=${deporte.categoria}&idDeporte=${deporte.id}&genero=${deporte.genero}`
      );
    }
  };


  const getIconForDeporte = (deporte) => {
    switch (deporte) {
      case "Fútbol":
        return faFutbol;
      case "Básquet":
        return faBasketballBall;
      case "Vóley":
        return faVolleyballBall;
      case "Tenis":
        return faBaseballBall;
      default:
        return faFutbol;
    }
  };

  return (
    <div className="text-black text-center py-32">
      <div className="flex items-center justify-around">
        <h1 className="text-4xl font-semibold text-center text-green-700 px-1 py-12">
          Selecciona tu Deporte
        </h1>
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/admin")}
            className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
          >
            Volver
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 max-w-7xl mx-auto">
        {deportes.map((deporte) => (
          <div
            key={deporte.id}
            className="flex flex-col items-center  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform cursor-pointer"
            onClick={() => handleDeporteClick(deporte)}
          >
            <FontAwesomeIcon icon={getIconForDeporte(deporte.deporte)} className="text-5xl mb-4 text-green-700" />
            <h3 className="text-xl font-semibold text-green-700">{deporte.deporte}</h3>
            <p className="text-gray-600">{deporte.categoria} - {deporte.genero}</p>
          </div>
        ))}
      </div>

    </div>
  );
};
