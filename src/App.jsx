import "./App.css";
import { useRef, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Banner } from "./components/Banner";
import { Deportes } from "./components/Deportes";
import { Maps } from "./components/Maps";
import imgData from "./utiltis/img.json";
import { AlbumDesktop } from "./components/AlbumDesktop";
import { AlbumMobile } from "./components/AlbumMobile";

function App() {
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

  const [mainImageSrc, setMainImageSrc] = useState("./juanmartini.png");
  const handleMouseEnter = (src) => {
    setMainImageSrc(src);
  };

  const [mainImage, setMainImage] = useState("./juanmartini.png");
  const images = imgData.images.map((image) => image.src);
  const imgMobile = imgData.images;

  return (
    <div className="min-h-screen color-white flex justify-center items-start bg-black font-black not-italic">
      <main className="wrapper">
        {/* HERO */}
        <div className="hero w-full h-full flex justify-center align-center min-h-screen"></div>
        {/* NAV */}
        <Nav />
        {/* BANNER */}
        <Banner></Banner>
        {/* ALBUNES */}
        <div className="relative">
          {/* ALBUM DESKTOP */}
          <AlbumDesktop
            images={images}
            handleMouseEnter={handleMouseEnter}
            mainImageSrc={mainImageSrc}
          />
          {/* ALBUM MOBILE */}
          <AlbumMobile
            imgMobile={imgMobile}
            mainImage={mainImage}
            setMainImage={setMainImage}
            carouselRef={carouselRef}
            prevRef={prevRef}
            nextRef={nextRef}
          />
        </div>
        {/* DEPORTES */}
        <Deportes></Deportes>
        {/* MAPS */}
        <Maps></Maps>
        {/* FOOTER */}
        <hr className="relative w-2/3 mx-auto top-0 h-[2px] min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9" />
        <Footer />
        {/* GO TO HERO */}
        <a
          href="#"
          className="top sticky self-end ml-2 mt-[calc(100vh+50px)] no-underline px-2 text-white text-2xl font-black bg-[#00cb2f] rounded-[30%] bottom-7 left-0"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </main>
    </div>
  );
}

export default App;
