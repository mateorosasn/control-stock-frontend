import axios from "axios";

const API = "https://barberia-backend-p48g.onrender.com/api/auth";

export const login = async (datos) => {
  return await axios.post(`${API}/login`, datos);
};

export const registrar = async (datos) => {
  return await axios.post(`${API}/registrar`, datos);
};