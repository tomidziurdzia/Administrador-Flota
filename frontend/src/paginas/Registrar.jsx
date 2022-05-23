import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-primary-blue font-black text-center text-2xl md:text-4xl">
        Crear Cuenta
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        onSubmit={handleSubmit}
        className="my-5 bg-white shadow rounded-lg p-10"
      >
        <div className="my-5">
          <label
            className="text-gray-500 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre y Apellido
          </label>
          <input
            className="w-full mt-2 p-3 border rounded-xl"
            id="nombre"
            type="text"
            placeholder="Tu nombre y apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="text-gray-500 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full mt-2 p-3 border rounded-xl"
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-8 my-5">
          <label
            className="text-gray-500 block text-xl font-bold"
            htmlFor="contraseña"
          >
            Contraseña
          </label>
          <input
            className="w-full mt-2 p-3 border rounded-xl"
            id="contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-8 my-5">
          <label
            className="text-gray-500 block text-xl font-bold"
            htmlFor="repetir-contraseña"
          >
            Repetir Contraseña
          </label>
          <input
            className="w-full mt-2 p-3 border rounded-xl"
            id="repetir-contraseña"
            type="password"
            placeholder="Repite tu contraseña"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Registrar"
          className="bg-primary-blue text-white w-full py-3 font-bold rounded hover:cursor-pointer hover:bg-hover-button transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link className="block text-center my-5 text-gray-500 text-sm" to="/">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
        <Link
          className="block text-center my-5 text-gray-500 text-sm"
          to="/olvide-password"
        >
          Olvide mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
