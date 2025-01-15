export const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 w-full flex items-center justify-between px-6 py-4 text-white mx-auto max-w-7xl">
      <div className="flex space-x-12">
        <div className="relative group">
          <a href="#" className="font-bold hover:underline flex items-center">
            EL EQUIPO
            <i className="fas fa-chevron-down ml-1"></i>
          </a>
          <div className="absolute left-0 hidden mt-2 bg-white text-black rounded shadow-lg group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Submenú 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Submenú 2
            </a>
          </div>
        </div>
        <div className="relative group">
          <a href="#" className="font-bold hover:underline flex items-center">
            EL CLUB
            <i className="fas fa-chevron-down ml-1"></i>
          </a>
          <div className="absolute left-0 hidden mt-2 bg-white text-black rounded shadow-lg group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Submenú 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Submenú 2
            </a>
          </div>
        </div>
      </div>

      <div>
        <img
          src="./imagenes/club/ssdescudo.png"
          alt="Escudo Sociedad Sportiva Devoto"
          className="h-20"
        />
      </div>

      <div className="flex space-x-12">
        <a href="#" className="font-bold hover:underline">
          INSCRIBIRME
        </a>
        <a href="#" className="font-bold hover:underline">
          TIENDA
        </a>
      </div>
    </nav>
  );
};
