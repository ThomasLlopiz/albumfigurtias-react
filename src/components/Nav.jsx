import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  const [typedText, setTypedText] = useState("");
  const text = "SSOCIEDAD SPORTIVA DEVOTO";

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setTypedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <nav className="absolute z-50 top-0 left-0 right-0 w-full flex items-center justify-between px-6 py-4 text-white mx-auto max-w-7xl">
        <div className="flex space-x-12">
          <div className="relative group">
            <a href="#" className="font-bold hover:underline flex items-center">
              EL EQUIPO
              <i className="fas fa-chevron-down ml-1"></i>
            </a>
            <div className="absolute left-0 hidden mt-2 bg-white text-black rounded shadow-lg group-hover:block">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-200">
                Submenú 1
              </Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-200">
                Submenú 2
              </Link>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="font-bold hover:underline flex items-center">
              EL CLUB
              <i className="fas fa-chevron-down ml-1"></i>
            </a>
            <div className="absolute left-0 hidden mt-2 bg-white text-black rounded shadow-lg group-hover:block">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-200">
                Submenú 1
              </Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-200">
                Submenú 2
              </Link>
            </div>
          </div>
        </div>
        <Link to="/">
          <img
            src="./imagenes/club/ssdescudo.png"
            alt="Escudo Sociedad Sportiva Devoto"
            className="h-20"
          />
        </Link>

        <div className="flex space-x-12">
          <Link to="/inscripcion">INSCRIBIRME</Link>
          <Link to="/tienda">TIENDA</Link>
        </div>
      </nav>
      <header>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-99">
          <h1
            id="typewriter"
            className="text-4xl md:text-7xl font-bold relative"
          >
            <span>{typedText}</span>
            <span id="caret" className="animate-blink">
              |
            </span>
          </h1>
          <p className="text-lg md:text-2xl mt-4">
            Forma parte del Club más grande de la zona
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
            >
              ASOCIARME A SSD
            </a>
            <Link
              to={{ pathname: "/tienda" }}
              className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
            >
              TIENDA VERDE
            </Link>
          </div>
        </div>
        <img
          src="./imagenes/club/banner.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
        <div className="bg-white py-8">
          <div className="flex justify-center space-x-32">
            <a
              href="#"
              className="flex flex-col items-center text-green-800 hover:text-green-600"
            >
              <i className="fas fa-user-plus text-3xl"></i>
              <span className="mt-3 text-sm font-semibold">DATE DE ALTA</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center text-green-800 hover:text-green-600"
            >
              <i className="fas fa-id-card text-3xl"></i>
              <span className="mt-3 text-sm font-semibold">HACETE SOCIO</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center text-green-800 hover:text-green-600"
            >
              <i className="fas fa-credit-card text-3xl"></i>
              <span className="mt-3 text-sm font-semibold">PAGÁ TU CUOTA</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center text-green-800 hover:text-green-600"
            >
              <i className="fas fa-qrcode text-3xl"></i>
              <span className="mt-3 text-sm font-semibold">AUTOGESTIÓN</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center text-green-800 hover:text-green-600"
            >
              <i className="fas fa-route text-3xl"></i>
              <span className="mt-3 text-sm font-semibold">TOUR VIRTUAL</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
