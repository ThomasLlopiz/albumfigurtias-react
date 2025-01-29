import { Link } from "react-router-dom";

export const Admin = () => {
  return (
    <div className="text-black flex flex-col gap-2 mt-32 mb-32 max-w-xl mx-auto">
      <div className="flex justify-between items-center gap-4">
        <Link
          to="/cuotas"
          className="h-24 w-24 border-2 border-green-800 flex items-center justify-center"
        >
          Cuotas
        </Link>
        <Link
          to="/curriculums"
          className="h-24 w-24 border-2 border-green-800 flex items-center justify-center"
        >
          Curriculums
        </Link>
        <Link
          to="/profesores"
          className="h-24 w-24 border-2 border-green-800 flex items-center justify-center"
        >
          Profesores
        </Link>
        <Link
          to="/alquileres"
          className="h-24 w-24 border-2 border-green-800 flex items-center justify-center"
        >
          Alquileres
        </Link>
      </div>

      <div className="flex justify-between items-center gap-4">
        <Link
          to="/alumnos"
          className="h-24 w-24 border-2 border-green-800 flex items-center justify-center"
        >
          Alumnos
        </Link>
        <Link
          to="/fechas"
          className="h-24 w-24 border-2 border-green-800 flex items-center justify-center"
        >
          Fechas
        </Link>
        <Link
          to="/asistencias"
          className="h-24 w-24 border-2 border-green-800 flex items-center justify-center"
        >
          Asistencias
        </Link>
      </div>
    </div>
  );
};
