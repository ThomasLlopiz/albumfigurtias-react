import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Juegos } from "../pages/Juegos";
import { Novedades } from "../pages/Novedades";
import { Album } from "../pages/Album";
import { Tienda } from "../pages/Tienda";
import { Inscripcion } from "../pages/Inscripcion";
import { Asitencia } from "../pages/Asitencia";
import { Curriculum } from "../pages/Curriculum";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/juegos" element={<Juegos />} />
      <Route path="/album" element={<Album />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/inscripcion" element={<Inscripcion />} />
      <Route path="/asistencia" element={<Asitencia />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
