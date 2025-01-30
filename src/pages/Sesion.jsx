import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sesion = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();



    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: usuario,
          contrasena: contrasena,
          rol: rol,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("expires_at", data.expires_at);
        localStorage.setItem("rol", data.rol);
        navigate("/admin");
      } else {
        throw new Error("Error en el servidor");
      }
    } catch (error) {
      setError("Error al conectar con el servidor.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-32 mb-32 mx-auto text-black">
      <div className="flex flex-col items-center justify-center gap-2 mx-auto w-56">
        <h1 className="text-4xl font-bold">Sesión</h1>

        {error && <p className="text-red-500">{error}</p>}

        <div>
          <input
            className="border-2 border-gray-700 rounded-md px-4 py-1 w-full"
            type="text"
            placeholder="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div>
          <input
            className="border-2 border-gray-700 rounded-md px-4 py-1"
            type="password"
            placeholder="contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <button
          className="bg-green-700 py-1 rounded-lg text-white w-full"
          onClick={login}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};
