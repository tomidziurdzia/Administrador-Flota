import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from "axios";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
      return;
    }

    try {
      //TODO: mover a axios
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password`,
        { email }
      );

      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-primary-blue font-black text-center text-2xl md:text-4xl">
        Recuperar Usuario
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="my-5 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
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
        <input
          type="submit"
          value="Recuperar Usuario"
          className="bg-primary-blue text-white w-full py-3 font-bold rounded hover:cursor-pointer hover:bg-hover-button transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link className="block text-center my-5 text-gray-500 text-sm" to="/">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
        <Link
          className="block text-center my-5 text-gray-500 text-sm"
          to="/registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
};

export default OlvidePassword;
