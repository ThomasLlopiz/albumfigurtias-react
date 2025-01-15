export const Sponsors = () => {
  // Funciones para manejar los eventos de mouse
  const handleMouseOver = (e) => {
    e.target.style.filter = "none"; // Elimina el filtro al pasar el ratón
  };

  const handleMouseOut = (e) => {
    e.target.style.filter =
      "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)"; // Restablece el filtro al salir
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
          SPONSORS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <div className="flex justify-center">
            <img
              src="./imagenes/club/qors.png"
              alt="Sponsor QORS"
              className="h-24 object-contain transition-transform duration-300 transform"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)",
              }}
              onMouseOver={handleMouseOver} // Pasa la función
              onMouseOut={handleMouseOut} // Pasa la función
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./imagenes/club/dsa.png"
              alt="Sponsor DSA"
              className="h-24 object-contain transition-transform duration-300 transform"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)",
              }}
              onMouseOver={handleMouseOver} // Pasa la función
              onMouseOut={handleMouseOut} // Pasa la función
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./imagenes/club/solsport.png"
              alt="Sponsor SolSport"
              className="h-24 object-contain transition-transform duration-300 transform"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)",
              }}
              onMouseOver={handleMouseOver} // Pasa la función
              onMouseOut={handleMouseOut} // Pasa la función
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./imagenes/club/picco.png"
              alt="Sponsor Picco"
              className="h-24 object-contain transition-transform duration-300 transform"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)",
              }}
              onMouseOver={handleMouseOver} // Pasa la función
              onMouseOut={handleMouseOut} // Pasa la función
            />
          </div>
        </div>
      </section>
    </div>
  );
};
