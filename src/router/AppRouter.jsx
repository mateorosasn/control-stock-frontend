import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import TurnosPage from "../pages/TurnosPage";
import ServicesPage from "../pages/ServicesPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/turnos" element={<TurnosPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;