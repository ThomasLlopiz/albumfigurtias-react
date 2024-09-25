import { useState } from "react";
import { novedades } from "../utiltis/img.json";

export const Novedades = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % novedades.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + novedades.length) % novedades.length
    );
  };

  return (
    <div className="w-full mt-40 mb-10 flex flex-col items-center justify-center">
      <div className="flex justify-between gap-32 relative w-full md:w-3/4 mx-auto">
        <img
          className="w-[300px] h-[200px] md:w-[800px] mx-auto md:h-[600px] z-20"
          src={novedades[currentIndex].src}
          alt={novedades[currentIndex].titel}
        />

        <div className="absolute inset-0 flex items-center justify-between z-30">
          <button
            onClick={prevSlide}
            className="bg-gray-700 text-white px-2 py-1 rounded"
          >
            <i className="fa-solid fa-left-long"></i>
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-700 text-white px-2 py-1 rounded"
          >
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>

      <div className="relative z-20 shadow-lg shadow-black w-11/12 md:w-1/2 text-white mx-auto mt-4">
        <h1 className="mx-auto text-6xl text-center">
          {novedades[currentIndex].titel}
        </h1>
        <p className="mx-auto font-normal text-xl text-center">
          {novedades[currentIndex].text}
        </p>
      </div>
    </div>
  );
};
