import Chofer from "../models/Chofer.js";

const obtenerChoferes = async (req, res) => {
  res.send("obtener choferes");
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
const obtenerChofer = async (req, res) => {};
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
