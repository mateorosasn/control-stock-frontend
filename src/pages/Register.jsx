import { useState } from "react";
import { registrar } from "../services/auth.service";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrarUsuario = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await registrar({
        nombre,
        email,
        password,
      });

      alert(respuesta.data.message);

      setNombre("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "Error al registrar");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Registrarse</h1>

      <form onSubmit={registrarUsuario}>

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-success" type="submit">
          Registrarse
        </button>

      </form>
    </div>
  );
}

export default Register;