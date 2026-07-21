import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const [turnos, setTurnos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [turnoAEliminar, setTurnoAEliminar] = useState(null);
  const [buscar, setBuscar] = useState("");
  const [hora, setHora] = useState(new Date());

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
      const res = await axios.get(
        "https://barberia-backend-p48g.onrender.com/api/turnos",
      );
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
      await axios.delete(
        `https://barberia-backend-p48g.onrender.com/api/turnos/${id}`,
      );

      setMostrarModal(false);
      setTurnoAEliminar(null);

      cargarTurnos();
    } catch (error) {
      console.log(error);
    }
  };

  const confirmarTurno = async (turno) => {
    try {
      await axios.put(`https://barberia-backend-p48g.onrender.com/api/turnos/${turno._id}`, {
        ...turno,
        servicio: turno.servicio?._id || turno.servicio,
        estado: "Confirmado",
      });

      cargarTurnos();

      alert(`✅ El turno de ${turno.nombre} fue confirmado.`);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("usuario");
    navigate("/");
  };

  const turnosFiltrados = turnos.filter((turno) =>
    turno.nombre.toLowerCase().includes(buscar.toLowerCase()),
  );

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
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
          <div>
            <h1 className="fw-bold" style={{ color: "#2E8B4D" }}>
              💈 Panel de Administración
            </h1>

            <h5 className="text-light">Bienvenido, {usuario?.nombre}</h5>

            <small style={{ color: "#2E8B4D" }}>
              🕒 {hora.toLocaleTimeString()}
            </small>
          </div>

          <button className="btn btn-danger" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Buscar cliente..."
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
          />
        </div>
        <div className="row g-4 mb-5">
          {" "}
          <div className="col-md-3">
            <div
              className="card text-center shadow-lg p-4"
              style={{
                backgroundColor: "#1b1b1b",
                color: "white",
                border: "2px solid #2E8B4D",
                borderRadius: "20px",
              }}
            >
              <h1>📅</h1>
              <h5>Total de Turnos</h5>
              <h2 style={{ color: "#2E8B4D" }}>{turnos.length}</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card text-center shadow-lg p-4"
              style={{
                backgroundColor: "#1b1b1b",
                color: "white",
                border: "2px solid #2E8B4D",
                borderRadius: "20px",
              }}
            >
              <h1>✂️</h1>
              <h5>Servicios</h5>
              <h2 style={{ color: "#2E8B4D" }}>3</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card text-center shadow-lg p-4"
              style={{
                backgroundColor: "#1b1b1b",
                color: "white",
                border: "2px solid #2E8B4D",
                borderRadius: "20px",
              }}
            >
              <h1>👥</h1>
              <h5>Clientes</h5>
              <h2 style={{ color: "#2E8B4D" }}>{turnos.length}</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card text-center shadow-lg p-4"
              style={{
                backgroundColor: "#1b1b1b",
                color: "white",
                border: "2px solid #2E8B4D",
                borderRadius: "20px",
              }}
            >
              <h1>🟢</h1>
              <h5>Estado</h5>
              <h2 style={{ color: "#2E8B4D" }}>Activo</h2>
            </div>
          </div>
        </div>
        <h2 className="fw-bold mb-4" style={{ color: "#2E8B4D" }}>
          📋 Turnos Registrados
        </h2>{" "}
        {turnosFiltrados.length === 0 ? (
          <div className="text-center py-5">
            <h3>📭 No hay turnos registrados.</h3>

            <p className="text-secondary">
              Cuando los clientes reserven un turno aparecerán aquí.
            </p>
          </div>
        ) : (
          <div className="row">
            {turnosFiltrados.map((turno) => (
              <div className="col-lg-6 mb-4" key={turno._id}>
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
                    <h3 className="fw-bold mb-3" style={{ color: "#2E8B4D" }}>
                      👤 {turno.nombre}
                    </h3>

                    <p>
                      <strong>📞 Teléfono:</strong> {turno.telefono}
                    </p>

                    <p>
                      <strong>💈 Servicio:</strong>{" "}
                      {turno.servicio?.nombre || turno.servicio}
                    </p>

                    <p>
                      <strong>🧔 Barbero:</strong> {turno.barbero}
                    </p>

                    <p>
                      <strong>📅 Fecha:</strong> {turno.fecha}
                    </p>

                    <p>
                      <strong>🕒 Hora:</strong> {turno.hora}
                    </p>
                    <p>
                      <strong>Estado:</strong>{" "}
                      <span
                        className={
                          turno.estado === "Confirmado"
                            ? "badge bg-success"
                            : "badge bg-warning text-dark"
                        }
                      >
                        {turno.estado || "Pendiente"}
                      </span>
                    </p>

                    <hr />
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-success"
                        onClick={() => confirmarTurno(turno)}
                        disabled={
                          turno.estado === "Confirmado" ||
                          new Date(turno.fecha) <
                            new Date(new Date().toISOString().split("T")[0])
                        }
                      >
                        {turno.estado === "Confirmado"
                          ? "✅ Confirmado"
                          : "✔ Confirmar"}
                      </button>

                      <button
                        className="btn btn-danger w-50"
                        onClick={() => {
                          setTurnoAEliminar(turno);
                          setMostrarModal(true);
                        }}
                      >
                        🗑 Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {mostrarModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">💈 Barbería Rolling Code</h5>
              </div>

              <div className="modal-body">
                <p>¿Estás seguro de que deseas eliminar este turno?</p>
                <p className="text-danger mb-0">
                  Esta acción no se puede deshacer.
                </p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setMostrarModal(false)}
                >
                  Cancelar
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => eliminarTurno(turnoAEliminar._id)}
                >
                  🗑 Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
