import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div
        className="text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h1
            className="display-2 fw-bold"
            style={{ color: "#2E8B4D" }}
          >
            💈 Barbería Premium
          </h1>

          <p className="lead mt-3 mb-4">
            Estilo, elegancia y precisión en cada corte.
          </p>

          <Link
            to="/turnos"
            className="btn btn-lg text-white me-3"
            style={{ backgroundColor: "#2E8B4D" }}
          >
            Reservar Turno
          </Link>

          <Link
            to="/servicios"
            className="btn btn-lg"
            style={{
              border: "2px solid #2E8B4D",
              color: "#2E8B4D",
              backgroundColor: "white",
            }}
          >
            Ver Servicios
          </Link>
        </div>
      </div>

      {/* ¿POR QUÉ ELEGIRNOS? */}
      <div className="container my-5">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "#2E8B4D",
            fontSize: "2.5rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          ¿Por qué elegir Barbería Premium?
        </h2>

        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div
              className="card shadow h-100 p-4"
              style={{ border: "2px solid #2E8B4D" }}
            >
              <h2>✂️</h2>
              <h4 style={{ color: "#2E8B4D" }}>Cortes Modernos</h4>
              <p>
                Trabajamos con las últimas tendencias y estilos clásicos.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card shadow h-100 p-4"
              style={{ border: "2px solid #2E8B4D" }}
            >
              <h2>🧔</h2>
              <h4 style={{ color: "#2E8B4D" }}>Barba Premium</h4>
              <p>
                Perfilado y cuidado con productos profesionales.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card shadow h-100 p-4"
              style={{ border: "2px solid #2E8B4D" }}
            >
              <h2>⭐</h2>
              <h4 style={{ color: "#2E8B4D" }}>
                Atención Personalizada
              </h4>
              <p>
                Cada cliente recibe un servicio único.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card shadow h-100 p-4"
              style={{ border: "2px solid #2E8B4D" }}
            >
              <h2>🕒</h2>
              <h4 style={{ color: "#2E8B4D" }}>Puntualidad</h4>
              <p>
                Respetamos el horario de cada turno para evitar esperas.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card shadow h-100 p-4"
              style={{ border: "2px solid #2E8B4D" }}
            >
              <h2>🧴</h2>

              <h4 style={{ color: "#2E8B4D" }}>
                Productos Profesionales
              </h4>

              <p>
                Utilizamos productos de calidad para cuidar tu estilo.
              </p>
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div
              className="card shadow h-100 p-4"
              style={{ border: "2px solid #2E8B4D" }}
            >
              <h2>🏆</h2>

              <h4 style={{ color: "#2E8B4D" }}>
                Barberos Expertos
              </h4>

              <p>
                Profesionales capacitados para lograr el mejor resultado.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* EQUIPO */}
      <div className="container my-5">

        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "#2E8B4D",
            fontSize: "2.5rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Conocé a Nuestro Equipo 💈
        </h2>


        <div className="row">


          <div className="col-md-4 mb-4">
            <div
              className="card shadow text-center"
              style={{ border: "2px solid #2E8B4D" }}
            >

              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="Barbero"
              />

              <div className="card-body">
                <h5 style={{ color: "#2E8B4D" }}>
                  Juan Pérez
                </h5>

                <p>
                  Especialista en Fade.
                </p>
              </div>

            </div>
          </div>



          <div className="col-md-4 mb-4">
            <div
              className="card shadow text-center"
              style={{ border: "2px solid #2E8B4D" }}
            >

              <img
                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="Barbero"
              />

              <div className="card-body">

                <h5 style={{ color: "#2E8B4D" }}>
                  Carlos Gómez
                </h5>

                <p>
                  Especialista en Barba.
                </p>

              </div>

            </div>
          </div>




          <div className="col-md-4 mb-4">
            <div
              className="card shadow text-center"
              style={{ border: "2px solid #2E8B4D" }}
            >

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="Barbero"
              />


              <div className="card-body">

                <h5 style={{ color: "#2E8B4D" }}>
                  Lucas Díaz
                </h5>

                <p>
                  Especialista en Estilos Modernos.
                </p>

              </div>

            </div>
          </div>




          <div className="col-md-4 mb-4">
            <div
              className="card shadow text-center"
              style={{ border: "2px solid #2E8B4D" }}
            >

              <img
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="Barbero"
              />

              <div className="card-body">

                <h5 style={{ color: "#2E8B4D" }}>
                  Matías López
                </h5>

                <p>
                  Especialista en Afeitado Tradicional.
                </p>

              </div>

            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card shadow text-center"
              style={{ border: "2px solid #2E8B4D" }}
            >

              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="Barbero"
              />

              <div className="card-body">

                <h5 style={{ color: "#2E8B4D" }}>
                  Franco Ruiz
                </h5>

                <p>
                  Especialista en Cortes Clásicos.
                </p>

              </div>

            </div>
          </div>




          <div className="col-md-4 mb-4">
            <div
              className="card shadow text-center"
              style={{ border: "2px solid #2E8B4D" }}
            >

              <img
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="Barbero"
              />

              <div className="card-body">

                <h5 style={{ color: "#2E8B4D" }}>
                  Agustín Sosa
                </h5>

                <p>
                  Especialista en Diseños Personalizados.
                </p>

              </div>

            </div>
          </div>


        </div>

      </div>



      {/* CTA FINAL */}

      <div className="bg-dark text-white py-5">

        <div className="container text-center">

          <h2
            className="fw-bold"
            style={{ color: "#2E8B4D" }}
          >
            ¿Listo para un nuevo look?
          </h2>


          <p className="mb-4">
            Reservá tu turno en menos de un minuto.
          </p>


          <Link
            to="/turnos"
            className="btn btn-lg text-white"
            style={{
              backgroundColor: "#2E8B4D",
            }}
          >
            Reservar Ahora
          </Link>


        </div>

      </div>


      <Footer />

    </>
  );
}

export default HomePage;