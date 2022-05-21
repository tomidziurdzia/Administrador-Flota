import Chofer from "../models/Chofer.js";

const obtenerChoferes = async (req, res) => {
  const choferes = await Chofer.find().where("creador").equals(req.usuario);
  res.json(choferes);
};

const nuevoChofer = async (req, res) => {
  const chofer = new Chofer(req.body);
  chofer.creador = req.usuario._id;

  try {
    const choferAlmacenado = await chofer.save();
    res.json(choferAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerChofer = async (req, res) => {
  const { id } = req.params;

  const chofer = await Chofer.findById(id);

  if (!chofer) {
    const error = new Error("Chofer no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (chofer.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  res.json(chofer);
};

const actualizarChofer = async (req, res) => {};
const eliminarChofer = async (req, res) => {};
const agregarColaborador = async (req, res) => {};
const eliminarColaborador = async (req, res) => {};

export {
  obtenerChoferes,
  nuevoChofer,
  obtenerChofer,
  actualizarChofer,
  eliminarChofer,
  agregarColaborador,
  eliminarColaborador,
};
