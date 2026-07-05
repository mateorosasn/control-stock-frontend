import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import TurnosPage from "../pages/TurnosPage";
import ServicesPage from "../pages/ServicesPage";
import BarberosPage from "../pages/BarberosPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/turnos" element={<TurnosPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/barberos" element={<BarberosPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;