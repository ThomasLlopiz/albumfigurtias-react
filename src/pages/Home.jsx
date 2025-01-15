import { Noticias } from "../components/Noticias";
import { Sponsors } from "../components/Sponsors";
import { Tienda } from "../components/Tienda";
import { Whatsapp } from "../components/Whatsapp";

export const Home = () => {
  return (
    <div>
      <header className="relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-99">
          <h1
            id="typewriter"
            className="text-4xl md:text-7xl font-bold relative"
          >
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
        <Noticias />

        <Tienda />

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

      <div className="max-w-7xl mx-auto px-4">
        <img
          className="rounded-lg"
          src="./imagenes/club/publicidad1.jpg"
          alt=""
        />
      </div>

      <section
        className="relative bg-cover bg-fixed max-w-7xl px-4 rounded-lg mx-auto"
        tyle={{
          backgroundImage: "url('images/bandera.jpg')",
          height: "300px",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black rounded-lg opacity-50 z-0"></div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-32 z-10">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">FORMA PARTE DEL CLUB</h2>
            <a className="text-xl border border-white rounded-lg p-2 mt-4 uppercase mx-auto">
              Subir mi Curriculum Vitae
            </a>
          </div>

          <div className="w-1/3">
            <img
              src="./imagenes/club/laverde.png"
              alt="La Verde SSD"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <Sponsors />
      <Whatsapp />
      <div className="relative">
        <img
          src="./imagenes/club/footer.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
