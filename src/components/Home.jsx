import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container text-center">

        <h1 className="display-2 fw-bold">
          Barbería Premium 💈
        </h1>

        <p className="lead mt-3">
          Elegancia, estilo y tradición en cada corte.
        </p>

        <div className="mt-4">

          <Link
            to="/turnos"
            className="btn btn-warning btn-lg me-3"
          >
            Reservar Turno
          </Link>

          <Link
            to="/servicios"
            className="btn btn-outline-light btn-lg"
          >
            Ver Servicios
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Hero;