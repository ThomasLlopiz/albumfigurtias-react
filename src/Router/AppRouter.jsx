import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Juegos } from "../pages/Juegos";
import { Novedades } from "../pages/Novedades";
import { Album } from "../pages/Album";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/juegos" element={<Juegos />} />
      <Route path="/album" element={<Album />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
