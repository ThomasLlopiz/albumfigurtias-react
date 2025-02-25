import { Routes, Route } from "react-router-dom";
import { Juegos } from "../pages/Album/Juegos";
import { Album } from "../pages/Album/Album";

import { Inscripcion } from "../pages/club/Inscripcion";
import { Amateurs } from "../pages/club/Amateurs";

import { Home } from "../pages/Home";
import { Admin } from "../pages/Admin";

import { CrearDeportes } from "../pages/admin/CrearDeportes";
import { Usuarios } from "../pages/admin/Usuarios";
import { Curriculum } from "../pages/admin/Curriculum";
import { Deportes } from "../pages/admin/Deportes";
import { Asistencias } from "../pages/admin/Asistencias";
import { Inscriptos } from "../pages/admin/Inscriptos";
import { Asistencia } from "../pages/admin/Asitencia";
import { Sesion } from "../pages/admin/Sesion";

import { PrivateRoute, PrivateRouteForAdminOnly } from "../hooks/PrivateRoute";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/sesion" element={<Sesion />} />

      <Route path="/juegos" element={<Juegos />} />
      <Route path="/album" element={<Album />} />

      <Route path="/inscribirme" element={<Inscripcion />} />
      <Route path="/amateurs" element={<Amateurs />} />

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
      <Route path="/asistencia" element={<PrivateRoute element={<Asistencia />} />} />
    </Routes>
  );
};
