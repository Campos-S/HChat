import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hormiga Chat</span>
        <span className="title">Inicia sesión</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
          <button>Inicia sesión</button>
          {err && <span>Algo salio mal</span>}
        </form>
        <p>¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>
      </div>
    </div>
  );
};

export default Login;
