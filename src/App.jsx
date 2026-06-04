import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [productos, setProductos] = useState([]);

  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

  const [editandoId, setEditandoId] = useState(null);
const [busqueda, setBusqueda] = useState("");
  const obtenerProductos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/productos");
      setProductos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const guardarProducto = async (e) => {
    e.preventDefault();

    try {
      if (editandoId) {
        await axios.put(
          `http://localhost:3000/api/productos/${editandoId}`,
          {
            nombre,
            stock,
            descripcion,
            categoria,
          }
        );

        setEditandoId(null);
      } else {
        await axios.post("http://localhost:3000/api/productos", {
          nombre,
          stock,
          descripcion,
          categoria,
        });
      }

      setNombre("");
      setStock("");
      setDescripcion("");
      setCategoria("");

      obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/productos/${id}`
      );

      obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const editarProducto = (producto) => {
    setNombre(producto.nombre);
    setStock(producto.stock);
    setDescripcion(producto.descripcion);
    setCategoria(producto.categoria);

    setEditandoId(producto._id);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">
          Control de Stock 📦
        </h1>

        <form onSubmit={guardarProducto}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del producto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Categoría"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            {editandoId
              ? "Actualizar Producto"
              : "Guardar Producto"}
          </button>
        </form>
      </div>

      <h2 className="mt-5 mb-3">Productos</h2>
      <div className="mb-3">
  <input
    type="text"
    className="form-control"
    placeholder="Buscar producto..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
  />
</div>

      <div className="row">
        {productos.map((producto) => (
          <div
            key={producto._id}
            className="col-md-4 mb-3"
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {producto.nombre}
                </h5>

                <p className="card-text">
                  <strong>Stock:</strong>{" "}
                  {producto.stock}
                </p>

                <p className="card-text">
                  <strong>Descripción:</strong>{" "}
                  {producto.descripcion}
                </p>

                <p className="card-text">
                  <strong>Categoría:</strong>{" "}
                  {producto.categoria}
                </p>

                <button
                  className="btn btn-warning me-2"
                  onClick={() =>
                    editarProducto(producto)
                  }
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    eliminarProducto(producto._id)
                  }
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;