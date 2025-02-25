import { Link } from 'react-router-dom';
export const LinksHeader = () => {
    return (
        <div className="bg-white py-28 w-full">
            <div className="flex overflow-x-auto justify-start sm:justify-center space-x-16 sm:space-x-32 px-4 md:px-12">
                <Link
                    to="/inscribirme"
                    className="flex flex-col items-center text-green-800 hover:text-green-600 relative z-20"
                    aria-label="Ir a la página de inscripción"
                >
                    <i className="fas fa-user-plus text-3xl"></i>
                    <span className="mt-3 text-sm font-semibold text-center">INSCRIBIRME</span>
                </Link>

                <a
                    href="./asociarme.php"
                    className="flex flex-col items-center text-green-800 hover:text-green-600 relative z-20"
                    aria-label="Asociarme"
                >
                    <i className="fas fa-id-card text-3xl"></i>
                    <span className="mt-3 text-sm font-semibold text-center">ASOCIARME</span>
                </a>

                <a
                    href="./album/juegos"
                    className="flex flex-col items-center text-green-800 hover:text-green-600 relative z-20"
                    aria-label="Ir a la página de pago"
                >
                    <i className="fa-solid fa-gamepad text-3xl"></i>
                    <span className="mt-3 text-sm font-semibold text-center">JUGA VERDE</span>
                </a>

                <a
                    href="./album"
                    className="flex flex-col items-center text-green-800 hover:text-green-600 relative z-20"
                    aria-label="Ir a la página de reservas"
                >
                    <i className="fa-solid fa-images text-3xl"></i>
                    <span className="mt-3 text-sm font-semibold text-center">ALBUM SSD</span>
                </a>

                <Link
                    to="/tourvirtual"
                    className="flex flex-col items-center text-green-800 hover:text-green-600 relative z-20"
                    aria-label="Ir a la página de tour virtual"
                >
                    <i className="fas fa-route text-3xl"></i>
                    <span className="mt-3 text-sm font-semibold text-center">TOUR VIRTUAL</span>
                </Link>
            </div>
        </div>
    );
};

