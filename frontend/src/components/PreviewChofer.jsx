import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PreviewChofer = ({ chofer }) => {
  const { auth } = useAuth;
  const {
    nombre,
    apellido,
    cuil,
    fechaCarnet,
    fechaLinti,
    fechaPsicofisico,
    fechaLibretaSanitaria,
  } = chofer;
  return (
    <div className="border-b p-5 flex flex-col md:flex-row justify-between">
      <p>{nombre}</p>
      <p>{apellido}</p>
      <p>{cuil}</p>
      <p>{fechaCarnet}</p>
      <p>{fechaLinti}</p>
      <p>{fechaPsicofisico}</p>
      <p>{fechaLibretaSanitaria}</p>
    </div>
  );
};

export default PreviewChofer;
