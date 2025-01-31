import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Deportes = () => {
  const [deportes, setDeportes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/deportes")
      .then((res) => res.json())
      .then((data) => {
        setDeportes(data);
      })
      .catch((error) => console.error("Error al obtener los deportes:", error));
  }, []);

  const handleDeporteClick = (deporte) => {
    navigate(
      `/asistencias?deporte=${deporte.deporte}&categoria=${deporte.categoria}`
    );
  };

  return (
    <div className="text-black text-center mt-32">
      {deportes.map((deporte) => (
        <button
          key={deporte.id}
          className="border-2 border-gray-400 w-full md:w-72 rounded-lg mx-auto mb-1 p-2 hover:bg-green-900 hover:text-white"
          onClick={() => handleDeporteClick(deporte)}
        >
          {deporte.deporte} - {deporte.genero} - {deporte.categoria}
        </button>
      ))}
    </div>
  );
};
