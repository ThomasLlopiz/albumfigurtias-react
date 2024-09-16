import "./App.css";
import { useRef, useEffect } from "react";
import { imgMobile, videos } from "./utiltis/img.json";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { useState } from "react";
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

    // Clean up event listeners on component unmount
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

  const imgMobile = [
    { id: 1, src: "./jugadores/1.png" },
    { id: 2, src: "./jugadores/2.png" },
    { id: 3, src: "./jugadores/3.png" },
    { id: 4, src: "./jugadores/4.png" },
    { id: 5, src: "./jugadores/5.png" },
    { id: 6, src: "./jugadores/6.png" },
    { id: 7, src: "./jugadores/7.png" },
    { id: 8, src: "./jugadores/8.png" },
    { id: 9, src: "./jugadores/9.png" },
    { id: 10, src: "./jugadores/10.png" },
    { id: 11, src: "./jugadores/211png" },
    { id: 12, src: "./jugadores/2.12ng" },
    { id: 13, src: "./jugadores/2.p13g" },
    { id: 14, src: "./jugadores/2.p14g" },
  ];
  const images = [
    "./jugadores/1.png",
    "./jugadores/2.png",
    "./jugadores/3.png",
    "./jugadores/4.png",
    "./jugadores/5.png",
    "./jugadores/6.png",
    "./jugadores/7.png",
    "./jugadores/8.png",
    "./jugadores/9.png",
    "./jugadores/10.png",
    "./jugadores/11.png",
    "./jugadores/12.png",
    "./jugadores/13.png",
    "./jugadores/14.png",
  ];
  return (
    <>
      <div className="min-h-screen color-white flex justify-center items-start bg-black font-black not-italic">
        <main className="wrapper">
          {/* <!-- HERO --> */}
          <div className="hero w-full h-full flex justify-center align-center min-h-screen"></div>

          {/* <!-- NAV --> */}
          <Nav />

          <div className="relative ">
            {/* <!-- BANNER --> */}
            <section className="mt-40 relative md:mt-80">
              <div className="flex gap-20 justify-center items-center">
                {/* <!-- Imagenes para desktop --> */}
                <div className="w-2/5 text-white hidden md:block">
                  <img src="./album.png" alt="" />
                </div>
                <div className="w-2/5 text-white hidden md:block">
                  <img src="./heroimage.png" alt="" />
                </div>
                {/* <!-- Imagen para mobile --> */}
                <div className="w-5/6 text-white block md:hidden">
                  <img src="./albummobile.png" alt="" />
                </div>
              </div>
            </section>

            {/* <!-- ALBUM DESKTOP--> */}
            <div className="title text-white mt-24 flex justify-center align-center sm:mt-56">
              <h1 className="max-w-screen-md text-center text-5xl relative hover:text-white sm:text-9xl">
                FIGURITAS
              </h1>
            </div>
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
                        className="z-50 w-4/6 h-6/6 object-cover image-mask hover:scale-105 transition-transform duration-300"
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
                        className="z-50 w-4/6 h-6/6 object-cover image-mask hover:scale-105 transition-transform duration-300"
                        src={src}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>

              <img
                src={mainImageSrc}
                className="relative w-5/12 h-4/6 image-mask-banner"
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
                        className="z-50 w-4/6 h-6/6 object-cover image-mask hover:scale-105 transition-transform duration-300"
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
                        className="z-50 w-4/6 h-6/6 object-cover image-mask hover:scale-105 transition-transform duration-300"
                        src={src}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* <!-- ALBUM MOBILE --> */}
            <img
              src="./juanmartini.png"
              className="block w-8/12 h-3/6 image-mask-banner mx-auto sm:hidden"
              alt=""
            />
            <div className="relative flex flex-col items-center w-full mx-auto sm:w-3/4 sm:hidden">
              <div
                ref={carouselRef}
                id="carousel"
                className="flex overflow-x-scroll"
              >
                {imgMobile.map((image) => (
                  <div key={image.id} className="flex-shrink-0 w-1/3">
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
                {/* <span className="text-white">&mdash;</span> */}
                <button
                  ref={nextRef}
                  id="next"
                  className="sombra hover:scale-150 px-2 text-white w-24"
                >
                  <i className="fa-solid fa-right-long"></i>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- DEPORTES --> */}
          <div
            id="Deportes"
            className="title text-white mt-24 flex justify-center align-center sm:mt-56"
          >
            <h1 className="max-w-screen-md text-center text-5xl relative hover:text-white sm:text-9xl">
              DEPORTES
            </h1>
          </div>
          <div className="relative mx-auto justify-center items-center gap-10 text-white w-4/6 lg:flex sm:gap-20">
            {videos.map((video) => (
              <div key={video.id} className="text-center">
                <video
                  className="mt-3 w-full "
                  src={video.src}
                  autoPlay
                  loop
                ></video>
                <h3 className="text-2xl mt-3 uppercase font-bold">
                  {video.titel}
                </h3>
                <span className="text-sm sm:text-xl font-light">
                  {video.text}
                </span>
              </div>
            ))}
          </div>

          {/* <!-- MAPS --> */}
          <div
            id="Comprar"
            className="title text-white mt-24 flex justify-center align-center sm:mt-56"
          >
            <h1 className="max-w-screen-md text-center text-5xl relative hover:text-white sm:text-9xl">
              PUNTOS DE VENTA
            </h1>
          </div>
          <div className="relative flex justify-center align-center h-1/2 my-xauto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2762536606992!2d-62.30430952365361!3d-31.40651399577541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb336df6ea9def%3A0x6337fbfb719397a8!2sProveedur%C3%ADa%20SuperSol!5e0!3m2!1ses!2sar!4v1726489955642!5m2!1ses!2sar"
              className="w-full h-96 lg:w-4/6"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* <!-- SPONSORS --> */}
          {/* <div className="title text-white mt-24 flex justify-center align-center sm:mt-56">
            <h1 className="max-w-screen-md text-center text-5xl relative hover:text-white sm:text-9xl">SPONSORS</h1>
          </div>
          <div className="relative mb-32">
            <div className="mx-auto max-w-7xl">
              <div
                className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-y-0">
                <a target="_blank" href="https://qors.com.ar" className="p-4 col-span-1 max-h-24 w-full">
                  <img src="./qors.png" alt="Transistor"
                    className="background-gradient-gray p-4 max-h-24 w-full object-contain hover:scale-110 transition-transform duration-300"
                    width="158" height="48" />
                </a>
                <a target="_blank" href="https://www.instagram.com/dsaservicios/?hl=es"
                  className="p-4 col-span-1 max-h-24 w-full">
                  <img src="./dsa.png" alt="Reform"
                    className="background-gradient-gray p-4 max-h-24 w-full object-contain hover:scale-110 transition-transform duration-300"
                    width="158" height="48" />
                </a>
                <a target="_blank" href="https://www.fordpicco.com.ar/" className="p-4 col-span-1 max-h-24 w-full">
                  <img src="./picco.png" alt="Tuple"
                    className="background-gradient-gray p-4 max-h-24 w-full object-contain hover:scale-110 transition-transform duration-300"
                    width="158" height="48" />
                </a>
                <a target="_blank" href="https://www.instagram.com/100deportivo/?hl=es"
                  className="p-4 col-span-1 max-h-24 w-full lg:col-start-auto">
                  <img src="./deportivo.png" alt="SavvyCal"
                    className="background-gradient-gray p-4 max-h-24 w-full object-contain hover:scale-110 transition-transform duration-300"
                    width="158" height="48" />
                </a>
              </div>
            </div>
          </div> */}

          {/* <!-- FOOTER --> */}
          <hr className="relative w-2/3 mx-auto top-0 h-[2px] min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9" />
          <Footer />

          {/* <!-- GO TO HERO --> */}
          <a
            href="#"
            className="top sticky self-end ml-2 mt-[calc(100vh+50px)] no-underline px-2 text-white text-2xl font-black bg-[#00cb2f] rounded-[30%] bottom-7 left-0"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </main>
      </div>
    </>
  );
}

export default App;
