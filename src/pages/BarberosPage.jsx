import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BarberosPage() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center mb-4">
          Nuestros Barberos 💈
        </h1>

        <div className="row">

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h3>Juan</h3>
              <p>Especialista en Fade</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h3>Pedro</h3>
              <p>Especialista en Barba</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h3>Lucas</h3>
              <p>Especialista en Cortes Clásicos</p>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default BarberosPage;