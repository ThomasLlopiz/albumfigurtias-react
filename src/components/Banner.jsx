// Banner.jsx
import React from "react";

export const Banner = () => {
  return (
    <section className="mt-40 relative md:mt-80">
      <div className="flex gap-20 justify-center items-center">
        {/* <!-- Imagenes para desktop --> */}
        <div className="w-2/5 text-white hidden md:block">
          <img src="./album.png" alt="Album Cover" />
        </div>
        <div className="w-2/5 text-white hidden md:block">
          <img src="./heroimage.png" alt="Hero Image" />
        </div>
        {/* <!-- Imagen para mobile --> */}
        <div className="w-5/6 text-white block md:hidden">
          <img src="./albummobile.png" alt="Album Mobile" />
        </div>
      </div>
    </section>
  );
};
