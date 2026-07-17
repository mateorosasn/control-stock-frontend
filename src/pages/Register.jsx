import { useState } from "react";
import { registrar } from "../services/auth.service";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const registrarUsuario = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await registrar({
        nombre,
        email,
        password,
      });

      setMensaje("✅ Usuario registrado correctamente.");

      setNombre("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      setMensaje(error.response?.data?.message || "Error al registrar.");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center position-relative"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,.80), rgba(0,0,0,.80)), url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link
        to="/"
        className="btn position-absolute top-0 start-0 m-4 text-white"
        style={{
          backgroundColor: "#2E8B4D",
          border: "none",
        }}
      >
        ← Volver al Inicio
      </Link>

      <div
        className="card shadow-lg p-5 bg-dark text-white"
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "20px",
          border: "2px solid #2E8B4D",
        }}
      >
        <div className="text-center mb-4">
          <h1>💈</h1>

          <h2 className="fw-bold" style={{ color: "#2E8B4D" }}>
            Crear Cuenta
          </h2>

          <p className="text-light">Registrate para reservar tus turnos</p>
        </div>
        <form onSubmit={registrarUsuario}>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#2E8B4D" }}>
              Nombre
            </label>

            <input
              className="form-control"
              type="text"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#2E8B4D" }}>
              Correo electrónico
            </label>

            <input
              className="form-control"
              type="email"
              placeholder="Ingrese su correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#2E8B4D" }}>
              Contraseña
            </label>

            <input
              className="form-control"
              type={mostrarPassword ? "text" : "password"}
              placeholder="Ingrese una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="mostrarPassword"
              checked={mostrarPassword}
              onChange={() => setMostrarPassword(!mostrarPassword)}
            />

            <label className="form-check-label" htmlFor="mostrarPassword">
              Mostrar contraseña
            </label>
          </div>

          {mensaje && (
            <div className="alert alert-info text-center">{mensaje}</div>
          )}

          <button
            className="btn w-100 fw-bold text-white"
            style={{
              backgroundColor: "#2E8B4D",
              border: "none",
            }}
            type="submit"
          >
            Registrarse
          </button>
        </form>
        <hr style={{ borderColor: "#2E8B4D" }} />
        <div className="text-center">
          <small className="text-light">¿Ya tenés una cuenta?</small>

          <br />

          <Link
            to="/login"
            className="fw-bold text-decoration-none"
            style={{ color: "#2E8B4D" }}
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
