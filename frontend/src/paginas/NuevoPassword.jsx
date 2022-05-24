import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [passwordModificado, setPasswordModificado] = useState(false);

  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { token } = params;

  const navigate = useNavigate();

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`usuarios/olvide-password/${token}`);
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };

    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no coinciden",
        error: true,
      });
      return;
    }

    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });

      setAlerta({ msg: data.msg, error: false });
      setPassword("");
      setRepetirPassword("");
      setPasswordModificado(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-primary-blue font-black text-center text-2xl md:text-4xl">
        Reestablecer Contraseña
      </h1>
      {msg && <Alerta alerta={alerta} />}
      {tokenValido && (
        <form
          className="my-5 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}
        >
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
            value="Reestablecer Contraseña"
            className="bg-primary-blue text-white w-full py-3 font-bold rounded hover:cursor-pointer hover:bg-hover-button transition-colors"
          />
        </form>
      )}
      {passwordModificado && (
        <Link className="block text-center my-5 text-gray-500 text-sm" to="/">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      )}
    </>
  );
};

export default NuevoPassword;
