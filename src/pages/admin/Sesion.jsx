import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sesion = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario,
          contrasena,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      if (data) {
        localStorage.setItem("id", data.id);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("expires_at", data.expires_at);
        localStorage.setItem("rol", data.rol);
        navigate("/admin");
      } else {
        throw new Error("No data received.");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
    }
  };


  return (
    <div className="flex justify-center items-center pt-40 pb-32 bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-80">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={login} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            className="border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-all duration-300"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
