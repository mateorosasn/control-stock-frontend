import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Nosotros() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1
          className="text-center mb-5 fw-bold"
          style={{ color: "#2E8B4D" }}
        >
          ¿Por qué elegir Barbería Premium? 💈
        </h1>

        <div className="card shadow p-5">
          <h3>Nuestra historia</h3>

          <p>
            Barbería Premium nació con el objetivo de ofrecer mucho más que un
            corte de cabello. Buscamos brindar una experiencia única donde cada
            cliente se sienta cómodo y salga con la mejor versión de sí mismo.
          </p>

          <h3 className="mt-4">¿Qué nos diferencia?</h3>

          <ul>
            <li>✔ Más de 10 años de experiencia.</li>
            <li>✔ Barberos especializados.</li>
            <li>✔ Productos profesionales.</li>
            <li>✔ Atención personalizada.</li>
            <li>✔ Miles de clientes satisfechos.</li>
            <li>✔ Cortes clásicos y modernos.</li>
          </ul>

          <h3 className="mt-4">Nuestros logros</h3>

          <p>
            Durante estos años hemos atendido a cientos de clientes,
            perfeccionando nuestras técnicas y manteniéndonos siempre
            actualizados con las últimas tendencias de barbería.
          </p>

          <h3 className="mt-4">Nuestra misión</h3>

          <p>
            Brindar el mejor servicio posible con calidad, puntualidad y un trato
            cercano para que cada visita sea una excelente experiencia.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Nosotros;