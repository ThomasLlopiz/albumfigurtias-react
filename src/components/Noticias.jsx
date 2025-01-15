export const Noticias = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-8">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
        NOTICIAS
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        <button className="border border-gray-500 text-gray-500 py-2 px-4 rounded-full hover:bg-gray-500 hover:text-white">
          Todas las notas
        </button>
        <button className="border border-gray-500 text-gray-500 py-2 px-4 rounded-full hover:bg-gray-500 hover:text-white">
          Plantel profesional
        </button>
        <button className="border border-gray-500 text-gray-500 py-2 px-4 rounded-full hover:bg-gray-500 hover:text-white">
          Plantel femenino
        </button>
        <button className="border border-gray-500 text-gray-500 py-2 px-4 rounded-full hover:bg-gray-500 hover:text-white">
          Plantel reserva
        </button>
        <button className="border border-gray-500 text-gray-500 py-2 px-4 rounded-full hover:bg-gray-500 hover:text-white">
          Institucional
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-green-800 text-white text-sm font-semibold py-2 px-4">
            Destacado Contenido Exclusivo
          </div>
          <img
            src="./imagenes/club/noticia1.jpg"
            alt="Noticia 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-green-800 text-white">
            <h3 className="text-lg font-bold mb-2 truncate">
              Pretemporada de Talleres: Regreso a las tareas
            </h3>
            <p className="text-sm line-clamp-2">
              El conjunto dirigido por Alexander Medina realizó esta mañana
              encuentros de entrenamiento ante San Martín de Tucumán.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-green-800 text-white text-sm font-semibold py-2 px-4">
            Novedades
          </div>
          <img
            src="./imagenes/club/noticia2.jpg"
            alt="Noticia 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-green-800 text-white">
            <h3 className="text-lg font-bold mb-2 truncate">
              Talleres de Pretemporada: Victorias en la práctica de fútbol...
            </h3>
            <p className="text-sm line-clamp-2">
              El conjunto dirigido por Alexander Medina realizó esta mañana
              encuentros de entrenamiento ante San Martín de Tucumán.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-green-800 text-white text-sm font-semibold py-2 px-4">
            Novedades
          </div>
          <img
            src="./imagenes/club/noticia3.jpg"
            alt="Noticia 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-green-800 text-white">
            <h3 className="text-lg font-bold mb-2 truncate">
              La pasión sigue latente: Talleres y Vino Toro, juntos nuevamente
            </h3>
            <p className="text-sm line-clamp-2">
              El conjunto dirigido por Alexander Medina realizó esta mañana
              encuentros de entrenamiento ante San Martín de Tucumán.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-700">
          Ver más
        </button>
      </div>
    </section>
  );
};
