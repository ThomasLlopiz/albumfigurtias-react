export const Header = () => {
  return (
    <header>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-99">
        <h1 id="typewriter" className="text-4xl md:text-7xl font-bold relative">
          <span id="typed-text"></span>
          <span id="caret" className="animate-blink">
            |
          </span>
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Forma parte del Club más grande de la zona
        </p>

        <div className="flex space-x-4 mt-6">
          <a
            href="#"
            className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
          >
            ASOCIARME A SSD
          </a>
          <a
            href="#"
            className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
          >
            TIENDA VERDE
          </a>
        </div>
      </div>
      <img
        src="./imagenes/club/banner.jpg"
        alt="Banner"
        className="w-full h-auto"
      />
      <div className="bg-white py-8">
        <div className="flex justify-center space-x-32">
          <a
            href="#"
            className="flex flex-col items-center text-green-800 hover:text-green-600"
          >
            <i className="fas fa-user-plus text-3xl"></i>
            <span className="mt-3 text-sm font-semibold">DATE DE ALTA</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-green-800 hover:text-green-600"
          >
            <i className="fas fa-id-card text-3xl"></i>
            <span className="mt-3 text-sm font-semibold">HACETE SOCIO</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-green-800 hover:text-green-600"
          >
            <i className="fas fa-credit-card text-3xl"></i>
            <span className="mt-3 text-sm font-semibold">PAGÁ TU CUOTA</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-green-800 hover:text-green-600"
          >
            <i className="fas fa-qrcode text-3xl"></i>
            <span className="mt-3 text-sm font-semibold">AUTOGESTIÓN</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-green-800 hover:text-green-600"
          >
            <i className="fas fa-route text-3xl"></i>
            <span className="mt-3 text-sm font-semibold">TOUR VIRTUAL</span>
          </a>
        </div>
      </div>
    </header>
  );
};

