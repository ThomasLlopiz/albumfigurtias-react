import { Curriculum } from "../components/Curriculum";
import { Header } from "../components/Header";
import { Noticias } from "../components/Noticias";
import { Sponsors } from "../components/Sponsors";
import { Tienda } from "../components/Tienda";
import { Whatsapp } from "../components/Whatsapp";

export const Home = () => {
  return (
    <div>
      <Header />
      <Noticias />
      <div className="max-w-7xl mx-auto px-4">
        <img
          className="rounded-lg"
          src="./imagenes/club/publicidad1.jpg"
          alt=""
        />
      </div>
      <Tienda />
      <Curriculum />
      <Sponsors />
      <Whatsapp />
    </div>
  );
};
