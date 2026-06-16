import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {

  return (

    <>

      <Navbar />

      <div className="container mt-5">

        <div className="text-center">

          <h1>Bienvenido a Barbería Premium 💈</h1>

          <p>
            Los mejores cortes clásicos y modernos.
          </p>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default HomePage;