import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Error404() {
  return (
    <>
      <Navbar />

      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          minHeight: "80vh",
          backgroundColor: "#111",
          color: "white",
        }}
      >
        <div className="text-center">

          <div
            style={{
              fontSize: "90px",
            }}
          >
            🦖 ❌
          </div>

          <h1
            className="fw-bold"
            style={{
              fontSize: "7rem",
              color: "#2E8B4D",
            }}
          >
            404
          </h1>


          <h2
            className="fw-bold mb-3"
            style={{
              color: "#2E8B4D",
            }}
          >
            Página no encontrada
          </h2>


          <p className="lead mb-4">
            Nuestro dinosaurio no encontró esta sección 💈
          </p>


          <Link
            to="/"
            className="btn text-white fw-bold"
            style={{
              backgroundColor: "#2E8B4D",
              padding: "12px 35px",
              borderRadius: "10px",
            }}
          >
            Volver al inicio
          </Link>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Error404;