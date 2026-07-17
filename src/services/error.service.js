import axios from "axios";

const API = "http://localhost:3000";

export const obtenerError404 = async () => {
  return await axios.get(`${API}/ruta-no-existe`);
};