import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenida a la tienda de papelería 🛍️</h1>
      <Link to="/login">Iniciar sesión</Link> |{" "}
      <Link to="/register">Registrarse</Link>
    </div>
  );
}

