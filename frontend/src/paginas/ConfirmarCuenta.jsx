import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const params = useParams();

  const { token } = params;

  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/usuarios/confirmar/${token}`;
        const { data } = await axios(url);
        setAlerta({
          msg: data.msg,
          error: false,
        });

        setCuentaConfirmada(true);
        console.log(data);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };

    confirmarCuenta();
  }, []);

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-primary-blue font-black text-center text-2xl md:text-4xl">
        Confirmar Cuenta
      </h1>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link className="block text-center my-5 text-gray-400 text-sm" to="/">
            Inicia Sesión
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
