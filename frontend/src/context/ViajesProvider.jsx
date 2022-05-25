import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ViajesContext = createContext();

const ViajesProvider = ({ children }) => {
  const [viajes, setViajes] = useState([]);

  return (
    <ViajesContext.Provider value={{ viajes }}>
      {children}
    </ViajesContext.Provider>
  );
};

export { ViajesProvider };

export default ViajesContext;
