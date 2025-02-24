import { Helmet } from "react-helmet";
import { Curriculum } from "../components/Curriculum";
import { Noticias } from "../components/Noticias";
import { Sponsors } from "../components/Sponsors";
import { Tienda } from "../components/Tienda";
import { Whatsapp } from "../components/Whatsapp";
import InstagramPosts from "../components/InstagramPosts";

export const Home = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>SSD | Socidad Sportiva Devoto</title>
        <meta name="description" content="Bienvenido a nuestro sitio web, donde podrás encontrar noticias, tienda, y más." />
        <meta name="keywords" content="noticias, tienda, curriculum, sponsors, whatsapp" />
        <meta property="og:title" content="SSD | Socidad Sportiva Devoto" />
        <meta property="og:description" content="Bienvenido a nuestro sitio web, donde podrás encontrar noticias, tienda, y más." />
        <meta property="og:image" content="./imagenes/club/publicidad1.jpg" />
        <meta property="og:url" content="https://www.socidadsportivadevoto.com.ar/" />
      </Helmet>
      <InstagramPosts />
    </div>
  );
};
