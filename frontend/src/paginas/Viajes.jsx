import useViajes from "../hooks/useViajes";

const Viajes = () => {
  const { viajes } = useViajes();
  return <div>Viajes</div>;
};

export default Viajes;
