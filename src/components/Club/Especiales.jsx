export const Especiales = () => {
    return (
        <section className="py-28 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-12">ESPECIALES</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center justify-between text-center h-full">
                    <a
                        target="_blank"
                        href="URL_DRAGONCITOS"
                        className="flex flex-col items-center justify-between h-full"
                        aria-label="Dragoncitos"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="./imagenes/club/dragoncitos.jpg"
                            alt="Sponsor QORS"
                            className="h-24 object-contain mb-2"
                        />
                        <p className="text-md uppercase text-gray-500">DRAGONCITOS VERDES</p>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-between text-center h-full">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/reel/DCzLOM-OZxx/"
                        aria-label="Regionalito"
                        className="flex flex-col items-center justify-between h-full"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="./imagenes/club/regionalito.jpg"
                            alt="Sponsor DSA"
                            className="h-24 object-contain mb-2"
                        />
                        <p className="text-md uppercase text-gray-500">REGIONALITO</p>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-between text-center h-full">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/reel/DBrvY87PyIH/"
                        aria-label="Bianca Cugno"
                        className="flex flex-col items-center justify-between h-full"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="./imagenes/club/bianca.jpg"
                            alt="Sponsor SolSport"
                            className="h-24 object-contain mb-2"
                        />
                        <p className="text-md uppercase text-gray-500">BIANCA CUGNO</p>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-between text-center h-full">
                    <a
                        target="_blank"
                        href="URL_BASKETVETERANOS"
                        className="flex flex-col items-center justify-between h-full"
                        aria-label="Basquet Veteranos"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="./imagenes/club/basketveteranos.jpg"
                            alt="Sponsor Picco"
                            className="h-24 object-contain mb-2"
                        />
                        <p className="text-md uppercase text-gray-500">BASQUET VETERANOS</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

