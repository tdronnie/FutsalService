// src/routes/index.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import SignUpPage from "../components/pages/SignUpPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/SignUp" element={<SignUpPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
