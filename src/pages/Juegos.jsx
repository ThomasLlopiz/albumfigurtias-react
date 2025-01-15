export const Juegos = () => {
  return (
    <div className="mx-auto z-20">
      <section class="text-center mt-32">
        <div class="de text-white flex justify-center align-center">
          <h1 class="text-5xl relative sm:text-9xl">JUGA CON LA VERDE</h1>
        </div>
      </section>

      <section class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 mt-16 px-4">
        <div class="text-center w-full lg:w-1/3">
          <div class="de text-white flex justify-center align-center">
            <h1 class="text-3xl relative sm:text-7xl mt-12">FUTBOL</h1>
          </div>
          <a href="./juegofutbol/index.html">
            <img
              class="w-full lg:w-auto hover:scale-105 transition-transform duration-300"
              src="./imagenes/juegosImagenes/futbol.jpg"
              alt="Futbol"
            />
          </a>
        </div>

        <div class="text-center w-full lg:w-1/3">
          <div class="de text-white flex justify-center align-center">
            <h1 class="text-3xl relative sm:text-7xl mt-12">BASKET</h1>
          </div>
          <a href="./juegobasket/index.html">
            <img
              class="w-full lg:w-auto hover:scale-105 transition-transform duration-300"
              src="./imagenes/juegosImagenes/basquet.jpg"
              alt="Basket"
            />
          </a>
        </div>

        <div class="text-center w-full lg:w-1/3">
          <div class="de text-white flex justify-center align-center">
            <h1 class="text-3xl relative sm:text-7xl mt-12">TENIS</h1>
          </div>
          <a href="./juegotenis/index.html">
            <img
              class="w-full lg:w-auto hover:scale-105 transition-transform duration-300"
              src="./imagenes/juegosImagenes/tennis.jpg"
              alt="Tenis"
            />
          </a>
        </div>
      </section>
    </div>
  );
};
