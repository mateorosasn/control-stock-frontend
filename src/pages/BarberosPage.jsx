import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BarberosPage() {
  const barberos = [
    { nombre: "Juan Pérez", especialidad: "Especialista en Fade" },
    { nombre: "Carlos Gómez", especialidad: "Especialista en Barba" },
    { nombre: "Lucas Díaz", especialidad: "Cortes Modernos" },
    { nombre: "Matías López", especialidad: "Afeitado Tradicional" },
    { nombre: "Franco Ruiz", especialidad: "Cortes Clásicos" },
    { nombre: "Agustín Sosa", especialidad: "Diseños Personalizados" },
    { nombre: "Nicolás Fernández", especialidad: "Coloración Capilar" },
    { nombre: "Tomás Romero", especialidad: "Perfilado de Barba" },
    { nombre: "Facundo Martínez", especialidad: "Cortes para Niños" },
    { nombre: "Santiago Morales", especialidad: "Asesor de Imagen" },
    { nombre: "Gabriel Herrera", especialidad: "Cortes Urbanos" },
    { nombre: "Bruno Álvarez", especialidad: "Fade y Barba Premium" },
  ];

  const imagenes = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <>
      <Navbar />

      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#111",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <h1
            className="text-center fw-bold mb-5"
            style={{
              color: "#2E8B4D",
              textTransform: "uppercase",
            }}
          >
            Nuestro Equipo 💈
          </h1>

          <div className="row">
            {barberos.map((barbero, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card shadow-lg h-100">
                  <img
                    src={imagenes[index]}
                    className="card-img-top"
                    style={{
                      height: "320px",
                      objectFit: "cover",
                    }}
                    alt={barbero.nombre}
                  />

                  <div className="card-body text-center">
                    <h4 style={{ color: "#2E8B4D" }}>
                      {barbero.nombre}
                    </h4>

                    <p className="text-muted">
                      {barbero.especialidad}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default BarberosPage;