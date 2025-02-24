export const Tienda = () => {
  return (
    <div id="tienda" className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-center text-green-800">TIENDA VERDE</h2>
        <p className="text-md uppercase text-center text-gray-500">
          Encuentra estos productos y más en{' '}
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Proveedur%C3%ADa+SuperSol/@-31.406514,-62.3043095,970m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95cb336df6ea9def:0x6337fbfb719397a8!8m2!3d-31.4065186!4d-62.3017346!16s%2Fg%2F11nx5k2njm?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            className="underline"
            rel="noopener noreferrer"
          >
            Supersol
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Producto 1 */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <img
            src="./imagenes/club/producto1.jpg"
            alt="Producto 1"
            className="rounded-t-lg h-90 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Remera Básquet Primera</h3>
            <a
              target="_blank"
              href="https://wa.me/5493564501086?text=Hola%21%20Quiero%20saber%20el%20precio%20del%20producto%20Remera%20B%C3%A1squet%20Primera"
              className="bg-green-800 text-white font-bold rounded-md p-2"
              rel="noopener noreferrer"
            >
              Consultar Precio
            </a>
            <p className="text-gray-500 text-sm mt-2">Descuento para Socios</p>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <img
            src="./imagenes/club/producto2.jpg"
            alt="Producto 2"
            className="rounded-t-lg h-90 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Camiseta Titular Fútbol Primera</h3>
            <a
              target="_blank"
              href="https://wa.me/5493564501086?text=Hola%21%20Quiero%20saber%20el%20precio%20del%20producto%20Camiseta%20Titular%20F%C3%BAtbol%20Primera"
              className="bg-green-800 text-white font-bold rounded-md p-2"
              rel="noopener noreferrer"
            >
              Consultar Precio
            </a>
            <p className="text-gray-500 text-sm mt-2">Descuento para Socios</p>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <img
            src="./imagenes/club/producto3.jpg"
            alt="Producto 3"
            className="rounded-t-lg h-90 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Camiseta Vóley Primera</h3>
            <a
              target="_blank"
              href="https://wa.me/5493564501086?text=Hola%21%20Quiero%20saber%20el%20precio%20del%20producto%20Camiseta%20V%C3%B3ley%20Primera"
              className="bg-green-800 text-white font-bold rounded-md p-2"
              rel="noopener noreferrer"
            >
              Consultar Precio
            </a>
            <p className="text-gray-500 text-sm mt-2">Descuento para Socios</p>
          </div>
        </div>

        {/* Producto 4 */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <img
            src="./imagenes/club/producto4.jpg"
            alt="Producto 4"
            className="rounded-t-lg h-90 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Botines Qors "La Verde"</h3>
            <a
              target="_blank"
              href="https://wa.me/5493564501086?text=Hola%21%20Quiero%20saber%20el%20precio%20del%20producto%20Botines%20Qors%20%22La%20Verde%22"
              className="bg-green-800 text-white font-bold rounded-md p-2"
              rel="noopener noreferrer"
            >
              Consultar Precio
            </a>
            <p className="text-gray-500 text-sm mt-2">Descuento para Socios</p>
          </div>
        </div>
      </div>
    </div>
  );
};