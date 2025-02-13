import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Juegos } from "../pages/Juegos";
import { Novedades } from "../pages/Novedades";
import { Album } from "../pages/Album";
import { Tienda } from "../pages/Tienda";
import { Inscripcion } from "../pages/Inscripcion";
import { Admin } from "../pages/Admin";
import { Sesion } from "../pages/Sesion";
import { Asistencia } from "../pages/admin/Asitencia";
import { Usuarios } from "../pages/admin/Usuarios";
import { Curriculum } from "../pages/admin/Curriculum";
import { PrivateRoute, PrivateRouteForAdminOnly } from "../hooks/PrivateRoute";
import { CrearDeportes } from "../pages/admin/CrearDeportes";
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
      <Route path="/sesion" element={<Sesion />} />
      <Route path="/asistencias" element={<PrivateRouteForAdminOnly element={<Asistencia />} />} />
      <Route path="/usuarios" element={<PrivateRouteForAdminOnly element={<Usuarios />} />} />
      <Route path="/curriculums" element={<PrivateRouteForAdminOnly element={<Curriculum />} />} />
      <Route path="/crearDeportes" element={<PrivateRouteForAdminOnly element={<CrearDeportes />} />} />
      <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
      <Route path="/deportes" element={<PrivateRoute element={<Deportes />} />} />
    </Routes>
  );
};
