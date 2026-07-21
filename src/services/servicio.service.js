
import axios from "axios";

const API = "https://barberia-backend-p48g.onrender.com/api/servicios";

// 🔵 Obtener servicios
export const obtenerServicios = async () => {
  return await axios.get(API);
};

// 🟢 Crear servicio
export const crearServicio = async (data) => {
  return await axios.post(API, data);
};

// 🔴 Eliminar servicio
export const eliminarServicio = async (id) => {
  return await axios.delete(`${API}/${id}`);
};

// 🟡 Editar servicio
export const editarServicio = async (id, data) => {
  return await axios.put(`${API}/${id}`, data);
};