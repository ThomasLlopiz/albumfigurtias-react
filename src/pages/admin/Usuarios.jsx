import { useState, useEffect } from 'react';

export const Usuarios = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [rol, setRol] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    // Obtener los usuarios al cargar el componente
    const fetchUsuarios = async () => {
        const response = await fetch('http://localhost:8000/api/usuarios');
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

        const response = await fetch('http://localhost:8000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usuario,
                contrasena,
                rol,
            }),
        });

        const text = await response.text(); // Obtener la respuesta como texto
        console.log(text); // Ver la respuesta completa del servidor

        try {
            // Intentar parsear el texto como JSON
            const data = JSON.parse(text);
            if (response.ok) {
                alert('Usuario creado con éxito');
                fetchUsuarios(); // Volver a obtener la lista de usuarios
                setUsuario('');
                setContrasena('');
                setRol('');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error al parsear JSON:', error);
            alert('Error al crear el usuario');
        }
    };



    return (
        <div className="mt-32 mb-32 text-black flex flex-col items-center gap-4">
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    className='w-40 border-2 py-2 rounded-lg font-semibold border-black pl-2'
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                    className='w-40 border-2 py-2 rounded-lg font-semibold border-black pl-2'
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                <select
                    className="w-40 border-2 py-2 rounded-lg font-semibold border-black pl-2"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                >
                    <option value="" disabled>Selecciona un rol</option>
                    <option value="Profesor">Profesor</option>
                    <option value="Admin">Admin</option>
                </select>

                <button
                    className="bg-green-600 hover:bg-green-800 text-white py-2 px-8 rounded-lg font-bold transition duration-200"
                    type="submit">Crear Usuario</button>
            </form>

            <div className="mt-8">
                <h2 className="text-xl font-semibold">Usuarios creados</h2>
                {usuarios.length > 0 ? (
                    <table className="mt-4 border-collapse w-full">
                        <thead>
                            <tr>
                                <th className="border-b-2 py-2 text-left px-4">Nombre de Usuario</th>
                                <th className="border-b-2 py-2 text-left px-4">Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user, index) => (
                                <tr key={index}>
                                    <td className="border-b py-2 px-4">{user.usuario}</td>
                                    <td className="border-b py-2 px-4">{user.rol}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No hay usuarios registrados.</p>
                )}
            </div>
        </div>
    );
};
