import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
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

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav me-auto">

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

          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Buscar..."
            />
          </form>

          <Link to="/login" className="btn btn-outline-light me-2">
            Iniciar Sesión
          </Link>

          <Link to="/register" className="btn btn-warning">
            Registrarse
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;