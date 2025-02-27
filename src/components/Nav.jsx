import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEquipoDropdownOpen, setIsEquipoDropdownOpen] = useState(false);
    const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleEquipoDropdown = (e) => {
        e.preventDefault();
        setIsEquipoDropdownOpen(!isEquipoDropdownOpen);
        setIsClubDropdownOpen(false);
    };

    const toggleClubDropdown = (e) => {
        e.preventDefault();
        setIsClubDropdownOpen(!isClubDropdownOpen);
        setIsEquipoDropdownOpen(false);
    };

    const closeAllDropdowns = () => {
        setIsEquipoDropdownOpen(false);
        setIsClubDropdownOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-6 md:px-32 sm:64 text-white mx-auto z-50 sm:py-0 py-2"
            style={{ backgroundColor: 'rgba(0, 165, 79, 0.8)' }}>
            <div>
                {/* Mostrar el ícono solo cuando no hay scroll */}
                {!isScrolled && (
                    <Link to="/">
                        <img src="./imagenes/general/favicon.png" alt="Escudo Sociedad Sportiva Devoto"
                            className="h-24 absolute -bottom-16 sm:-bottom-9" />
                    </Link>
                )}

                {/* Mostrar el texto solo cuando hay scroll */}
                {isScrolled && (
                    <Link to="/">
                        <img src="./imagenes/general/ssdtexto.png" alt="Escudo Sociedad Sportiva Devoto"
                            className="h-12 md:h-16 absolute -bottom-0 sm:-bottom-" />
                    </Link>
                )}
            </div>
            <div id="logo" className="block md:hidden">
                <button id="hamburger" className="text-white focus:outline-none" aria-label="Abrir menú" onClick={toggleMenu}>
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>

            <div id="menu"
                className={`py-5 ${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:space-x-12 space-y-4 md:space-y-0 mt-6 md:mt-0 w-full md:w-auto text-center`}>
                <div className="relative">
                    <Link to="#" id="equipoDropdown" className="font-bold hover:underline flex items-center justify-center" onClick={toggleEquipoDropdown}>
                        DEPORTES
                        <i className={`fas fa-chevron-down ml-1 ${isEquipoDropdownOpen ? 'rotate-180' : ''}`}></i>
                    </Link>
                    <div id="equipoMenu"
                        className={`absolute ${isEquipoDropdownOpen ? 'block' : 'hidden'} mt-2 bg-white text-black rounded shadow-lg z-40 left-1/2 transform -translate-x-1/2`}>
                        <Link to="futbol" className="block px-4 py-2 hover:bg-gray-200">Fútbol</Link>
                        <Link to="basquet" className="block px-4 py-2 hover:bg-gray-200">Básquet</Link>
                        <Link to="voley" className="block px-4 py-2 hover:bg-gray-200">Vóley</Link>
                        <Link to="tenis" className="block px-4 py-2 hover:bg-gray-200">Tenis</Link>
                        <Link to="amateurs" className="block px-4 py-2 hover:bg-gray-200">Torneos Amateurs</Link>
                        <Link to="gimadultos" className="block px-4 py-2 hover:bg-gray-200">Gim Adultos</Link>
                    </div>
                </div>

                <div className="relative">
                    <Link to="#" id="clubDropdown" className="font-bold hover:underline flex items-center justify-center" onClick={toggleClubDropdown}>
                        INSTITUCIONAL
                        <i className={`fas fa-chevron-down ml-1 ${isClubDropdownOpen ? 'rotate-180' : ''}`}></i>
                    </Link>
                    <div id="clubMenu"
                        className={`absolute ${isClubDropdownOpen ? 'block' : 'hidden'} mt-2 bg-white text-black rounded shadow-lg z-40 left-1/2 transform -translate-x-1/2`}>
                        <Link to="historia" className="block px-4 py-2 hover:bg-gray-200">Historia</Link>
                        <Link to="comisiondirectiva" className="block px-4 py-2 hover:bg-gray-200">Comisión Directiva</Link>
                        <a target="_blank" href="./pdf/EstatutoSSD.pdf" className="block px-4 py-2 hover:bg-gray-200">Estatuto</a>
                        <a target="_blank" href="https://drive.google.com/file/d/1DvCUonGu-QEZvXqvNdLM4pdNODlU3zM2/view"
                            className="block px-4 py-2 hover:bg-gray-200">Reglamento</a>
                    </div>
                </div>

                <div>
                    <Link to="inscribirme" className="font-bold hover:underline" aria-label="Ir a la página de inscripción">INSCRIBIRME</Link>
                </div>

                <div>
                    <Link to="tourvirtual" className="font-bold hover:underline">EL CLUB</Link>
                </div>
            </div>
        </nav>
    );
};