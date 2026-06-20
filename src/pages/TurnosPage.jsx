import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TurnosPage() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1 className="text-center">Reservar Turno 💈</h1>

        <form className="mt-4">
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Nombre"
          />

          <input
            className="form-control mb-3"
            type="date"
          />

          <input
            className="form-control mb-3"
            type="time"
          />

          <button className="btn btn-dark w-100">
            Reservar Turno
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default TurnosPage;