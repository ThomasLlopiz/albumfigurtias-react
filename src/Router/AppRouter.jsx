import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Juegos } from "../pages/Juegos";
import { Novedades } from "../pages/Novedades";
import { Album } from "../pages/Album";
import { Tienda } from "../pages/Tienda";
import { Inscripcion } from "../pages/Inscripcion";
import { Admin } from "../pages/Admin";
import { Sesion } from "../pages/Sesion";
import { Asitencia } from "../pages/admin/Asitencia";
import { Curriculum } from "../pages/admin/Curriculum";
import { PrivateRoute, PrivateRouteForAdminOnly } from "../hooks/PrivateRoute";
import { Deportes } from "../pages/admin/Deportes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/juegos"  element={<Juegos />} />
      <Route path="/album"  element={<Album />} />
      <Route path="/novedades"  element={<Novedades />} />
      <Route path="/tienda"  element={<Tienda />} />
      <Route path="/inscripciones" element={<Inscripcion />} />
      <Route path="/asistencias" element={<PrivateRouteForAdminOnly element={<Asitencia />} />} />
      <Route path="/curriculums" element={<PrivateRouteForAdminOnly element={<Curriculum />} />} />
      <Route path="/deportes" element={<PrivateRouteForAdminOnly element={<Deportes />} />} />
      <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
      <Route path="/sesion" element={<Sesion />} />
    </Routes>
  );
};
