export const Curriculum = () => {
  return (
    <section
      className="relative bg-cover bg-fixed max-w-7xl px-4 rounded-lg mx-auto"
      style={{
        backgroundImage: "url('./imagenes/club/bandera.jpg')",
        height: "300px",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black rounded-lg opacity-50 z-0"></div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-32 z-10">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">FORMA PARTE DEL CLUB</h2>
          <a className="text-xl border border-white rounded-lg p-2 mt-4 uppercase mx-auto">
            Subir mi Curriculum Vitae
          </a>
        </div>

        <div className="w-1/3">
          <img
            src="./imagenes/club/laverde.png"
            alt="La Verde SSD"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
