import React from 'react'

export const HeaderClub = () => {
    return (
        <header className="relative z-20">
            <div
                className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-30 sm:mt-0 mt-12">
                <h1 id="typewriter" className="text-4xl md:text-7xl font-bold relative">
                    <span id="typed-text"></span>
                    <span id="caret" className="animate-blink"></span>
                </h1>
                <p className="text-lg md:text-2xl mt-4">Forma parte del Club más grande de la zona</p>

                <div className="flex space-x-4 mt-6">
                    <a href="./inscribirme.php"
                        className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-800 transition"
                        aria-label="Ir a la página de inscripción">
                        INSCRIBIRME
                    </a>
                    <a href="#tienda"
                        className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-800 transition"
                        aria-label="Tienda verde">
                        TIENDA VERDE
                    </a>
                </div>
            </div>

            <img src="./imagenes/club/bandera.jpg" alt="Banner" className="sm:block hidden w-full h-full object-cover" />
            <img src="./imagenes/club/banderamobile.jpg" alt="Banner" className="block sm:hidden w-full h-full object-cover" />
        </header>
    )
}

