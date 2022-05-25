import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ViajesContext = createContext();

const ViajesProvider = ({ children }) => {
  return <ViajesContext.Provider value={{}}>{children}</ViajesContext.Provider>;
};

export { ViajesProvider };

export default ViajesContext;
