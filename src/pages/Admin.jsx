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
  const userRole = localStorage.getItem("rol");

  const adminMenuItems = [
    { to: "/cuotas", icon: faMoneyBillWave, text: "Cuotas" },
    { to: "/curriculums", icon: faFileAlt, text: "Curriculums" },
    // { to: "/alquileres", icon: faBuilding, text: "Alquileres" },
    // { to: "/fechas", icon: faCalendarAlt, text: "Fechas" },
    { to: "/inscriptos", icon: faUser, text: "Inscriptos" },
    { to: "/crearDeportes", icon: faFutbol, text: "Crear Deportes" },
    { to: "/usuarios", icon: faUser, text: "Crear Usuarios" },
  ];

  const usuarioMenuItems = [
    { to: "/deportes", icon: faDumbbell, text: "Deportes" },
    { to: "/prePageAsistencias", icon: faCheckCircle, text: "Asistencias" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("rol");
    navigate("/sesion");
  };

  return (
    <div className="text-black px-2 mt-32 lg:my-20 max-w-7xl mx-auto lg:px-4">
      <div className="mt-8 flex justify-left lg:justify-center mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700"
        >
          Desloguearse
        </button>
      </div>
      <div className="flex md:flex-col items-center justify-between gap-4">
        {/* Conditionally render admin menu items based on role */}
        {userRole === "admin" && (
          <div className="lg:flex flex-wrap items-center justify-between gap-4">
            {adminMenuItems.map(({ to, icon, text }) => (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center mb-3 lg:mb-0 justify-center mx-auto bg-green-700 text-white w-44 h-44 lg:w-48 lg:h-48 rounded-2xl shadow-lg hover:bg-green-800"
              >
                <FontAwesomeIcon icon={icon} className="text-4xl" />
                <span className="mt-2 text-lg font-semibold text-center">{text}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Usuario Menu Items */}
        <div className="md:flex flex-wrap items-center justify-between gap-4">
          {usuarioMenuItems.map(({ to, icon, text }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center mb-3 lg:mb-0 justify-center mx-auto bg-green-700 text-white w-44 h-44 lg:w-48 lg:h-48 rounded-2xl shadow-lg hover:bg-green-800"
            >
              <FontAwesomeIcon icon={icon} className="text-4xl" />
              <span className="mt-2 text-lg font-semibold text-center">{text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
