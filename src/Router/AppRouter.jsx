import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Juegos } from "../pages/Juegos";
import { Novedades } from "../pages/Novedades";
import { Album } from "../pages/Album";
import { Tienda } from "../pages/Tienda";
import { Inscripcion } from "../pages/Inscripcion";
import { Asitencia } from "../pages/Asitencia";
import { Curriculum } from "../pages/Curriculum";
import { Admin } from "../pages/Admin";
import { Sesion } from "../pages/Sesion";
import { PrivateRoute, PrivateRouteForAdminOnly } from "../hooks/PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/juegos"  element={<Juegos />} />
      <Route path="/album"  element={<Album />} />
      <Route path="/novedades"  element={<Novedades />} />
      <Route path="/tienda"  element={<Tienda />} />
      <Route path="/inscripcion" element={<Inscripcion />} />
      <Route path="/asistencias" element={<PrivateRouteForAdminOnly element={<Asitencia />} />} />
      <Route path="/curriculum" element={<PrivateRouteForAdminOnly element={<Curriculum />} />} />
      <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
      <Route path="/sesion" element={<Sesion />} />
    </Routes>
  );
};
