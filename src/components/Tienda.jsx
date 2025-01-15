export const Tienda = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
        TIENDA VERDE
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex space-x-12 snap-x snap-mandatory transition-transform duration-300"
            id="carousel"
          >
            <div className="min-w-[250px] max-w-sm bg-white rounded-lg shadow-md snap-start border border-gray-200">
              <img
                src="./imagenes/club/producto1.jpg"
                alt="Producto 1"
                className="rounded-t-lg h-90 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Taza "feliz día"
                </h3>
                <p className="text-green-600 text-xl font-bold">$6.500,00</p>
                <p className="text-gray-500 text-sm">
                  3 cuotas sin interés de $2.166,67
                </p>
              </div>
            </div>

            <div className="min-w-[250px] max-w-sm bg-white rounded-lg shadow-md snap-start border border-gray-200">
              <img
                src="./imagenes/club/producto2.jpg"
                alt="Producto 2"
                className="rounded-t-lg h-90 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Pulsera de silicona
                </h3>
                <p className="text-green-600 text-xl font-bold">$3.000,00</p>
                <p className="text-gray-500 text-sm">
                  3 cuotas sin interés de $1.000,00
                </p>
              </div>
            </div>

            <div className="min-w-[250px] max-w-sm bg-white rounded-lg shadow-md snap-start border border-gray-200">
              <img
                src="./imagenes/club/producto3.jpg"
                alt="Producto 3"
                className="rounded-t-lg h-90 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Pelota ADN</h3>
                <p className="text-green-600 text-xl font-bold">$52.000,00</p>
                <p className="text-gray-500 text-sm">
                  3 cuotas sin interés de $17.333,33
                </p>
              </div>
            </div>

            <div className="min-w-[250px] max-w-sm bg-white rounded-lg shadow-md snap-start border border-gray-200">
              <img
                src="./imagenes/club/producto4.jpg"
                alt="Producto 4"
                className="rounded-t-lg h-90 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Set de latas metálico
                </h3>
                <p className="text-green-600 text-xl font-bold">$15.580,00</p>
                <p className="text-gray-500 text-sm">
                  3 cuotas sin interés de $5.193,33
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
