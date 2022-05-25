import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ViajesContext = createContext();

const ViajesProvider = ({ children }) => {
  const [viajes, setViajes] = useState([]);
  const [viaje, setViaje] = useState({});
  const [modalFormularioViaje, setModalFormularioViaje] = useState(false);
  const [modalFormularioChoferes, setModalFormularioChoferes] = useState(false);

  const [alerta, setAlerta] = useState({});
  const [choferes, setChoferes] = useState([]);
  const [chofer, setChofer] = useState({});

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

  const handleModalChofer = () => {
    setModalFormularioChoferes(!modalFormularioChoferes);
    setChofer({});
  };

  useEffect(() => {
    const obtenerChoferes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/choferes", config);

        setChoferes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerChoferes();
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
        setChoferes,
        choferes,
        chofer,
        handleModalChofer,
        setChofer,
        modalFormularioChoferes,
      }}
    >
      {children}
    </ViajesContext.Provider>
  );
};

export { ViajesProvider };

export default ViajesContext;
