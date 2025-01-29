export const Sesion = () => {
  e.preventDefault();
  const login = async (usuario, contrasena) => {
    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: usuario,
        contrasena: contrasena,
      }),
    });
    const data = await response.json();
    if (response.ok) {
        
    }
  };
  return <div></div>;
};
