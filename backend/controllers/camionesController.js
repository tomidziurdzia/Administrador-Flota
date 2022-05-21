import Camion from "../models/Camion.js";

const obtenerCamiones = async (req, res) => {
  const camiones = await Camion.find().where("creador").equals(req.usuario);
  res.json(camiones);
};

const nuevoCamion = async (req, res) => {
  const { patente } = req.body;
  const existeCamion = await Camion.findOne({ patente });

  if (existeCamion) {
    const error = new Error("Camion ya registrado");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const camion = new Camion(req.body);
    camion.creador = req.usuario._id;
    const camionAlmacenado = await camion.save();
    res.json(camionAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerCamion = async (req, res) => {};

const actualizarCamion = async (req, res) => {};

const eliminarCamion = async (req, res) => {};

const agregarColaborador = async (req, res) => {};

const eliminarColaborador = async (req, res) => {};

export {
  obtenerCamiones,
  nuevoCamion,
  obtenerCamion,
  actualizarCamion,
  eliminarCamion,
  agregarColaborador,
  eliminarColaborador,
};
