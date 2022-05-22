import Chofer from "../models/Chofer.js";
import Acompanante from "../models/Acompanante.js";
import Camion from "../models/Camion.js";
import Viaje from "../models/Viaje.js";

const nuevoViaje = async (req, res) => {
  const { chofer, patente, acompanante } = req.body;

  const existeChofer = await Chofer.findById(chofer);
  const existeAcompanante = await Acompanante.findById(acompanante);
  const existePatente = await Camion.findById(patente);

  if (!existeChofer) {
    const error = new Error("El chofer no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (!existePatente) {
    const error = new Error("El camion no existe");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const viajeAlmacenado = await Viaje.create(req.body);
    viajeAlmacenado.creador = req.usuario._id;
    viajeAlmacenado.chofer = existeChofer;
    viajeAlmacenado.patente = existePatente;
    viajeAlmacenado.acompanante = existeAcompanante;

    await viajeAlmacenado.save();
    res.json(viajeAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerViaje = async (req, res) => {
  const { id } = req.params;

  const viaje = await Viaje.findById(id)
    .populate("patente", "patente")
    .populate("chofer", "nombre apellido")
    .populate("acompanante", "nombre apellido");

  console.log(viaje);
  if (!viaje) {
    const error = new Error("El viaje no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (viaje.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  res.json(viaje);
};

const actualizarViaje = async (req, res) => {};

const eliminarViaje = async (req, res) => {};

export { nuevoViaje, obtenerViaje, actualizarViaje, eliminarViaje };
