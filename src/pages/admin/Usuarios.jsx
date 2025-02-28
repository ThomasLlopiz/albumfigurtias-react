import { useState, useEffect } from "react";
import { faEye, faEyeSlash, faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export const Usuarios = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasenaConfirmada, setContrasenaConfirmada] = useState("");
    const [rol, setRol] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [verContrasena, setVerContrasena] = useState(false);
    const [verContrasenaConfirmada, setVerContrasenaConfirmada] = useState(false);
    const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);
    const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [mensajeAccion, setMensajeAccion] = useState("");
    const apiUrl = import.meta.env.VITE_API_URL;

    const fetchUsuarios = async () => {
        const response = await fetch(`${apiUrl}/api/usuarios`);
        const data = await response.json();

        if (response.ok) {
            setUsuarios(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (contrasena !== contrasenaConfirmada) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const method = usuarioEditando ? 'PUT' : 'POST'; // Determina si es una actualización
        const url = usuarioEditando
            ? `${apiUrl}/api/usuarios/${usuarioEditando.id}` // URL para actualización
            : `${apiUrl}/api/usuarios`; // URL para creación

        const body = JSON.stringify({
            usuario,
            contrasena,
            rol,
        });

        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });

        const text = await response.text();
        try {
            const data = JSON.parse(text);
            if (response.ok) {
                setMensajeAccion(usuarioEditando ? "Usuario actualizado con éxito" : "Usuario creado con éxito");
                fetchUsuarios(); // Actualiza la lista de usuarios
                setUsuario("");
                setContrasena("");
                setContrasenaConfirmada("");
                setRol("");
                setUsuarioEditando(null); // Limpia el estado de edición
                setTimeout(() => setMensajeAccion(""), 5000);
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Error al parsear JSON:", error);
            alert("Error al crear o actualizar el usuario");
        }
    };

    const eliminarUsuario = async (id) => {
        const response = await fetch(`${apiUrl}/api/usuarios/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            setMensajeAccion("Usuario eliminado con éxito");
            fetchUsuarios();
            setUsuarioAEliminar(null);
            setMensajeConfirmacion("");
            setTimeout(() => setMensajeAccion(""), 5000);
        } else {
            alert("Error al eliminar el usuario");
        }
    };

    const cancelarEliminacion = () => {
        setUsuarioAEliminar(null);
        setMensajeConfirmacion("");
    };

    const confirmarEliminacion = (id) => {
        setUsuarioAEliminar(id);
        setMensajeConfirmacion("¿Estás seguro de que deseas eliminar este usuario?");
    };

    const editarUsuario = (user) => {
        setUsuarioEditando(user);
        setUsuario(user.usuario);
        setContrasena("");
        setContrasenaConfirmada("");
        setRol(user.rol);
    };

    const cancelarEdicion = () => {
        setUsuarioEditando(null);
        setUsuario("");
        setContrasena("");
        setContrasenaConfirmada("");
        setRol("");
    };

    return (
        <div className="mt-32 mb-10 text-black flex flex-col items-center justify-center gap-3 lg:w-1/4 mx-auto p-2">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-4xl font-semibold text-center text-green-700">
                    Usuarios
                </h1>
                <button
                    onClick={() => navigate("/admin")}
                    className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
                >
                    Volver
                </button>
            </div>
            <div className="flex flex-col mx-auto w-full justify-center items-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    {mensajeAccion && (
                        <div className="mt-4 text-green-600 font-semibold">
                            {mensajeAccion}
                        </div>
                    )}
                    <input
                        className="w-full border-2 py-2 rounded-lg font-semibold border-black pl-2"
                        type="text"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <div className="relative">
                        <input
                            className="w-full border-2 py-2 rounded-lg font-semibold border-black pl-2"
                            type={verContrasena ? "text" : "password"}
                            placeholder="Contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-2"
                            onClick={() => setVerContrasena(!verContrasena)}
                        >
                            {verContrasena ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            className="w-full border-2 py-2 rounded-lg font-semibold border-black pl-2"
                            type={verContrasenaConfirmada ? "text" : "password"}
                            placeholder="Confirmar Contraseña"
                            value={contrasenaConfirmada}
                            onChange={(e) => setContrasenaConfirmada(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-2"
                            onClick={() => setVerContrasenaConfirmada(!verContrasenaConfirmada)}
                        >
                            {verContrasenaConfirmada ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </button>
                    </div>
                    <select
                        className="w-full border-2 py-2 rounded-lg font-semibold border-black pl-2"
                        value={rol}
                        onChange={(e) => setRol(e.target.value)}
                    >
                        <option value="" disabled>
                            Selecciona un rol
                        </option>
                        <option value="profesor">profesor</option>
                        <option value="admin">admin</option>
                    </select>

                    <button
                        className="bg-green-600 hover:bg-green-800 text-white py-2 px-8 rounded-lg font-bold transition duration-200"
                        type="submit"
                    >
                        {usuarioEditando ? "Actualizar Usuario" : "Crear Usuario"}
                    </button>
                </form>

                <div className="text-left w-full">
                    {usuarios.length > 0 ? (
                        <table className="mt-4 border-collapse w-full text-left">
                            <thead>
                                <tr>
                                    <th className="border-b-2 py-1 text-left">Usuario</th>
                                    <th className="border-b-2 py-1 text-left">Rol</th>
                                    <th className="border-b-2 py-1 text-left">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((user) => (
                                    <tr key={user.id}>
                                        <td className="border-b py-1 text-left">{user.usuario}</td>
                                        <td className="border-b py-1 text-left">{user.rol}</td>
                                        <td className="border-b py-1 ml-12 text-left">
                                            <button
                                                onClick={() => editarUsuario(user)}
                                                className="text-blue-500 mr-4"
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>
                                            <button
                                                onClick={() => confirmarEliminacion(user.id)}
                                                className="text-red-500"
                                            >
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No hay usuarios registrados.</p>
                    )}
                </div>

                {usuarioAEliminar && (
                    <div className="mt-4">
                        <p>{mensajeConfirmacion}</p>
                        <button
                            onClick={() => eliminarUsuario(usuarioAEliminar)}
                            className="bg-red-600 hover:bg-red-800 text-white py-2 px-6 rounded-lg mr-4"
                        >
                            Confirmar Eliminación
                        </button>
                        <button
                            onClick={cancelarEliminacion}
                            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded-lg"
                        >
                            Cancelar
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
};
