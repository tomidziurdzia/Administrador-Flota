import Acompanante from "../models/Acompanante.js";

const obtenerAcompanantes = async (req, res) => {};

const nuevoAcompanante = async (req, res) => {
  const { cuil } = req.body;
  const existeAcompanante = await Acompanante.findOne({ cuil });

  if (existeAcompanante) {
    const error = new Error("Acompañante ya registrado");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const acompanante = new Acompanante(req.body);
    acompanante.creador = req.usuario._id;
    const acompananteAlmacenado = await acompanante.save();
    res.json(acompananteAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerAcompanante = async (req, res) => {};

const actualizarAcompanante = async (req, res) => {};

const eliminarAcompanante = async (req, res) => {};

const agregarColaborador = async (req, res) => {};

const eliminarColaborador = async (req, res) => {};

export {
  obtenerAcompanantes,
  nuevoAcompanante,
  obtenerAcompanante,
  actualizarAcompanante,
  eliminarAcompanante,
  agregarColaborador,
  eliminarColaborador,
};
