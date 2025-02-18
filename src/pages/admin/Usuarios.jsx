import { useState, useEffect } from "react";
import { faEye, faEyeSlash, faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Usuarios = () => {
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
    const [mensajeAccion, setMensajeAccion] = useState(""); // Estado para el mensaje de acción

    const fetchUsuarios = async () => {
        const response = await fetch("http://localhost:8000/api/usuarios");
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

        const response = await fetch("http://localhost:8000/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                usuario,
                contrasena,
                rol,
            }),
        });
        const text = await response.text();
        try {
            const data = JSON.parse(text);
            if (response.ok) {
                setMensajeAccion("Usuario creado con éxito");
                fetchUsuarios();
                setUsuario("");
                setContrasena("");
                setContrasenaConfirmada("");
                setRol("");
                setTimeout(() => setMensajeAccion(""), 5000);
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Error al parsear JSON:", error);
            alert("Error al crear el usuario");
        }
    };

    const eliminarUsuario = async (id) => {
        const response = await fetch(`http://localhost:8000/api/usuarios/${id}`, {
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
        <div className="mt-40 mb-32 text-black flex flex-col items-center justify-center gap-3">
            <div className="flex md:gap-12 mx-auto justify-center items-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-4/6 md:w-4/6">
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

                <div className="text-left">
                    {usuarios.length > 0 ? (
                        <table className="mt-4 border-collapse w-72 text-left">
                            <thead>
                                <tr>
                                    <th className="border-b-2 py-2 text-left px-5">Usuario</th>
                                    <th className="border-b-2 py-2 text-left px-5">Rol</th>
                                    <th className="border-b-2 py-2 text-left px-5">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((user) => (
                                    <tr key={user.id}>
                                        <td className="border-b py-2 text-left px-5">{user.usuario}</td>
                                        <td className="border-b py-2 text-left px-5">{user.rol}</td>
                                        <td className="border-b py-2 text-left px-5">
                                            <button
                                                onClick={() => editarUsuario(user)}
                                                className="text-blue-500 mr-3"
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

            <button
                onClick={() => navigate("/admin")}
                className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
            >
                Volver
            </button>
        </div>
    );
};
