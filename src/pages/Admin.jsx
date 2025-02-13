import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faFileAlt,
  faFutbol,
  faBuilding,
  faUserGraduate,
  faCalendarAlt,
  faDumbbell,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export const Admin = () => {
  const menuItems = [
    { to: "/cuotas", icon: faMoneyBillWave, text: "Cuotas" },
    { to: "/curriculums", icon: faFileAlt, text: "Curriculums" },
    { to: "/crearDeportes", icon: faFutbol, text: "Crear Deportes" },
    { to: "/usuarios", icon: faUser, text: "Usuarios" },
    { to: "/alquileres", icon: faBuilding, text: "Alquileres" },
    { to: "/alumnos", icon: faUserGraduate, text: "Alumnos" },
    { to: "/fechas", icon: faCalendarAlt, text: "Fechas" },
    { to: "/deportes", icon: faDumbbell, text: "Deportes" },
  ];

  return (
    <div className="py-12 text-black my-32 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center">
        {menuItems.map(({ to, icon, text }) => (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center justify-center mx-auto bg-green-700 text-white w-48 h-48 rounded-2xl shadow-lg hover:bg-green-800"
          >
            <FontAwesomeIcon icon={icon} className="text-4xl" />
            <span className="mt-2 text-lg font-semibold text-center">{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
