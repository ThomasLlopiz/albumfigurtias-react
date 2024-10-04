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
      <div className="flex justify-around items-center">
        <Link to="/" className="block sm:hidden">
          <img src="./ssdescudo.png" alt="Logo" className="w-10" />
        </Link>
        <button className="block sm:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <X className="h-6 w-6 fill-current" />
          ) : (
            <i className="fa-solid fa-bars text-3xl"></i>
          )}
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex justify-center items-center gap-10`}
        >
          <li>
            <Link
              className="relative px-2 py-1 text-white text-lg no-underline"
              to="/"
              onClick={closeMenu}
            >
              Comprar
            </Link>
          </li>
          <li>
            <Link
              className="relative px-2 py-1 text-white text-lg no-underline"
              to="/juegos"
              onClick={closeMenu}
            >
              Juegos
            </Link>
          </li>
          <li>
            <Link to="/" className="hidden md:block">
              <img src="./ssdescudo.png" alt="Logo" className="w-20" />
            </Link>
          </li>
          <li>
            <Link
              className="relative px-2 py-1 text-white text-lg no-underline"
              to="/#Deportes"
              onClick={closeMenu}
            >
              Deportes
            </Link>
          </li>
          <li>
            <Link
              className="relative px-2 py-1 text-white text-lg no-underline"
              to="/novedades"
              onClick={closeMenu}
            >
              Novedades
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
