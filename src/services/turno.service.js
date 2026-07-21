import axios from "axios";

const API = "https://barberia-backend-p48g.onrender.com/api/turnos";

export const obtenerTurnos = async () => {
  return await axios.get(API);
};

export const crearTurno = async (data) => {
  return await axios.post(API, data);
};

export const eliminarTurno = async (id) => {
  return await axios.delete(`${API}/${id}`);
};

export const actualizarTurno = async (id, data) => {
  return await axios.put(`${API}/${id}`, data);
};
