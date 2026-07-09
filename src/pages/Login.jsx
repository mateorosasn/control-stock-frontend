import { useState } from "react";
import { login } from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await login({
        email,
        password,
      });

      alert(respuesta.data.message);

      //  Usuario que inició sesión
      localStorage.setItem(
        "usuario",
        JSON.stringify(respuesta.data.usuario)
      );

      //  administrador
      console.log(respuesta.data.usuario);
      if (respuesta.data.usuario.role === "admin") {
        localStorage.setItem("admin", "true");
        navigate("/admin");
      } else {
        // Usuario común
        localStorage.removeItem("admin");
        navigate("/");
      }

    } catch (error) {
      alert(error.response?.data?.message || "Error al iniciar sesión");
    }
  };

  return (<div
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
          maxWidth: "450px",
          width: "100%",
          borderRadius: "20px",
          border: "2px solid #2E8B4D",
        }}
      >
        <div className="text-center mb-4">
          <h1>💈</h1>

          <h2
            className="fw-bold"
            style={{ color: "#2E8B4D" }}
          >
            Barbería Premium
          </h2>

          <p className="text-light">
            Iniciá sesión para administrar la barbería
          </p>
        </div>

        <form onSubmit={iniciarSesion}>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#2E8B4D" }}
            >
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
            <label
              className="form-label"
              style={{ color: "#2E8B4D" }}
            >
              Contraseña
            </label>

            <input
              className="form-control"
              type={mostrarPassword ? "text" : "password"}
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="mostrar"
              checked={mostrarPassword}
              onChange={() => setMostrarPassword(!mostrarPassword)}
            />

            <label className="form-check-label" htmlFor="mostrar">
              Mostrar contraseña
            </label>
          </div>

          <button
            className="btn w-100 fw-bold text-white"
            style={{
              backgroundColor: "#2E8B4D",
              border: "none",
            }}
            type="submit"
          >
            Ingresar
          </button>
        </form>

        <hr style={{ borderColor: "#2E8B4D" }} />

        <div className="text-center">
          <small className="text-light">
            ¿No tenés una cuenta?
          </small>

          <br />

          <Link
            to="/register"
            className="fw-bold text-decoration-none"
            style={{ color: "#2E8B4D" }}
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;