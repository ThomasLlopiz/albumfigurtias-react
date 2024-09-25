import React from "react";

export const AlbumDesktop = ({ images, handleMouseEnter, mainImageSrc }) => {
  return (
    <div className="hidden sm:flex max-w-screen-xl mx-auto">
      <div className="flex mt-20">
        <div className="flex flex-col gap-1">
          {images.slice(7, 11).map((src, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => handleMouseEnter(src)}
            >
              <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient-gray"></div>
              <img
                className="z-50 w-3/6 h-6/6 object-cover image-mask hover:scale-105 transition-transform duration-300"
                src={src}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 mt-20">
          {images.slice(11, 14).map((src, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => handleMouseEnter(src)}
            >
              <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient-gray"></div>
              <img
                className="z-50 w-3/6 h-6/6 object-cover image-mask hover:scale-105 transition-transform duration-300"
                src={src}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <img
        src={mainImageSrc}
        className="relative w-3/12 h-3/6 mt-40 mx-12 image-mask-banner"
        alt=""
      />

      <div className="flex justify-center mt-20">
        <div className="flex flex-col mt-20 gap-1">
          {images.slice(0, 3).map((src, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => handleMouseEnter(src)}
            >
              <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient-gray"></div>
              <img
                className="z-50 w-3/6 h-6/6 object-cover image-mask hover:scale-105 transition-transform duration-300"
                src={src}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {images.slice(3, 7).map((src, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => handleMouseEnter(src)}
            >
              <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient-gray"></div>
              <img
                className="z-50 w-3/6 h-6/6 object-cover image-mask hover:scale-105 transition-transform duration-300"
                src={src}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
