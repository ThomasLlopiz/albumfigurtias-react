import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="">
      <footer className="bg-green-800 top-0 left-0 right-0 text-white pt-24 pb-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center ">
              <p className="text-lg mt-1 text-center md:text-left">SOCIEDAD SPORTIVA DEVOTO</p>
              <a href="https://drive.google.com/file/d/1DvCUonGu-QEZvXqvNdLM4pdNODlU3zM2/view"
                aria-label="Ver reglamento"
                className="text-lg hover:underline transition-transform duration-300 text-center md:text-left">NUESTRO
                REGLAMENTO</a>
              <Link className="text-lg hover:underline transition-transform duration-300 text-center md:text-left" to="tourvirtual">PREDIO SSD</Link>
            </div>

            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
              <a href="./"><img src="imagenes/general/ssdescudocolor.png" alt="Logo" aria-label="Inicio"
                className="w-32 hover:scale-110 transition-transform duration-300" /></a>
            </div>

            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="flex space-x-6 my-8">
                <a aria-label="Facebook" href="https://www.facebook.com/FansSociedadSportivaDevoto" target="_blank"
                  className="text-center border border-white text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300">
                  <i className="fab fa-facebook-square text-white text-3xl"></i>
                </a>
                <a aria-label="Instagram" href="https://www.instagram.com/ssdevoto/" target="_blank"
                  className="text-center border border-white text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300">
                  <i className="fab fa-instagram text-white text-3xl"></i>
                </a>
                <a aria-label="Youtube" href="https://www.youtube.com/@SociedadSportivaDevoto" target="_blank"
                  className="text-center border border-white text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300">
                  <i className="fab fa-youtube text-white text-3xl"></i>
                </a>
                <a aria-label="Whatsapp" href="https://wa.me/3564501086" target="_blank"
                  className="text-center border border-white text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300">
                  <i className="fa-solid fa-phone text-white text-3xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <p className="text-md">&copy; 2024 SOCIEDAD SPORTIVA DEVOTO. TODOS LOS DERECHOS RESERVADOS.</p>
            <p className="text-md mt-1">VISITA EL <a href="https://grupodevoto.com.ar" className="hover:underline">GRUPO
              COOPERATIVO DEVOTO</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};
