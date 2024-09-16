import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Games } from "../pages/Games"; // Asumiendo que tienes una página para Juegos

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/juegos" element={<Games />} />
    </Routes>
  );
};
