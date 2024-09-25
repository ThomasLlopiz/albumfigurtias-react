export const Games = () => {
  return (
    <div className="text-white w-1/2 mx-auto h-96 mt-32 z-30 mb-96 lg:mb-0 gap-0 lg:flex justify-center items-center">
      <div className="flex flex-col items-center">
        <button class="mb-16 w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
          BASQUET
        </button>
        <img
          className="w-4/4 drop-shadow-[0_2px_6px_rgba(255,255,255,255.25)]"
          src="./juegos/basquet.webp"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <button class="mb-12 w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
          FUTBOL
        </button>
        <img
          className="w-3/4 drop-shadow-[0_2px_6px_rgba(255,255,255,255.25)]"
          src="./juegos/futbol.webp"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <button class="mb-16 w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
          TENIS
        </button>
        <img
          className="w-5/12 md:w-3/4 drop-shadow-[0_2px_6px_rgba(255,255,255,255.25)]"
          src="./juegos/tennis.png"
          alt=""
        />
      </div>
    </div>
  );
};
