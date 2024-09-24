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
    <div className="w-full mt-32 mb-32 flex flex-col items-center justify-center">
      <div className="flex justify-between gap-32 relative w-1/2 mx-auto">
        <img
          className="w-[800px] mx-auto h-[600px] z-20"
          src={novedades[currentIndex].src}
          alt={novedades[currentIndex].titel}
        />

        <div className="absolute inset-0 flex items-center justify-between z-30">
          <button
            onClick={prevSlide}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            -
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            -
          </button>
        </div>
      </div>

      <div className="relative z-20 shadow-lg shadow-black w-1/2 text-white mx-auto mt-4">
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
