import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [turnos, setTurnos] = useState([]);
  const [hora, setHora] = useState(new Date());

  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const cargarTurnos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/turnos");
      setTurnos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarTurnos();
  }, []);

  const eliminarTurno = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/turnos/${id}`);
      setTurnos((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <div
  className="container-fluid py-5"
  style={{
    backgroundColor: "#111",
    minHeight: "100vh",
    color: "white",
  }}
>
  <div className="container">

    <div className="d-flex justify-content-between align-items-center mb-5">

      <div>
        <h1 className="fw-bold" style={{ color: "#2E8B4D" }}>
          💈 Panel de Administración
        </h1>

        <h5 className="text-light">
          Bienvenido, {usuario?.nombre}
        </h5>

        <small style={{ color: "#2E8B4D" }}>
          🕒 {hora.toLocaleTimeString()}
        </small>
      </div>

      <button
        className="btn btn-danger"
        onClick={logout}
      >
        Cerrar sesión
      </button>

    </div>

    <div className="row g-4 mb-5">

      <div className="col-md-3">
        <div
          className="card text-center p-4 shadow-lg"
          style={{ border: "2px solid #2E8B4D", borderRadius: "15px" }}
        >
          <h1>📅</h1>
          <h5>Turnos</h5>
          <h2>{turnos.length}</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div
          className="card text-center p-4 shadow-lg"
          style={{ border: "2px solid #2E8B4D", borderRadius: "15px" }}
        >
          <h1>✂️</h1>
          <h5>Servicios</h5>
          <h2>3</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div
          className="card text-center p-4 shadow-lg"
          style={{ border: "2px solid #2E8B4D", borderRadius: "15px" }}
        >
          <h1>👥</h1>
          <h5>Usuarios</h5>
          <h2>--</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div
          className="card text-center p-4 shadow-lg"
          style={{ border: "2px solid #2E8B4D", borderRadius: "15px" }}
        >
          <h1>🟢</h1>
          <h5>Sistema</h5>
          <h2 style={{ color: "#2E8B4D" }}>Activo</h2>
        </div>
      </div>

    </div>

    <h2
      className="fw-bold mb-4"
      style={{ color: "#2E8B4D" }}
    >
      📋 Reservas Registradas
    </h2>
    <div className="row">

  {turnos.length === 0 ? (

    <div className="text-center py-5">
      <h3>📭 No hay turnos registrados.</h3>

      <p className="text-secondary">
        Cuando los clientes reserven un turno aparecerán aquí.
      </p>
    </div>

  ) : (

    turnos.map((turno) => (

      <div
        className="col-lg-6 mb-4"
        key={turno._id}
      >

        <div
          className="card shadow-lg h-100"
          style={{
            backgroundColor: "#1b1b1b",
            color: "white",
            border: "2px solid #2E8B4D",
            borderRadius: "20px",
          }}
        >

          <div className="card-body">

            <h3
              className="fw-bold mb-3"
              style={{ color: "#2E8B4D" }}
            >
              👤 {turno.nombre}
            </h3>

            <p>
              <strong>📞 Teléfono:</strong> {turno.telefono}
            </p>

            <p>
              <strong>✂️ Servicio:</strong> {turno.servicio}
            </p>

            <p>
              <strong>📅 Fecha:</strong> {turno.fecha}
            </p>

            <p>
              <strong>🕒 Hora:</strong> {turno.hora}
            </p>

            <hr />

            <div className="d-flex gap-2">

              <button
                className="btn btn-success w-50"
              >
                ✔ Confirmar
              </button>

              <button
                className="btn btn-danger w-50"
                onClick={() => eliminarTurno(turno._id)}
              >
                🗑 Eliminar
              </button>

            </div>

          </div>

        </div>

      </div>

    ))

  )}

</div>

      </div>
    </div>
  );
}

export default Admin;