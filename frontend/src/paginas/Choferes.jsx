import useViajes from "../hooks/useViajes";
import Alerta from "../components/Alerta";
import ModalFormularioChoferes from "../components/ModalFormularioChoferes";
import PreviewChofer from "../components/PreviewChofer";

const Choferes = () => {
  const { choferes, alerta, handleModalChofer } = useViajes();

  const { msg } = alerta;

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-500">Viajes</h2>
        <button
          onClick={handleModalChofer}
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
          Nuevo Chofer
        </button>
      </div>
      <div className="bg-white shadow mt-10 rounded-lg">
        {choferes.length ? (
          choferes.map((chofer) => (
            <PreviewChofer key={chofer._id} chofer={chofer} />
          ))
        ) : (
          <p className="py-5 text-center text-gray600">No hay proyectos aún</p>
        )}
      </div>
      <ModalFormularioChoferes />
      {msg && <Alerta alerta={alerta} />}
    </>
  );
};

export default Choferes;
