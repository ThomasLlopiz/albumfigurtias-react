import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token");
  const expiresAt = localStorage.getItem("expires_at");

  if (token && expiresAt) {
    const expirationDate = new Date(expiresAt);
    const currentDate = new Date();

    if (currentDate > expirationDate) {
      localStorage.removeItem("token");
      localStorage.removeItem("expires_at");
      return <Navigate to="/sesion" />;
    }
    return element;
  }

  return token ? <Route {...rest} /> : <Navigate to="/sesion" />;
};
