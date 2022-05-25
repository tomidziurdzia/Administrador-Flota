import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ViajesContext = createContext();

const ViajesProvider = ({ children }) => {
  const [viajes, setViajes] = useState([]);
  const [viaje, setViaje] = useState({});
  const [modalFormularioViaje, setModalFormularioViaje] = useState(false);
  const [alerta, setAlerta] = useState({});

  const { auth } = useAuth();

  const handleModalViaje = () => {
    setModalFormularioViaje(!modalFormularioViaje);
    setViaje({});
  };

  useEffect(() => {
    const obtenerViajes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/viajes", config);

        setViajes(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerViajes();
  }, [auth]);

  return (
    <ViajesContext.Provider
      value={{
        viajes,
        setViajes,
        viaje,
        setViaje,
        modalFormularioViaje,
        setModalFormularioViaje,
        handleModalViaje,
        alerta,
      }}
    >
      {children}
    </ViajesContext.Provider>
  );
};

export { ViajesProvider };

export default ViajesContext;
