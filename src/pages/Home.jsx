import { Helmet } from "react-helmet";
import { SponsorsClub } from "../components/Club/SponsorsClub";
import { Tienda } from "../components/Club/Tienda";
import { FormaParte } from "../components/Club/FormaParte";
import { InstagramPosts } from "../components/Club/InstagramPosts";
import { Especiales } from "../components/Club/Especiales";
import { LinksHeader } from "../components/Club/LinksHeaders";
import { Youtube } from "../components/Club/Youtube";
import { HeaderClub } from "../components/Club/HeaderClub";

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
