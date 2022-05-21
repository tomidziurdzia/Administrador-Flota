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

const obtenerCamion = async (req, res) => {
  const { id } = req.params;

  const camion = await Camion.findById(id);

  if (!camion) {
    const error = new Error("Camion no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (camion.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  res.json(camion);
};

const actualizarCamion = async (req, res) => {
  const { id } = req.params;
  const camion = await Camion.findById(id);

  if (!camion) {
    const error = new Error("El camion no fue encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (camion.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  camion.marca = req.body.marca || camion.marca;
  camion.modelo = req.body.modelo || camion.modelo;
  camion.patente = req.body.patente || camion.patente;
  camion.tipo = req.body.tipo || camion.tipo;
  camion.fechaVtv = req.body.fechaVtv || camion.fechaVtv;
  camion.fechaRuta = req.body.fechaRuta || camion.fechaRuta;
  camion.fechaSenasa = req.body.fechaSenasa || camion.fechaSenasa;

  try {
    const camionAlmacenado = await camion.save();
    res.json(camionAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

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
