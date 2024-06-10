import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'react-feather';
import '../App.css';

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

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <nav ref={navRef} className="text-white mt-5 absolute w-full uppercase text-center">
            <div className="flex justify-center items-center">
                <button className="block sm:hidden" onClick={toggleMenu}>
                    {isOpen ? <X className="h-6 w-6 fill-current" /> : <img src="./ssdescudo.png" alt="Logo" className="w-20 h-20"/>}
                </button>
                <ul
                    className={`${isOpen ? 'block' : 'hidden'
                        } sm:flex justify-center items-center gap-10`}
                >
                    <li>
                        <a className="relative px-2 py-1 text-white text-lg no-underline" href="#Comprar">
                            Comprar
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative px-2 py-1 text-white text-lg no-underline"
                            href="https://grupodevoto.com.ar/lgpr/juego/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Juego
                        </a>
                    </li>
                    <li className="hidden sm:block">
                        <img src="./ssdescudo.png" alt="Logo" className="w-20 h-20 hover:scale-110 transition-transform duration-300"/>
                    </li>
                    <li>
                        <a className="relative px-2 py-1 text-white text-lg no-underline" href="#Deportes">
                            Deportes
                        </a>
                    </li>
                    <li>
                        <a className="relative px-2 py-1 text-white text-lg no-underline" href="">
                            Novedades
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
