function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h4>💈 Barbería Premium</h4>
            <p>
              Los mejores cortes clásicos y modernos, con atención personalizada
              y profesionales de primer nivel.
            </p>
          </div>

          <div className="col-md-4">
            <h4>📍 Contacto</h4>

            <p>San Miguel de Tucumán</p>

            <p>📞 +54 381 123-4567</p>

            <p>✉️ barberiapremium@gmail.com</p>
          </div>

          <div className="col-md-4">
            <h4>🔗 Enlaces</h4>

            <p>Inicio</p>

            <p>Servicios</p>

            <p>Reservar Turno</p>

            <p>Sobre Nosotros</p>

            <p>Política de Privacidad</p>
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
