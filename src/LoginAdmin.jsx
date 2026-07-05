import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 🟢 Si ya está logueado, no vuelve al login
  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (admin) {
      navigate("/admin");
    }
  }, []);

  // 🔐 login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          usuario,
          password,
        }
      );

      // guardar sesión
      localStorage.setItem(
        "admin",
        JSON.stringify(res.data)
      );

      navigate("/admin");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Error en el login"
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 mx-auto">

        <h2 className="text-center">
          Login Admin 💈
        </h2>

        <form onSubmit={handleLogin} className="card p-4">

          <input
            placeholder="Usuario"
            className="form-control mb-2"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="form-control mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-danger text-center">
              {error}
            </p>
          )}

          <button className="btn btn-dark w-100">
            Iniciar sesión
          </button>

        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;