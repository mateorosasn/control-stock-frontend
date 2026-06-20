import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold">
            Barbería Premium 💈
          </h1>

          <p className="lead">
            Estilo, elegancia y los mejores cortes para vos.
          </p>

          <button className="btn btn-dark btn-lg mt-3">
            Reservar Turno
          </button>
        </div>

        <div className="row text-center">

          <div className="col-md-4">
            <h3>✂️ Cortes</h3>
            <p>
              Clásicos y modernos realizados por profesionales.
            </p>
          </div>

          <div className="col-md-4">
            <h3>🧔 Barba</h3>
            <p>
              Perfilado y arreglo completo con productos premium.
            </p>
          </div>

          <div className="col-md-4">
            <h3>🔥 Estilo</h3>
            <p>
              Asesoramiento personalizado para tu imagen.
            </p>
          </div>
          <hr className="my-5" />

<h2 className="text-center mb-4">
  Nuestros Barberos ✂️
</h2>

<div className="row">

  <div className="col-md-4">
    <div className="card shadow text-center p-3">
      <img
        src="https://via.placeholder.com/250"
        className="card-img-top"
        
      />

      <div className="card-body">
        <h5>Juan Pérez</h5>
        <p>Especialista en Fade.</p>
      </div>
    </div>
  </div>
  

  <div className="col-md-4">
    <div className="card shadow text-center p-3">
      <img
        src="https://via.placeholder.com/250"
        className="card-img-top"
       
      />

      <div className="card-body">
        <h5>Carlos Gómez</h5>
        <p>Especialista en Barba.</p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card shadow text-center p-3">
      <img
        src="https://via.placeholder.com/250"
        className="card-img-top"
        
      />

      <div className="card-body">
        <h5>Lucas Díaz</h5>
        <p>Especialista en estilos modernos.</p>
      </div>
    </div>
  </div>

</div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default HomePage;