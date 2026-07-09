import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">

        <div className="row">

          <div className="col-md-4">
            <h4 style={{ color: "#2E8B4D" }}>
              💈 Barbería Premium
            </h4>

            <p>
              Los mejores cortes clásicos y modernos,
              con atención personalizada y profesionales
              de primer nivel.
            </p>
          </div>


          <div className="col-md-4">
            <h4 style={{ color: "#2E8B4D" }}>
              📍 Contacto
            </h4>

            <p>
              San Miguel de Tucumán
            </p>

            <p>
              📞 +54 381 123-4567
            </p>

            <p>
              ✉️ barberiapremium@gmail.com
            </p>
          </div>


          <div className="col-md-4">

            <h4 style={{ color: "#2E8B4D" }}>
              🔗 Enlaces
            </h4>


            <p>
              <Link
                to="/"
                className="text-white text-decoration-none"
              >
                Inicio
              </Link>
            </p>


            <p>
              <Link
                to="/servicios"
                className="text-white text-decoration-none"
              >
                Servicios
              </Link>
            </p>


            <p>
              <Link
                to="/turnos"
                className="text-white text-decoration-none"
              >
                Reservar Turno
              </Link>
            </p>


            <p>
              <Link
                to="/error404"
                className="text-white text-decoration-none"
              >
                Sobre Nosotros
              </Link>
            </p>


          </div>

        </div>


        <hr className="border-light" />


        <div className="text-center">

          <p className="mb-1">
            © 2026 Barbería Premium - Todos los derechos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;