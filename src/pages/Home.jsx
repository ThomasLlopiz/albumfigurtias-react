import { Helmet } from "react-helmet";
import { SponsorsClub } from "../components/SponsorsClub";
import { Tienda } from "../components/Tienda";
import { FormaParte } from "../components/FormaParte";
import { InstagramPosts } from "../components/InstagramPosts";
import { Especiales } from "../components/Especiales";
import { LinksHeader } from "../components/LinksHeaders";
import { Youtube } from "../components/Youtube";
import { HeaderClub } from "../components/HeaderClub";

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
      <HeaderClub />
      <LinksHeader />
      <InstagramPosts />
      <Tienda />
      <Especiales />
      <FormaParte />
      <SponsorsClub />
      <Youtube />
    </div>
  );
};
