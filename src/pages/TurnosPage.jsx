import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  crearTurno,
  obtenerTurnos,
  eliminarTurno,
  actualizarTurno,
} from "../services/turno.service";

function TurnosPage() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const [servicio, setServicio] = useState("");
  const [servicios, setServicios] = useState([]);

  const [barbero, setBarbero] = useState("Juan Pérez");

  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const [turnos, setTurnos] = useState([]);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [errorFecha, setErrorFecha] = useState("");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const cargarTurnos = async () => {
    try {
      const res = await obtenerTurnos();
      setTurnos(res.data);
    } catch (error) {
      console.log(error);

      if (error.response) {
        setMensaje(error.response.data.message);
      } else {
        setMensaje("Error al reservar el turno");
      }
    }
  };

  const cargarServicios = async () => {
    try {
      const res = await axios.get("https://barberia-backend-p48g.onrender.com/api/servicios");

      setServicios(res.data);

      if (res.data.length > 0) {
        setServicio(res.data[0]._id);
      }
    } catch (error) {
      console.log("ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);

      alert("Entró al catch");

      if (error.response) {
        setMensaje(error.response.data.message);
      } else {
        setMensaje("Error al reservar el turno");
      }
    }
  };

  useEffect(() => {
    cargarTurnos();
    cargarServicios();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usuario) {
      setMensaje(
        "⚠️ Debes iniciar sesión o registrarte para reservar un turno.",
      );
      return;
    }

    // Limpiar mensaje anterior
    setMensaje("");
    setErrorFecha("");
    if (telefono.length < 8) {
      setMensaje("❌ Ingresá un teléfono válido.");
      return;
    }
    if (nombre.trim().length < 3) {
      setMensaje("❌ Ingresá un nombre válido.");
      return;
    }

    const hoy = new Date().toISOString().split("T")[0];

    if (fecha < hoy) {
      setErrorFecha(
        "❌ No se pueden reservar turnos en fechas anteriores al día de hoy.",
      );
      return;
    }

    try {
      if (modoEdicion) {
        await actualizarTurno(idEditando, {
          nombre,
          telefono,
          servicio,
          barbero,
          fecha,
          hora,
        });

        setModoEdicion(false);
        setIdEditando(null);
      } else {
        console.log("usuario que manda turno:", usuario);
        await crearTurno({
          usuario: usuario._id,
          nombre,
          telefono,
          servicio,
          barbero,
          fecha,
          hora,
        });
      }

      await cargarTurnos();

      setNombre("");
      setTelefono("");
      setServicio(servicios.length > 0 ? servicios[0]._id : "");
      setBarbero("Juan Pérez");
      setFecha("");
      setHora("");
      setMensaje(
        "✅ ¡Turno reservado correctamente! Te esperamos en la barbería.",
      );
    } catch (error) {
      console.log(error);

      if (error.response) {
        setMensaje(error.response.data.message);
      } else {
        setMensaje("Error al reservar el turno");
      }
    }
  };
  const handleEliminar = async (id) => {
    try {
      await eliminarTurno(id);
      await cargarTurnos();
    } catch (error) {
      console.log(error);
      setMensaje("Error al eliminar turno");
    }
  };

  const handleEditar = (turno) => {
    setModoEdicion(true);
    setIdEditando(turno._id);

    setNombre(turno.nombre);
    setTelefono(turno.telefono);
    setServicio(turno.servicio?._id || turno.servicio);
    setBarbero(turno.barbero);
    setFecha(turno.fecha);
    setHora(turno.hora);
  };

  return (
    <>
      <Navbar />

      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#111",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <div className="container">
          <h1
            className="text-center fw-bold mb-5"
            style={{
              color: "#2E8B4D",
              fontSize: "2.8rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {modoEdicion ? "Editar Turno ✏️" : "Reservar Turno 💈"}
          </h1>
          <div
            className="card bg-dark text-white shadow-lg p-4 mb-5"
            style={{
              border: "2px solid #2E8B4D",
              borderRadius: "20px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ""))}
                required
              />

              <select
                className="form-control mb-3"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                required
              >
                {servicios.map((s) => (
                  <option key={s._id} value={s._id}>
                    {s.nombre}
                  </option>
                ))}
              </select>

              <select
                className="form-control mb-3"
                value={barbero}
                onChange={(e) => setBarbero(e.target.value)}
              >
                <option>Juan Pérez</option>
                <option>Carlos Gómez</option>
                <option>Lucas Fernández</option>
                <option>Martín Rodríguez</option>
                <option>Nicolás Díaz</option>
                <option>Facundo López</option>
              </select>

              <input
                type="date"
                className="form-control mb-3"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />

              <input
                type="time"
                className="form-control mb-4"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                required
              />
              {errorFecha && (
                <div className="alert alert-warning text-center">
                  {errorFecha}
                </div>
              )}
              {mensaje && (
                <div
                  className={`alert text-center ${
                    mensaje.startsWith("✅") ? "alert-success" : "alert-danger"
                  }`}
                >
                  {mensaje}
                </div>
              )}
              <button
                type="submit"
                className="btn w-100 fw-bold text-white"
                style={{
                  backgroundColor: "#2E8B4D",
                  border: "none",
                }}
              >
                {modoEdicion ? "Actualizar Turno" : "Reservar Turno"}
              </button>
            </form>
          </div>
          <h2 className="fw-bold mb-4" style={{ color: "#2E8B4D" }}>
            Turnos Reservados
          </h2>

          {turnos.length === 0 ? (
            <div className="text-center py-5">
              <h3>📭 No hay turnos registrados</h3>
              <p className="text-secondary">
                Los turnos reservados aparecerán aquí.
              </p>
            </div>
          ) : (
            <div className="row">
              {turnos.map((turno) => (
                <div className="col-md-6 mb-4" key={turno._id}>
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
                        <strong>💈 Servicio:</strong> {turno.servicio?.nombre}
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

                      <hr />

                      {usuario && (
                        <div className="d-flex gap-2">
                          <button
                            className="btn text-white"
                            style={{
                              backgroundColor: "#2E8B4D",
                              border: "none",
                            }}
                            onClick={() => handleEditar(turno)}
                          >
                            ✏️ Editar
                          </button>

                          <button
                            className="btn btn-danger"
                            onClick={() => handleEliminar(turno._id)}
                          >
                            🗑️ Eliminar
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TurnosPage;
