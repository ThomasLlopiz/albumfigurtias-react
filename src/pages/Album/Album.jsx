import "../../Album.css";
import { useRef, useEffect, useState } from "react";
import { Banner } from "../../components/Album/Banner";
import { Deportes } from "../../components/Album/Deportes";
import { Maps } from "../../components/Album/Maps";
import { AlbumDesktop } from "../../components/Album/AlbumDesktop";
import { AlbumMobile } from "../../components/Album/AlbumMobile";
import imgData from "../../utiltis/img.json";

export const Album = () => {
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const [mainImage, setMainImage] = useState("./imagenes/jugadores/5.png");
  const images = imgData.images.map((image) => image.src);
  const imgMobile = imgData.images;

  useEffect(() => {
    const carousel = carouselRef.current;
    const next = nextRef.current;
    const prev = prevRef.current;

    const handleNextClick = () => {
      carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
    };

    const handlePrevClick = () => {
      carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
    };

    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className="olor-white flex justify-center items-start bg-black font-black not-italic">
      <main className="wrapper">
        <Banner />
        <div className="relative">
          <AlbumDesktop
            images={images}
            handleMouseEnter={setMainImage}
            mainImageSrc={mainImage}
          />
          <AlbumMobile
            imgMobile={imgMobile}
            mainImage={mainImage}
            setMainImage={setMainImage}
            carouselRef={carouselRef}
            prevRef={prevRef}
            nextRef={nextRef}
          />
        </div>
        <Deportes />
        <Maps />
      </main>
    </div>
  );
};
