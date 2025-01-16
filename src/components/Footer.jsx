import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src="./imagenes/club/footer.jpg"
        alt="Banner"
        className="w-full h-auto z-10"
      />
      <footer className="z-50 pt-32 absolute">
        <div className="flex flex-col md:flex-row md:gap-96 justify-between items-center">
          <div className="w-full md:mb-0 flex flex-col items-center">
            <p className="text-lg mt-1 text-center md:text-left">
              SOCIEDAD SPORTIVA DEVOTO
            </p>
            <a
              href="https://drive.google.com/file/d/1DvCUonGu-QEZvXqvNdLM4pdNODlU3zM2/view"
              className="text-lg hover:text-green-500 transition-transform duration-300 text-center md:text-left"
            >
              NUESTRO REGLAMENTO
            </a>
            <Link
              to={{ pathname: "/tienda" }}
              className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
            >
              TIENDA VERDE
            </Link>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:mb-0">
            <a href="#">
              <img
                src="./imagenes/club/ssdescudo.png"
                alt="Logo"
                className="w-32 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="flex space-x-6 my-8">
              <a
                href="https://www.facebook.com/FansSociedadSportivaDevoto"
                target="_blank"
                className="text-center border border-green-500 hover:text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300"
              >
                <i className="fab fa-facebook-square text-white text-3xl hover:text-green-500"></i>
              </a>
              <a
                href="https://www.instagram.com/ssdevoto/"
                target="_blank"
                className="text-center border border-green-500 hover:text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300"
              >
                <i className="fab fa-instagram text-white text-3xl hover:text-green-500"></i>
              </a>
              <a
                href="https://www.youtube.com/@SociedadSportivaDevoto"
                target="_blank"
                className="text-center border border-green-500 hover:text-white rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300"
              >
                <i className="fab fa-youtube text-white text-3xl hover:text-green-500"></i>
              </a>
            </div>
            <div className="text-sm text-white mb-2 flex flex-col items-center">
              <a
                href="https://wa.me/3564501086"
                className="text-lg hover:text-green-500"
              >
                ALBUM LLENO
              </a>
              <a
                href=".index.html#premios"
                className="text-lg hover:text-green-500"
              >
                PREMIOS
              </a>
              <a
                href="https://wa.me/3564501086"
                className="text-lg hover:text-green-500"
              >
                CONTACTO
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <p className="text-md">
            &copy; 2024 SOCIEDAD SPORTIVA DEVOTO. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="text-md mt-1">
            VISITA EL{" "}
            <a
              href="https://grupodevoto.com.ar"
              className="hover:text-green-500"
            >
              GRUPO COOPERATIVO DEVOTO
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
