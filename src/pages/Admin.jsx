import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faFileAlt,
  faFutbol,
  faBuilding,
  faUserGraduate,
  faCalendarAlt,
  faDumbbell,
  faUser,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

export const Admin = () => {
  const navigate = useNavigate();
  const adminMenuItems = [
    // { to: "/cuotas", icon: faMoneyBillWave, text: "Cuotas" },
    // { to: "/curriculums", icon: faFileAlt, text: "Curriculums" },
    // { to: "/alumnos", icon: faUserGraduate, text: "Alumnos" },
    // { to: "/alquileres", icon: faBuilding, text: "Alquileres" },
    // { to: "/fechas", icon: faCalendarAlt, text: "Fechas" },
    { to: "/crearDeportes", icon: faFutbol, text: "Crear Deportes" },
    { to: "/usuarios", icon: faUser, text: "Crear Usuarios" },
  ];

  const usuarioMenuItems = [
    { to: "/deportes", icon: faDumbbell, text: "Deportes" },
    { to: "/asistencias", icon: faCheckCircle, text: "Asistencias" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("rol");
    navigate("/sesion");
  };

  return (
    <div className="text-black px-0 my-32 max-w-7xl mx-auto lg:px-4 lg:py-12">
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Admin Menu Items */}
        <div className="flex items-center justify-center gap-12">
          {adminMenuItems.map(({ to, icon, text }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center justify-center mx-auto bg-green-700 text-white w-44 h-44 lg:w-48 lg:h-48 rounded-2xl shadow-lg hover:bg-green-800"
            >
              <FontAwesomeIcon icon={icon} className="text-4xl" />
              <span className="mt-2 text-lg font-semibold text-center">{text}</span>
            </Link>
          ))}
        </div>

        {/* Usuario Menu Items */}
        <div className="flex items-center justify-center gap-12">
          {usuarioMenuItems.map(({ to, icon, text }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center justify-center mx-auto bg-green-700 text-white w-44 h-44 lg:w-48 lg:h-48 rounded-2xl shadow-lg hover:bg-green-800"
            >
              <FontAwesomeIcon icon={icon} className="text-4xl" />
              <span className="mt-2 text-lg font-semibold text-center">{text}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700"
        >
          Desloguearse
        </button>
      </div>
    </div>
  );
};
