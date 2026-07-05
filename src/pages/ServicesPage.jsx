import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function ServicesPage() {
  const [servicios, setServicios] = useState([]);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const obtenerServicios = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/servicios");
      setServicios(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const crearServicio = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/servicios", {
        nombre,
        descripcion,
        precio,
      });

      alert("Servicio creado correctamente");

      setNombre("");
      setDescripcion("");
      setPrecio("");

      obtenerServicios();
    } catch (error) {
      console.log(error);
      alert("Error al crear el servicio");
    }
  };

  useEffect(() => {
    obtenerServicios();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1 className="text-center mb-5">Nuestros Servicios 💈</h1>

        {localStorage.getItem("admin") && (
          <form onSubmit={crearServicio} className="mb-5">
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Nombre del servicio"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <input
              className="form-control mb-2"
              type="text"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />

            <input
              className="form-control mb-3"
              type="number"
              placeholder="Precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />

            <button className="btn btn-success" type="submit">
              Agregar Servicio
            </button>
          </form>
        )}

        <div className="row">
          {servicios.length === 0 ? (
            <p className="text-center">No hay servicios disponibles</p>
          ) : (
            servicios.map((s) => (
              <div className="col-md-4 mb-3" key={s._id}>
                <div className="card p-3 shadow">
                  <h3>{s.nombre}</h3>
                  <p>{s.descripcion}</p>
                  <p className="fw-bold">${s.precio}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ServicesPage;
