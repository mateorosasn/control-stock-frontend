import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const admin = localStorage.getItem("admin");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const cerrarSesion = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return ( <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-lg">
      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-3"
          style={{ color: "#2E8B4D" }}
          to="/"
        >
          💈 Barbería Premium
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/servicios">
                Servicios
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/turnos">
                Reservas
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/barberos">
                Barberos
              </Link>
            </li>

          </ul>

          {admin ? (
            <>
              <Link
                to="/admin"
                className="btn text-white me-2"
                style={{ backgroundColor: "#2E8B4D", border: "none" }}
              >
                Panel Admin
              </Link>

              <button
                className="btn btn-danger"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </>
          ) : usuario ? (
            <>
              <span className="text-white me-3 fw-bold">
                👤 Hola, {usuario.nombre}
              </span>

              <button
                className="btn btn-danger"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline-light me-2"
              >
                Iniciar Sesión
              </Link>

              <Link
                to="/register"
                className="btn text-white"
                style={{ backgroundColor: "#2E8B4D", border: "none" }}
              >
                Registrarse
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;