import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Results } from "./Results";

const AppRoutes = () => (
  <div className="p-4">
    <Routes>
      <Route exact path="/" element={<Navigate to="/search" />} />
      <Route exact path="/search" element={<Results />} />
    </Routes>
  </div>
);

export default AppRoutes;
