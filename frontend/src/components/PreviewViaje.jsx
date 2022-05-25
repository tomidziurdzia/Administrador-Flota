import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PreviewViaje = ({ viaje }) => {
  const { auth } = useAuth();
  const { fecha, patente, chofer, destino } = viaje;

  return (
    <div className="border-b p-5 flex flex-col md:flex-row justify-between">
      <p>{fecha}</p>
      <p>{patente}</p>
      <p>{chofer}</p>
      <p>{destino}</p>
    </div>
  );
};

export default PreviewViaje;
