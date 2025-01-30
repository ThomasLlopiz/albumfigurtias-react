import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token");
  const expiresAt = localStorage.getItem("expires_at");
  const rol = localStorage.getItem("rol");

  if (token && expiresAt) {
    const expirationDate = new Date(expiresAt);
    const currentDate = new Date();

    if (currentDate > expirationDate) {
      localStorage.removeItem("token");
      localStorage.removeItem("expires_at");
      localStorage.removeItem("rol");
      return <Navigate to="/sesion" />;
    }
    if (rol === "admin" || rol === "profesor") {
      return element;
    }

    return <Navigate to="/admin" />;
  }

  return <Navigate to="/sesion" />;
};

export const PrivateRouteForAdminOnly = ({ element }) => {
  const token = localStorage.getItem("token");
  const expiresAt = localStorage.getItem("expires_at");
  const rol = localStorage.getItem("rol");

  if (token && expiresAt) {
    const expirationDate = new Date(expiresAt);
    const currentDate = new Date();

    if (currentDate > expirationDate) {
      localStorage.removeItem("token");
      localStorage.removeItem("expires_at");
      localStorage.removeItem("rol");
      return <Navigate to="/sesion" />;
    }
    if (rol === "admin") {
      return element;
    }

    return <Navigate to="/admin" />;
  }

  return <Navigate to="/sesion" />;
};
