import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function ServicesPage() {
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
          <p
            className="lead mb-4"
            style={{
              color: "white",
            }}
          >
            <img
              src="   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Saupkev_2gvfJwmyWFscAzW4FXJDnnGYJsOZ81CLfw&s=10            "
              alt="Error 404"
              style={{
                width: "450px",
                marginBottom: "50px",
              }}
            />
            <h2
              className="fw-bold mb-3 text center "
              style={{
                color: "#2E8B4D",
              }}
            >
              Página no encontrada
            </h2>
          </p>

          <Link
            to="/"
            className="btn btn-lg text-white fw-bold"
            style={{
              backgroundColor: "#2E8B4D",
              borderRadius: "10px",
              padding: "12px 35px",
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

export default ServicesPage;
