import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center mb-5">
          Nuestros Servicios 💈
        </h1>

        <div className="row">

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h3>Corte Clásico</h3>
              <p>$10.000</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h3>Corte + Barba</h3>
              <p>$15.000</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h3>Perfilado de Barba</h3>
              <p>$8.000</p>
            </div>
          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default ServicesPage;