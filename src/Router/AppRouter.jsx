import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Games } from "../pages/Games";
import { Novedades } from "../pages/Novedades";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/juegos" element={<Games />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="*" element={<Home />}/>
    </Routes>
  );
};
