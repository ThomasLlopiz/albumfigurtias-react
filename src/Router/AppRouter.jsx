import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Juegos } from "../pages/Juegos";
import { Novedades } from "../pages/Novedades";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/juegos" element={<Juegos />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="*" element={<Home />}/>
    </Routes>
  );
};
