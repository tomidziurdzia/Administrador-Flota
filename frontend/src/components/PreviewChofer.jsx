const PreviewChofer = ({ chofer }) => {
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
      <p>{fechaCarnet.split("T")[0]}</p>
      <p>{fechaLinti.split("T")[0]}</p>
      <p>{fechaPsicofisico.split("T")[0]}</p>
      <p>{fechaLibretaSanitaria.split("T")[0]}</p>
    </div>
  );
};

export default PreviewChofer;
