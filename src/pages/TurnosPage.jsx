import { useState, useEffect } from "react";
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
  const [servicio, setServicio] = useState("Corte Clásico");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [turnos, setTurnos] = useState([]);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const cargarTurnos = async () => {
    try {
      const res = await obtenerTurnos();
      setTurnos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarTurnos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (modoEdicion) {
        await actualizarTurno(idEditando, {
          nombre,
          telefono,
          servicio,
          fecha,
          hora,
        });

        setModoEdicion(false);
        setIdEditando(null);
      } else {
        await crearTurno({
          nombre,
          telefono,
          servicio,
          fecha,
          hora,
        });
      }

      await cargarTurnos();

      setNombre("");
      setTelefono("");
      setServicio("Corte Clásico");
      setFecha("");
      setHora("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await eliminarTurno(id);
      setTurnos((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditar = (turno) => {
    setModoEdicion(true);
    setIdEditando(turno._id);

    setNombre(turno.nombre);
    setTelefono(turno.telefono);
    setServicio(turno.servicio);
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
            style={{ border: "2px solid #2E8B4D" }}
          >
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Nombre"
                className="form-control mb-3"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="form-control mb-3"
                value={telefono}
                onChange={(e) =>
                  setTelefono(e.target.value.replace(/\D/g, ""))
                }
                required
              />

              <select
                className="form-control mb-3"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
              >
                <option>Corte Clásico</option>
                <option>Barba</option>
                <option>Corte + Barba</option>
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

              <button
                className="btn w-100 fw-bold text-white"
                style={{ backgroundColor: "#2E8B4D" }}
              >
                {modoEdicion ? "Actualizar Turno" : "Reservar Turno"}
              </button>

            </form>
          </div>

          <h2
            className="fw-bold mb-4"
            style={{ color: "#2E8B4D" }}
          >
            Turnos Reservados
          </h2>

          {turnos.length === 0 ? (
            <p>No hay turnos registrados.</p>
          ) : (
            <div className="row">
              {turnos.map((turno) => (
                <div className="col-md-6 mb-4" key={turno._id}>
                  <div
                    className="card shadow-lg h-100"
                    style={{ border: "2px solid #2E8B4D" }}
                  >
                    <div className="card-body">

                      <h4
                        className="fw-bold"
                        style={{ color: "#2E8B4D" }}
                      >
                        {turno.nombre}
                      </h4>

                      <p>
                        <strong>📞 Teléfono:</strong> {turno.telefono}
                      </p>

                      <p>
                        <strong>💈 Servicio:</strong> {turno.servicio}
                      </p>

                      <p>
                        <strong>📅 Fecha:</strong> {turno.fecha}
                      </p>

                      <p>
                        <strong>🕒 Hora:</strong> {turno.hora}
                      </p>

                      <button
                        className="btn me-2 text-white"
                        style={{ backgroundColor: "#2E8B4D" }}
                        onClick={() => handleEditar(turno)}
                      >
                        Editar
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => handleEliminar(turno._id)}
                      >
                        Eliminar
                      </button>

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