import { Routes, Route } from "react-router-dom";
import { Juegos } from "../pages/Album/Juegos";
import { Album } from "../pages/Album/Album";

import { Home } from "../pages/Home";

import { Novedades } from "../pages/Novedades";
import { Inscripcion } from "../pages/Inscripcion";
import { Admin } from "../pages/Admin";
import { Sesion } from "../pages/Sesion";

import { PrivateRoute, PrivateRouteForAdminOnly } from "../hooks/PrivateRoute";
import { CrearDeportes } from "../pages/admin/CrearDeportes";
import { Usuarios } from "../pages/admin/Usuarios";
import { Curriculum } from "../pages/admin/Curriculum";
import { Deportes } from "../pages/admin/Deportes";
import { Asistencias } from "../pages/admin/Asistencias";
import { Inscriptos } from "../pages/admin/Inscriptos";
import { Asistencia } from "../pages/admin/Asitencia";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/juegos" element={<Juegos />} />
      <Route path="/album" element={<Album />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/inscribirme" element={<Inscripcion />} />
      <Route path="/sesion" element={<Sesion />} />
      <Route path="/asistencia" element={<PrivateRoute element={<Asistencia />} />} />
      <Route path="/usuarios" element={<PrivateRouteForAdminOnly element={<Usuarios />} />} />
      <Route path="/cuotas" element={<PrivateRouteForAdminOnly element={<Usuarios />} />} />
      <Route path="/alquileres" element={<PrivateRouteForAdminOnly element={<Usuarios />} />} />
      <Route path="/curriculums" element={<PrivateRouteForAdminOnly element={<Curriculum />} />} />
      <Route path="/fechas" element={<PrivateRouteForAdminOnly element={<Curriculum />} />} />
      <Route path="/crearDeportes" element={<PrivateRouteForAdminOnly element={<CrearDeportes />} />} />
      <Route path="/inscriptos" element={<PrivateRouteForAdminOnly element={<Inscriptos />} />} />
      <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
      <Route path="/deportes" element={<PrivateRoute element={<Deportes />} />} />
      <Route path="/asistencias" element={<PrivateRoute element={<Asistencias />} />} />
    </Routes>
  );
};
