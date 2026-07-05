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

  //  estado edición
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  //  cargar turnos
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

  //  crear o editar turno
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

  //  eliminar turno
  const handleEliminar = async (id) => {
    try {
      await eliminarTurno(id);
      setTurnos((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  //  iniciar edición
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

      <div className="container mt-5">
        <h1 className="text-center mb-4">
          {modoEdicion ? "Editar Turno ✏️" : "Reservar Turno 💈"}
        </h1>

        {/* FORMULARIO */}
        <form className="card p-4 shadow" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            className="form-control mb-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Teléfono"
            className="form-control mb-2"
            value={telefono}
            onChange={(e) =>
              setTelefono(e.target.value.replace(/\D/g, ""))
            }
            minLength={5}
            maxLength={20}
            required
          />

          <select
            className="form-control mb-2"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option>Corte Clásico</option>
            <option>Barba</option>
            <option>Corte + Barba</option>
          </select>

          <input
            type="date"
            className="form-control mb-2"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />

          <input
            type="time"
            className="form-control mb-3"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />

          <button className="btn btn-warning w-100">
            {modoEdicion ? "Actualizar Turno" : "Reservar"}
          </button>
        </form>

        {/* LISTA DE TURNOS */}
        <div className="mt-5">
          <h2>Turnos Reservados</h2>

          {turnos.length === 0 ? (
            <p>No hay turnos aún</p>
          ) : (
            turnos.map((turno) => (
              <div key={turno._id} className="card p-3 mb-2">
                <h5>{turno.nombre}</h5>

                <p>
                  {turno.servicio} | {turno.fecha} | {turno.hora}
                </p>

                <button
                  className="btn btn-primary me-2"
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
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TurnosPage;