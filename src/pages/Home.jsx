import { Helmet } from "react-helmet";
import { Curriculum } from "../components/Curriculum";
import { Noticias } from "../components/Noticias";
import { Sponsors } from "../components/Sponsors";
import { Tienda } from "../components/Tienda";
import { Whatsapp } from "../components/Whatsapp";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SSD | Socidad Sportiva Devoto</title>
        <meta name="description" content="Bienvenido a nuestro sitio web, donde podrás encontrar noticias, tienda, y más." />
        <meta name="keywords" content="noticias, tienda, curriculum, sponsors, whatsapp" />
        <meta property="og:title" content="SSD | Socidad Sportiva Devoto" />
        <meta property="og:description" content="Bienvenido a nuestro sitio web, donde podrás encontrar noticias, tienda, y más." />
        <meta property="og:image" content="./imagenes/club/publicidad1.jpg" />
        <meta property="og:url" content="https://www.socidadsportivadevoto.com.ar/" />
      </Helmet>

      <Noticias />
      <div className="max-w-7xl mx-auto px-4">
        <img
          className="rounded-lg"
          src="./imagenes/club/publicidad1.jpg"
          alt="Publicidad del sitio"
        />
      </div>
      <Tienda />
      <Curriculum />
      <Sponsors />
      <Whatsapp />
    </div>
  );
};
