import './App.css'
import { useRef, useEffect } from 'react';
import { imgMobile, videos } from './utiltis/img.json'
import { Title } from './components/Title';
import { Footer } from './components/Footer';
function App() {
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const next = nextRef.current;
    const prev = prevRef.current;

    const handleNextClick = () => {
      carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    };

    const handlePrevClick = () => {
      carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    };

    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    // Clean up event listeners on component unmount
    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);
  return (
    <>
      <div className="min-h-screen color-white flex justify-center items-start bg-black font-black not-italic">
        <main className="wrapper">

          {/* <!-- HERO --> */}
          <div className="hero w-full h-full absolute flex justify-center align-center min-h-screen">
          </div>

          {/* <!-- NAV --> */}
          <nav className="text-white mt-5 absolute w-full uppercase text-center">
            <ul className="flex justify-center items-center gap-10">
              <li><a className="hidden relative px-2 py-1 text-white text-lg no-underline sm:inline-block"
                href="#Comprar">Comprar</a></li>
              <li><a className="hidden relative px-2 py-1 text-white text-lg no-underline sm:inline-block"
                href="https://grupodevoto.com.ar/lgpr/juego/index.html" target="_blank">Juego</a></li>
              <li><a href="#Home"><img className="h-24 w-24" src="./ssdescudo.png" alt="" /></a></li>
              <li><a className="hidden relative px-2 py-1 text-white text-lg no-underline sm:inline-block"
                href="#Deportes">Deportes</a>
              </li>
              <li><a className="hidden relative px-2 py-1 text-white text-lg no-underline sm:inline-block" href="">Novedades</a>
              </li>
            </ul>
          </nav>

          <div className="relative">

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
            <Title />
            <div className="hidden sm:flex max-w-screen-xl mx-auto">
              <div className="flex mt-20">
                <div className="flex flex-col gap-1">
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-20">
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                </div>
              </div>

              <img src="./agustin-51-big.webp" className="relative w-5/12 h-4/6 image-mask" alt="" />

              <div className="flex justify-center mt-20">
                <div className="flex flex-col mt-20 gap-1">
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute bottom-0 w-11/12 h-4/6 background-gradient"></div>
                    <img className="z-50 w-4/6 h-6/6 object-cover image-mask" src="./thominpc.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ALBUM MOBILE --> */}
            <img src="./agustin-51-big.webp" className="block w-8/12 h-3/6 image-mask mx-auto sm:hidden" alt="" />
            <div className="relative flex flex-col items-center w-full mx-auto sm:w-3/4 sm:hidden">
              <div ref={carouselRef} id="carousel" className="flex overflow-x-scroll">
                {imgMobile.map((image) => (
                  <div key={image.id} className="flex-shrink-0 w-1/3">
                    <img src={image.src} alt={`Image ${image.id}`} className="w-3/4 h-auto mx-auto object-cover image-mask" />
                  </div>
                ))}
              </div>
              <div className="flex justify-center w-full mt-4">
                <button ref={prevRef} id="prev" className="px-2 text-white">Anterior</button>
                <span className="text-white">&mdash;</span>
                <button ref={nextRef} id="next" className="px-2 text-white">Siguiente</button>
              </div>
            </div>
          </div>

          {/* <!-- DEPORTES --> */}
          <Title />
          <div className="mx-3 justify-center items-center gap-10 sm:flex sm:mx-32 sm:gap-20 text-white">
            {videos.map((video) => (
              <div key={video.id} className="text-center">
                <video className="mt-3" src={video.src} autoPlay loop></video>
                <h2 className="text-4xl mt-3">{video.titel}</h2>
                <span className="text-sm sm:text-xl font-light">{video.text}</span>
              </div>
            ))}
          </div>

          {/* <!-- MAPS --> */}
          <Title />
          <div className="flex justify-center align-center">
            <img className="w-full p-3 sm:w-4/6" src="./mapa.jpg" alt="" />
          </div>

          {/* <!-- SPONSORS --> */}
          <div className="mb-32 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Title />
              <div
                className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-y-0">
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
          </div>

          {/* <!-- FOOTER --> */}
          <hr
            className="w-2/3 mx-auto top-0 h-[2px] min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9" />
          <Footer/>

          {/* <!-- GO TO HERO --> */}
          <a href="#"
            className="top sticky self-end ml-2 mt-[calc(100vh+50px)] no-underline px-3 py-1 text-white text-2xl font-black bg-[#00cb2f] rounded-[30%] bottom-7 left-0">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </main>
      </div>
    </>
  )
}

export default App
