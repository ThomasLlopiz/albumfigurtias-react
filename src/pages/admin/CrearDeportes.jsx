import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CrearDeportes = () => {
  const [deportes] = useState(["Futbol", "Voley", "Basquet", "Handball", "Atletismo"]);
  const navigate = useNavigate();
  const [categorias] = useState([
    "Sub 12", "Sub 13", "Sub 14", "Sub 15", "Sub 16", "Sub 17", "Sub 18", "Primera"
  ]);
  const [generos] = useState(["Masculino", "Femenino"]);
  const [profesores, setProfesores] = useState([]);
  const [deporteSeleccionado, setDeporteSeleccionado] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [generoSeleccionado, setGeneroSeleccionado] = useState("");
  const [profesoresSeleccionados, setProfesoresSeleccionados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/usuarios?rol=profesor")
      .then((res) => res.json())
      .then((data) => {
        const profesoresFiltrados = data.filter((usuario) => usuario.rol === 'profesor');
        setProfesores(profesoresFiltrados);
      })
      .catch((error) => console.error("Error al obtener los profesores:", error));
  }, []);

  const guardarDeporte = async () => {
    if (
      !deporteSeleccionado ||
      !categoriaSeleccionada ||
      !generoSeleccionado ||
      profesoresSeleccionados.length === 0
    ) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const nuevoDeporte = {
      deporte: deporteSeleccionado,
      categoria: categoriaSeleccionada,
      genero: generoSeleccionado,
      id_usuarios: profesoresSeleccionados,
    };
    console.log("Datos a guardar:", nuevoDeporte);

    try {
      const response = await fetch("http://localhost:8000/api/deportes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deporte: deporteSeleccionado,
          categoria: categoriaSeleccionada,
          genero: generoSeleccionado,
          id_usuarios: profesoresSeleccionados,
        }),
      });

      if (!response.ok) throw new Error("Error al guardar el deporte");

      const data = await response.json();
      alert("Deporte guardado con éxito");
      setDeporteSeleccionado("");
      setCategoriaSeleccionada("");
      setGeneroSeleccionado("");
      setProfesoresSeleccionados([]);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al guardar el deporte");
    }
  };


  const eliminarProfesor = (id) => {
    setProfesoresSeleccionados(profesoresSeleccionados.filter((profesorId) => profesorId !== id));
  };

  const profesoresDisponibles = profesores.filter(
    (profesor) => !profesoresSeleccionados.includes(profesor.id)
  );

  const agregarProfesor = (id) => {
    if (!profesoresSeleccionados.includes(id)) {
      setProfesoresSeleccionados((prevState) => [...prevState, id]);
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

        {/* Select de Profesores (Selección múltiple) */}
        <div>
          <label className="block mb-1">Profesores</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => agregarProfesor(e.target.value)}
            value=""
          >
            <option value="">Selecciona un profesor</option>
            {profesoresDisponibles.map((profesor) => (
              <option key={profesor.id} value={profesor.id}>
                {profesor.usuario}
              </option>
            ))}
          </select>
        </div>

        {/* Mostrar Profesores Seleccionados */}
        <div className="mt-4">
          <label className="block mb-1">Profesores Seleccionados</label>
          <div className="flex flex-wrap gap-2">
            {profesoresSeleccionados.map((profesorId) => {
              const profesor = profesores.find((p) => p.id.toString() === profesorId.toString());
              if (!profesor) {
                console.error(`Profesor con ID ${profesorId} no encontrado.`);
                return null;
              }
              return (
                <div
                  key={profesorId}
                  className="flex items-center bg-gray-200 rounded-full px-3 py-1"
                >
                  <span>{profesor.usuario}</span>
                  <button
                    onClick={() => eliminarProfesor(profesorId)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botón para guardar el deporte */}
        <button
          className="bg-green-800 text-white px-4 py-2 rounded mt-4"
          onClick={guardarDeporte}
        >
          Guardar Deporte
        </button>
      </div>

      {/* Botón para volver */}
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
