import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [turnos, setTurnos] = useState([]);
  const navigate = useNavigate();

  // 🛡️ PROTECCIÓN
  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      navigate("/login");
    }
  }, []);

  // 📥 cargar turnos
  const cargarTurnos = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/turnos"
      );
      setTurnos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarTurnos();
  }, []);

  // ❌ eliminar turno
  const eliminarTurno = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/turnos/${id}`
      );

      setTurnos((prev) =>
        prev.filter((t) => t._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  // 🚪 logout
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <div className="container mt-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard Admin 💈</h1>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </div>

      {/* ESTADÍSTICA SIMPLE */}
      <div className="alert alert-info">
        Total de turnos: {turnos.length}
      </div>

      {/* LISTA DE TURNOS */}
      <div className="row">
        {turnos.length === 0 ? (
          <p>No hay turnos registrados</p>
        ) : (
          turnos.map((turno) => (
            <div
              key={turno._id}
              className="col-md-6 mb-3"
            >
              <div className="card p-3 shadow">

                <h5>{turno.nombre}</h5>

                <p>
                  📞 {turno.telefono}
                  <br />
                  💇 {turno.servicio}
                  <br />
                  📅 {turno.fecha} - ⏰ {turno.hora}
                </p>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    eliminarTurno(turno._id)
                  }
                >
                  Eliminar
                </button>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;