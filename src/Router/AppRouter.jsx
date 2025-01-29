import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Juegos } from "../pages/Juegos";
import { Novedades } from "../pages/Novedades";
import { Album } from "../pages/Album";
import { Tienda } from "../pages/Tienda";
import { Inscripcion } from "../pages/Inscripcion";
import { Asitencia } from "../pages/Asitencia";
import { Curriculum } from "../pages/Curriculum";
import { Admin } from "../pages/Admin";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/juegos" element={<Juegos />} />
      <Route path="/album" element={<Album />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/inscripcion" element={<Inscripcion />} />
      <Route path="/asistencias" element={<Asitencia />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
