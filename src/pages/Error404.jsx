import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Error404() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios.get("https://barberia-backend-p48g.onrender.com").catch((error) => {
      setMensaje(error.response.data.message);
    });
  }, []);
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
          <img
            src="   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Saupkev_2gvfJwmyWFscAzW4FXJDnnGYJsOZ81CLfw&s=10            "
            alt="Error 404"
            style={{
              width: "450px",
              marginBottom: "50px",
            }}
          />

          <h2
            className="fw-bold mb-3"
            style={{
              color: "#2E8B4D",
            }}
          >
            Página no encontrada
          </h2>

          <p className="lead mb-4">
            {mensaje ||
              "Parece que esta seccion todavia no existe en nuestra barberia"}
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
