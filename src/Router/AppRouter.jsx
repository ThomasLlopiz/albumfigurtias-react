import { Routes, Route } from "react-router-dom";
import { Juegos } from "../pages/Album/Juegos";
import { Album } from "../pages/Album/Album";

import { Inscripcion } from "../pages/club/Inscripcion";
import { Amateurs } from "../pages/club/Amateurs";
import { Basquet } from "../pages/club/Basquet";
import { Futbol } from "../pages/club/Futbol";
import { GimAdultos } from "../pages/club/GimAdultos";
import { Historia } from "../pages/club/Historia";
import { ComisionDirectiva } from "../pages/club/ComisionDirectiva";
import { TourVirtual } from "../pages/club/TourVirtual";
import { Curriculum } from "../pages/club/Curriculum";
import { Experiencias } from "../pages/club/Experiencias";

import { Home } from "../pages/Home";
import { Admin } from "../pages/Admin";

import { CrearDeportes } from "../pages/admin/CrearDeportes";
import { Usuarios } from "../pages/admin/Usuarios";
import { Curriculums } from "../pages/admin/Curriculums";
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
      <Route path="/basquet" element={<Basquet />} />
      <Route path="/futbol" element={<Futbol />} />
      <Route path="/gimadultos" element={<GimAdultos />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/comisiondirectiva" element={<ComisionDirectiva />} />
      <Route path="/tourvirtual" element={<TourVirtual />} />
      <Route path="/trabajaconnosotros" element={<Curriculum />} />
      <Route path="/experiencias" element={<Experiencias />} />

      <Route path="/usuarios" element={<PrivateRouteForAdminOnly element={<Usuarios />} />} />
      <Route path="/cuotas" element={<PrivateRouteForAdminOnly element={<Usuarios />} />} />
      <Route path="/alquileres" element={<PrivateRouteForAdminOnly element={<Usuarios />} />} />
      <Route path="/curriculums" element={<PrivateRouteForAdminOnly element={<Curriculums />} />} />
      <Route path="/fechas" element={<PrivateRouteForAdminOnly element={<Curriculums />} />} />
      <Route path="/crearDeportes" element={<PrivateRouteForAdminOnly element={<CrearDeportes />} />} />
      <Route path="/inscriptos" element={<PrivateRouteForAdminOnly element={<Inscriptos />} />} />

      <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
      <Route path="/deportes" element={<PrivateRoute element={<Deportes />} />} />
      <Route path="/asistencias" element={<PrivateRoute element={<Asistencias />} />} />
      <Route path="/asistencia" element={<PrivateRoute element={<Asistencia />} />} />
    </Routes>
  );
};
