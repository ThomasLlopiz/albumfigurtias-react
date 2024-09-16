import { useState, useEffect, useRef } from "react";
import { X } from "react-feather";
import { Link } from "react-router-dom";
import "../App.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="text-white mt-5 absolute w-full uppercase text-center z-50"
    >
      <div className="flex justify-center items-center">
        <button className="block sm:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <X className="h-6 w-6 fill-current" />
          ) : (
            <img src="./ssdescudo.png" alt="Logo" className="w-20 h-20" />
          )}
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex justify-center items-center gap-10`}
        >
          <li>
            <a
              className="relative px-2 py-1 text-white text-lg no-underline"
              href="#Comprar"
            >
              Comprar
            </a>
          </li>
          <li>
            <Link
              className="relative px-2 py-1 text-white text-lg no-underline"
              to="/juegos" // Usa Link para rutas internas
            >
              Juegos
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link to="/">
              <img
                src="./ssdescudo.png"
                alt="Logo"
                className="w-20 h-20 hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </li>
          <li>
            <a
              className="relative px-2 py-1 text-white text-lg no-underline"
              href="#Deportes"
            >
              Deportes
            </a>
          </li>
          <li>
            <a
              className="relative px-2 py-1 text-white text-lg no-underline"
              href=""
            >
              Novedades
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
