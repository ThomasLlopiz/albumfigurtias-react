export const Inscripcion = () => {
  return (
    <div className="mt-32 flex flex-col items-center bg-black">
      <h1>Inscripcion</h1>
      <form>
        <div className="flex items-center justify-between gap-3 text-center">
          <label htmlFor="nombre">Nombre</label>
          <input
            className="w-32"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-center">
          <label htmlFor="apellido">Apellido</label>
          <input
            className="w-32"
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Apellido"
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-center">
          <label htmlFor="email">Email</label>
          <input
            className="w-32"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-center">
          <label htmlFor="telefono">Telefono</label>
          <input
            className="w-32"
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Telefono"
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-center">
          <label htmlFor="edad">Edad</label>
          <input
            className="w-32"
            type="number"
            id="edad"
            name="edad"
            placeholder="Edad"
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-center">
          <label htmlFor="genero">Genero</label>
          <input
            className="w-32"
            type="text"
            id="genero"
            name="genero"
            placeholder="Genero"
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-center">
          <label htmlFor="direccion">Direccion</label>
          <input
            className="w-32"
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Direccion"
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-center">
          <label htmlFor="deporte">Deporte</label>
          <input
            className="w-32"
            type="text"
            id="deporte"
            name="deporte"
            placeholder="Deporte"
          />
        </div>
      </form>
      <button type="submit">Enviar</button>
    </div>
  );
};
