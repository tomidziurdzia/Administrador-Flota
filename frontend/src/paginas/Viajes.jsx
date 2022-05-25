import useViajes from "../hooks/useViajes";
import Alerta from "../components/Alerta";
import ModalFormularioViaje from "../components/ModalFormularioViaje";
import PreviewViaje from "../components/PreviewViaje";

const Viajes = () => {
  const { viajes, viaje, alerta, handleModalViaje } = useViajes();

  const { msg } = alerta;

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-500">Viajes</h2>
        <button
          onClick={handleModalViaje}
          type="button"
          className="flex gap-2 text-sm items-center justify-center px-5 py-3 w-full md:w-auto rounded-lg font-bold text-white text-center bg-primary-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Nuevo Viaje
        </button>
      </div>
      <div className="bg-white shadow mt-10 rounded-lg">
        {viajes.length ? (
          viajes.map((viaje) => <PreviewViaje key={viaje._id} viaje={viaje} />)
        ) : (
          <p className="py-5 text-center text-gray600">No hay proyectos aún</p>
        )}
      </div>
      <ModalFormularioViaje />
      {msg && <Alerta alerta={alerta} />}
    </>
  );
};

export default Viajes;
