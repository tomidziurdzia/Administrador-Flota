import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useViajes from "../hooks/useViajes";
import Alerta from "./Alerta";

const ModalFormularioChoferes = () => {
  const {
    modalFormularioChoferes,
    handleModalChofer,
    mostrarAlerta,
    alerta,
    submitChofer,
    chofer,
  } = useViajes();

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cuil, setCuil] = useState("");
  const [fechaCarnet, setFechaCarnet] = useState("");
  const [fechaLinti, setFechaLinti] = useState("");
  const [fechaPsicofisico, setFechaPsicofisico] = useState("");
  const [fechaLibretaSanitaria, setFechaLibretaSanitaria] = useState("");

  useEffect(() => {
    if (chofer?._id) {
      setId(chofer._id);
      setNombre(chofer.nombre);
      setApellido(chofer.apellido);
      setCuil(chofer.cuil);
      setFechaCarnet(chofer.fechaCarne);
      setFechaLinti(chofer.fechaLinti);
      setFechaPsicofisico(chofer.fechaPsicofisico);
      setFechaLibretaSanitaria(chofer.fechaLibretaSanitaria);
      return;
    }
    setId("");
    setNombre("");
    setApellido("");
    setCuil("");
    setFechaCarnet("");
    setFechaLinti("");
    setFechaPsicofisico("");
    setFechaLibretaSanitaria("");
  }, [chofer]);

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    if (
      [
        nombre,
        apellido,
        cuil,
        fechaCarnet,
        fechaLinti,
        fechaLibretaSanitaria,
        fechaPsicofisico,
      ].includes(0)
    ) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    await submitChofer({
      nombre,
      apellido,
      cuil,
      fechaCarnet,
      fechaLinti,
      fechaLibretaSanitaria,
      fechaPsicofisico,
    });

    setId("");
    setNombre("");
    setApellido("");
    setCuil("");
    setFechaCarnet("");
    setFechaLinti("");
    setFechaPsicofisico("");
    setFechaLibretaSanitaria("");
  };

  const { msg } = alerta;

  return (
    <Transition.Root show={modalFormularioChoferes} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleModalChofer}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleModalChofer}
                >
                  <span className="sr-only">Cerrar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-bold text-gray-900"
                  >
                    <p className="text-3xl">
                      {id ? "Editar Editar" : "Agregar Chofer"}
                    </p>
                  </Dialog.Title>

                  {msg && <Alerta alerta={alerta} />}
                  <form className="my-10" onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <label
                        className="text-gray-700 font-bold text-sm"
                        htmlFor="nombre"
                      >
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        className="text-gray-700 font-bold text-sm"
                        htmlFor="apellido"
                      >
                        Apellido
                      </label>
                      <input
                        id="apellido"
                        type="text"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        className="text-gray-700 font-bold text-sm"
                        htmlFor="cuil"
                      >
                        CUIL
                      </label>
                      <input
                        id="cuil"
                        type="number"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={cuil}
                        onChange={(e) => setCuil(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        className="text-gray-700 font-bold text-sm"
                        htmlFor="fechaCarnet"
                      >
                        Carnet de Conducir
                      </label>
                      <input
                        id="fechaCarnet"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fechaCarnet}
                        onChange={(e) => setFechaCarnet(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        className="text-gray-700 font-bold text-sm"
                        htmlFor="fechaLinti"
                      >
                        Fecha Linti
                      </label>
                      <input
                        id="fechaLinti"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fechaLinti}
                        onChange={(e) => setFechaLinti(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        className="text-gray-700 font-bold text-sm"
                        htmlFor="fechaPsicofisico"
                      >
                        Fecha Psicofisico
                      </label>
                      <input
                        id="fechaPsicofisico"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fechaPsicofisico}
                        onChange={(e) => setFechaPsicofisico(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        className="text-gray-700 font-bold text-sm"
                        htmlFor="fechaLibretaSanitaria"
                      >
                        Fecha Libreta Sanitaria
                      </label>
                      <input
                        id="fechaLibretaSanitaria"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fechaLibretaSanitaria}
                        onChange={(e) =>
                          setFechaLibretaSanitaria(e.target.value)
                        }
                      />
                    </div>
                    <input
                      type="submit"
                      className="bg-primary-blue hover:bg-hover-button w-full p-3 text-white font-bold cursor-pointer transition-colors rounded"
                      value={id ? "Editar Viaje" : "Nuevo Viaje"}
                    />
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalFormularioChoferes;
