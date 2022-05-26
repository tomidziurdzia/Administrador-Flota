import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ViajesContext = createContext();

/* const {
  - modalFormularioTarea,
  - handleModalTarea,
  - mostrarAlerta,
  - alerta,
  - submitTarea,
  - tarea,
} = useProyectos(); */

const ViajesProvider = ({ children }) => {
  const [viajes, setViajes] = useState([]);
  const [viaje, setViaje] = useState({});
  const [modalFormularioViaje, setModalFormularioViaje] = useState(false);

  const [alerta, setAlerta] = useState({});
  const [modalFormularioChoferes, setModalFormularioChoferes] = useState(false);
  const [chofer, setChofer] = useState({});

  const [choferes, setChoferes] = useState([]);

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

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta({});
    }, 5000);
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

  const submitChofer = async (chofer) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.post("/choferes", chofer, config);

      setAlerta({});
      setModalFormularioChoferes(false);
      console.log(data);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

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
        mostrarAlerta,
        submitChofer,
      }}
    >
      {children}
    </ViajesContext.Provider>
  );
};

export { ViajesProvider };

export default ViajesContext;
