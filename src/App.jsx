import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [turnos, setTurnos] = useState([]);
  const [cliente, setCliente] = useState("");
  const [servicio, setServicio] = useState("");

  // Obtener turnos
  const obtenerTurnos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/turnos");
      setTurnos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerTurnos();
  }, []);

  // Crear turno
  const crearTurno = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/turnos", {
        cliente,
        servicio,
      });

      setCliente("");
      setServicio("");

      obtenerTurnos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Barbería 💈</h1>

      <form onSubmit={crearTurno}>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Servicio"
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Crear turno</button>
      </form>

      <hr />

      <h2>Turnos</h2>

      {turnos.map((turno) => (
        <div key={turno._id}>
          <h3>{turno.cliente}</h3>
          <p>{turno.servicio}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
