import { useContext } from "react";
import ViajesContext from "../context/ViajesProvider";

const useViajes = () => {
  return useContext(ViajesContext);
};

export default useViajes;
