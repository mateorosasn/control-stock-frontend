import axios from "axios";

const API = "http://localhost:3000/api/auth";

export const login = async (datos) => {
  return await axios.post(`${API}/login`, datos);
};

export const registrar = async (datos) => {
  return await axios.post(`${API}/registrar`, datos);
};