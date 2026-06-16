import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          💈 Barbería
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/reserva">
            Reservar
          </Link>

          <Link className="nav-link" to="/login">
            Iniciar Sesión
          </Link>

          <Link className="nav-link" to="/register">
            Registrarse
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;