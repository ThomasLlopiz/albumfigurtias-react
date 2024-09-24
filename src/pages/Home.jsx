import "../App.css";
import { useRef, useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { Deportes } from "../components/Deportes";
import { Maps } from "../components/Maps";
import imgData from "../utiltis/img.json";
import { AlbumDesktop } from "../components/AlbumDesktop";
import { AlbumMobile } from "../components/AlbumMobile";

export const Home = () => {
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

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

  const handleMouseEnter = (src) => {
    setMainImage(src);
  };

  const [mainImage, setMainImage] = useState("./jugadores/5.png");
  const images = imgData.images.map((image) => image.src);
  const imgMobile = imgData.images;

  return (
    <div className="min-h-screen color-white flex justify-center items-start bg-black font-black not-italic">
      <main className="wrapper">
        <Banner />
        <div className="relative">
          <AlbumDesktop
            images={images}
            handleMouseEnter={handleMouseEnter}
            mainImageSrc={mainImage}
          />
          <AlbumMobile
            imgMobile={imgMobile}
            mainImage={mainImage}
            setMainImage={mainImage}
            carouselRef={carouselRef}
            prevRef={prevRef}
            nextRef={nextRef}
          />
        </div>
        <Deportes />
        <Maps />
        <a
          href="#"
          className="top sticky self-end ml-2 mt-[calc(100vh+50px)] no-underline px-2 text-white text-2xl font-black bg-[#00cb2f] rounded-[30%] bottom-7 left-0"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </main>
    </div>
  );
};