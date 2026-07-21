import axios from "axios";

const API = "https://barberia-backend-p48g.onrender.com/api/auth";

export const obtenerError404 = async () => {
  return await axios.get(`${API}/ruta-no-existe`);
};