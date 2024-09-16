// src/components/AlbumMobile.jsx
import React from "react";

export const AlbumMobile = ({
  imgMobile,
  mainImage,
  setMainImage,
  carouselRef,
  prevRef,
  nextRef,
}) => {
  return (
    <>
      <img
        src={mainImage}
        className="block w-8/12 h-3/6 image-mask-banner mx-auto sm:hidden"
        alt="Main"
      />
      <div className="relative flex flex-col items-center w-full mx-auto sm:w-3/4 sm:hidden">
        <div ref={carouselRef} id="carousel" className="flex overflow-x-scroll">
          {imgMobile.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-1/3"
              onMouseEnter={() => setMainImage(image.src)}
            >
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-3/4 h-auto mx-auto object-cover image-mask"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full mt-4">
          <button
            ref={prevRef}
            id="prev"
            className="sombra hover:scale-150 px-2 text-white w-24"
          >
            <i className="fa-solid fa-left-long"></i>
          </button>
          <button
            ref={nextRef}
            id="next"
            className="sombra hover:scale-150 px-2 text-white w-24"
          >
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>
    </>
  );
};
