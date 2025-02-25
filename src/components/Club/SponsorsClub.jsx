
export const SponsorsClub = () => {
    return (
        <section className="py-28 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-8">NOS ACOMPAÑAN</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center">
                {/* Sponsor QORS */}
                <div className="flex justify-center">
                    <img
                        src="./imagenes/club/qors.png"
                        alt="Sponsor QORS"
                        className="h-24 object-contain transition-transform duration-300 transform"
                        style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)' }}
                        onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                        onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)'}
                    />
                </div>

                {/* Sponsor DSA */}
                <div className="flex justify-center">
                    <img
                        src="./imagenes/club/dsa.png"
                        alt="Sponsor DSA"
                        className="h-24 object-contain transition-transform duration-300 transform"
                        style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)' }}
                        onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                        onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)'}
                    />
                </div>

                {/* Sponsor SolSport */}
                <div className="flex justify-center">
                    <img
                        src="./imagenes/club/solsport.png"
                        alt="Sponsor SolSport"
                        className="h-24 object-contain transition-transform duration-300 transform"
                        style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)' }}
                        onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                        onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)'}
                    />
                </div>

                {/* Sponsor Picco */}
                <div className="flex justify-center">
                    <img
                        src="./imagenes/club/picco.png"
                        alt="Sponsor Picco"
                        className="h-24 object-contain transition-transform duration-300 transform"
                        style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)' }}
                        onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                        onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)'}
                    />
                </div>

                {/* Sponsor Axion */}
                <div className="flex justify-center">
                    <img
                        src="./imagenes/club/axion.png"
                        alt="Sponsor Axion"
                        className="h-28 object-contain transition-transform duration-300 transform"
                        style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)' }}
                        onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                        onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)'}
                    />
                </div>

                {/* Sponsor La Gran Promoción */}
                <div className="flex justify-center">
                    <div className="relative">
                        {/* Imagen por defecto */}
                        <img
                            src="./imagenes/club/lagranpromocions.png"
                            alt="Sponsor La Gran Promoción"
                            className="h-28 object-contain transition-opacity duration-300 hover:opacity-0"
                            style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)' }}
                            onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                            onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(550%) hue-rotate(98deg)'}
                        />

                        {/* Imagen al hacer hover */}
                        <img
                            src="./imagenes/club/lagranpromocion.png"
                            alt="Imagen Hover La Gran Promoción"
                            className="h-28 object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

