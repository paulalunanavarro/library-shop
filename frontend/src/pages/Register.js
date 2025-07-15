import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/register/", form);
      alert("Registro exitoso, ahora puedes iniciar sesión");
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Error al registrarse");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input name="username" placeholder="Usuario" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Correo electrónico" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
    </form>
  );
}
