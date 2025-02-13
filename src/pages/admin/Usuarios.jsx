import { useState, useEffect } from 'react';

export const Usuarios = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [rol, setRol] = useState('');
    const [usuarios, setUsuarios] = useState([]);

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

        const text = await response.text();
        console.log(text);

        try {
            const data = JSON.parse(text);
            if (response.ok) {
                alert('Usuario creado con éxito');
                fetchUsuarios();
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
        <div className="mt-40 mb-32 text-black flex flex-wrap md:gap-12 mx-auto justify-center items-center">
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-4/6 md:w-1/6'>
                <input
                    className='w-full border-2 py-2 rounded-lg font-semibold border-black pl-2'
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                    className='w-full border-2 py-2 rounded-lg font-semibold border-black pl-2'
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                <select
                    className="w-full border-2 py-2 rounded-lg font-semibold border-black pl-2"
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

            <div className="text-left">
                {usuarios.length > 0 ? (
                    <table className="mt-4 border-collapse w-full text-left">
                        <thead>
                            <tr>
                                <th className="border-b-2 py-2 text-left px-5">Nombre de Usuario</th>
                                <th className="border-b-2 py-2 text-left px-5">Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user, index) => (
                                <tr key={index}>
                                    <td className="border-b py-2 text-left px-5">{user.usuario}</td>
                                    <td className="border-b py-2 text-left px-5">{user.rol}</td>
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
