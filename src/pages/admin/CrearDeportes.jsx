import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CrearDeportes = () => {
  const [deportes] = useState(["Futbol", "Voley", "Basquet", "Tenis"]);
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
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  const [deportesGuardados, setDeportesGuardados] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [deporteEditandoId, setDeporteEditandoId] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/usuarios?rol=profesor`)
      .then((res) => res.json())
      .then((data) => {
        const profesoresFiltrados = data.filter((usuario) => usuario.rol === 'profesor');
        setProfesores(profesoresFiltrados);
      })
      .catch((error) => console.error("Error al obtener los profesores:", error));

    fetch(`${apiUrl}/api/deportes`)
      .then((res) => res.json())
      .then((data) => {
        setDeportesGuardados(data);
      })
      .catch((error) => console.error("Error al obtener los deportes:", error));
  }, []);

  const guardarDeporte = async () => {
    if (
      !deporteSeleccionado ||
      !categoriaSeleccionada ||
      !generoSeleccionado ||
      profesoresSeleccionados.length === 0
    ) {
      setError("Todos los campos son obligatorios.");
      setExito("");
      return;
    }

    try {
      const nuevoDeporte = {
        deporte: deporteSeleccionado,
        categoria: categoriaSeleccionada,
        genero: generoSeleccionado,
        id_usuarios: profesoresSeleccionados,
      };

      const saveResponse = await fetch(`${apiUrl}/api/deportes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoDeporte),
      });

      if (!saveResponse.ok) throw new Error("Error al guardar el deporte");

      setExito("Deporte guardado con éxito.");
      setError("");
      setDeporteSeleccionado("");
      setCategoriaSeleccionada("");
      setGeneroSeleccionado("");
      setProfesoresSeleccionados([]);
      const updatedDeportes = await fetch(`${apiUrl}/api/deportes`);
      const updatedData = await updatedDeportes.json();
      setDeportesGuardados(updatedData);
    } catch (error) {
      console.error("Error:", error);
      setError("Hubo un problema al guardar el deporte.");
      setExito("");
    }
  };

  const actualizarDeporte = async () => {
    if (
      !deporteSeleccionado ||
      !categoriaSeleccionada ||
      !generoSeleccionado ||
      profesoresSeleccionados.length === 0
    ) {
      setError("Todos los campos son obligatorios.");
      setExito("");
      return;
    }

    try {
      const deporteActualizado = {
        deporte: deporteSeleccionado,
        categoria: categoriaSeleccionada,
        genero: generoSeleccionado,
        id_usuarios: profesoresSeleccionados,
      };

      const response = await fetch(`${apiUrl}/api/deportes/${deporteEditandoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deporteActualizado),
      });

      if (!response.ok) throw new Error("Error al actualizar el deporte");

      setExito("Deporte actualizado con éxito.");
      setError("");
      cancelarEdicion();

      const updatedDeportes = await fetch(`${apiUrl}/api/deportes`);
      const updatedData = await updatedDeportes.json();
      setDeportesGuardados(updatedData);
    } catch (error) {
      console.error("Error:", error);
      setError("Hubo un problema al actualizar el deporte.");
      setExito("");
    }
  };

  const eliminarProfesor = (id) => {
    setProfesoresSeleccionados((prevState) =>
      prevState.filter((profesorId) => profesorId.toString() !== id.toString())
    );
  };

  const profesoresDisponibles = profesores.filter(
    (profesor) => !profesoresSeleccionados.includes(profesor.id)
  );

  const agregarProfesor = (id) => {
    if (!profesoresSeleccionados.includes(id)) {
      setProfesoresSeleccionados((prevState) => [...prevState, id]);
    } else {
      setError("Este profesor ya está seleccionado.");
    }
  };

  const editarDeporte = (deporte) => {
    console.log("Editing deporte:", deporte);
    console.log("deporte.id_usuarios:", deporte.id_usuarios);

    const profesoresIds = deporte.id_usuarios
      ? [deporte.id_usuarios]
      : [];

    setDeporteSeleccionado(deporte.deporte);
    setCategoriaSeleccionada(deporte.categoria);
    setGeneroSeleccionado(deporte.genero);
    setProfesoresSeleccionados(profesoresIds);
    setModoEdicion(true);
    setDeporteEditandoId(deporte.id);
  };

  const cancelarEdicion = () => {
    setModoEdicion(false);
    setDeporteEditandoId(null);
    setDeporteSeleccionado("");
    setCategoriaSeleccionada("");
    setGeneroSeleccionado("");
    setProfesoresSeleccionados([]);
  };

  const profesoresAsociados = profesoresSeleccionados
    .map((profesorId) => profesores.find((profesor) => profesor.id.toString() === profesorId.toString()))
    .filter((profesor) => profesor !== undefined);

  return (
    <div className="text-black pb-10 pt-32 px-2 w-full mx-auto">
      <div className="flex items-center justify-between w-11/12 px-2 mx-auto">
        <h1 className="text-4xl font-semibold text-center text-green-700 ">
          {modoEdicion ? "Editar Deporte" : "Crear Deporte"}
        </h1>
        <button
          onClick={() => navigate("/admin")}
          className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
        >
          Volver
        </button>
      </div>

      <div className="space-y-4 text-gray-800 max-w-7xl mx-auto shadow-xl rounded-lg pt-2">
        {error && <div className="text-red-500">{error}</div>}
        {exito && <div className="text-green-500">{exito}</div>}
        <div>
          <select
            className="w-full p-2 border rounded"
            value={deporteSeleccionado}
            onChange={(e) => setDeporteSeleccionado(e.target.value)}
            required
          >
            <option value="">Selecciona un deporte</option>
            {deportes.map((deporte, index) => (
              <option key={index} value={deporte}>
                {deporte}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            className="w-full p-2 border rounded"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            className="w-full p-2 border rounded"
            value={generoSeleccionado}
            onChange={(e) => setGeneroSeleccionado(e.target.value)}
            required
          >
            <option value="">Selecciona un género</option>
            {generos.map((genero, index) => (
              <option key={index} value={genero}>
                {genero}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => agregarProfesor(e.target.value)}
            value=""
          >
            <option value="">Selecciona un profesor</option>
            {profesoresDisponibles.map((profesor) => (
              <option
                key={profesor.id}
                value={profesor.id}
                disabled={profesoresSeleccionados.includes(profesor.id)} // Deshabilitar si ya está seleccionado
              >
                {profesor.usuario}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Profesores Seleccionados</label>
          <div className="flex flex-wrap gap-2">
            {profesoresAsociados.map((profesor) => (
              <div
                key={profesor.id}
                className="flex items-center bg-gray-200 rounded-full px-3 py-1"
              >
                <span>{profesor.usuario}</span>
                <button
                  onClick={() => eliminarProfesor(profesor.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          className="bg-green-800 text-white px-4 py-2 rounded"
          onClick={modoEdicion ? actualizarDeporte : guardarDeporte}
        >
          {modoEdicion ? "Actualizar Deporte" : "Guardar Deporte"}
        </button>

        {modoEdicion && (
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
            onClick={cancelarEdicion}
          >
            Cancelar Edición
          </button>
        )}

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Deportes Existentes</h2>
          <div className="space-y-4">
            {deportesGuardados.map((deporte) => (
              <div key={deporte.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <div>
                  <h3 className="text-xl font-semibold">{deporte.deporte} - {deporte.categoria} - {deporte.genero}</h3>
                </div>
                <button
                  onClick={() => editarDeporte(deporte)}
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Editar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};