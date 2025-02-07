import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Importa useNavigate


export const CrearDeportes = () => {
  const [deportes] = useState([
    "Fútbol",
    "Vóley",
    "Básquet",
    "Handball",
    "Atletismo",
  ]);
  const navigate = useNavigate(); // Inicializa useNavigate
  const [categorias] = useState([
    "Sub 12",
    "Sub 13",
    "Sub 14",
    "Sub 15",
    "Sub 16",
    "Sub 17",
    "Sub 18",
    "Primera",
  ]);
  const [generos] = useState(["Masculino", "Femenino"]);
  const [profesores, setProfesores] = useState([]);
  const [deporteSeleccionado, setDeporteSeleccionado] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [generoSeleccionado, setGeneroSeleccionado] = useState("");
  const [profesorSeleccionado, setProfesorSeleccionado] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/usuarios?rol=profesor")
      .then((res) => res.json())
      .then((data) => {
        setProfesores(data);
      })
      .catch((error) =>
        console.error("Error al obtener los profesores:", error)
      );
  }, []);

  const guardarDeporte = async () => {
    if (
      !deporteSeleccionado ||
      !categoriaSeleccionada ||
      !generoSeleccionado ||
      !profesorSeleccionado
    ) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const nuevoDeporte = {
      deporte: deporteSeleccionado,
      categoria: categoriaSeleccionada,
      genero: generoSeleccionado,
      id_usuario: profesorSeleccionado,
    };

    try {
      const response = await fetch("http://localhost:8000/api/deportes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoDeporte),
      });

      if (!response.ok) throw new Error("Error al guardar el deporte");

      const data = await response.json();
      alert("Deporte guardado con éxito");
      setDeporteSeleccionado("");
      setCategoriaSeleccionada("");
      setGeneroSeleccionado("");
      setProfesorSeleccionado("");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al guardar el deporte");
    }
  };

  return (
    <div className="min-h-screen text-black py-16">
      <h1 className="text-4xl font-semibold text-center text-green-700 px-1 py-12">
        Crear Deporte
      </h1>
      <div className="space-y-4 text-gray-800 max-w-7xl mx-auto shadow-xl rounded-lg p-6">
        {/* Select de Deportes */}
        <div>
          <label className="block mb-1">Deporte</label>
          <select
            className="w-full p-2 border rounded"
            value={deporteSeleccionado}
            onChange={(e) => setDeporteSeleccionado(e.target.value)}
          >
            <option value="">Selecciona un deporte</option>
            {deportes.map((deporte, index) => (
              <option key={index} value={deporte}>
                {deporte}
              </option>
            ))}
          </select>
        </div>

        {/* Select de Categorías */}
        <div>
          <label className="block mb-1">Categoría</label>
          <select
            className="w-full p-2 border rounded"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        {/* Select de Géneros */}
        <div>
          <label className="block mb-1">Género</label>
          <select
            className="w-full p-2 border rounded"
            value={generoSeleccionado}
            onChange={(e) => setGeneroSeleccionado(e.target.value)}
          >
            <option value="">Selecciona un género</option>
            {generos.map((genero, index) => (
              <option key={index} value={genero}>
                {genero}
              </option>
            ))}
          </select>
        </div>

        {/* Select de Profesores */}
        <div>
          <label className="block mb-1">Profesor</label>
          <select
            className="w-full p-2 border rounded"
            value={profesorSeleccionado}
            onChange={(e) => setProfesorSeleccionado(e.target.value)}
          >
            <option value="">Selecciona un profesor</option>
            {profesores.map((profesor) => (
              <option key={profesor.id} value={profesor.id}>
                {profesor.usuario}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-green-800 text-white px-4 py-2 rounded mt-4"
          onClick={guardarDeporte}
        >
          Guardar Deporte
        </button>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/admin")}
          className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
        >
          Volver
        </button>
      </div>
    </div>
  );
};
