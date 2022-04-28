import React from "react";
import { Routes, Route } from "react-router-dom";

import EnvironmentDay from "./pages/EnvironmentDay";
import ShopCart from "./pages/ShopCart";

const Main = () => (
  <Routes>
    <Route exact path="/cart" element={<ShopCart />} />
    
    <Route path="/environment" element={<EnvironmentDay />} />
  </Routes>
);

export default Main;
