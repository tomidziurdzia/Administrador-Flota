import Acompanante from "../models/Acompanante.js";

const obtenerAcompanantes = async (req, res) => {
  const acompanantes = await Acompanante.find()
    .where("creador")
    .equals(req.usuario);
  res.json(acompanantes);
};

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

const obtenerAcompanante = async (req, res) => {
  const { id } = req.params;

  const acompanante = await Acompanante.findById(id);

  if (!acompanante) {
    const error = new Error("Acompanante no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (acompanante.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  res.json(acompanante);
};

const actualizarAcompanante = async (req, res) => {
  const { id } = req.params;
  const acompanante = await Acompanante.findById(id);

  if (!acompanante) {
    const error = new Error("El acompanante no fue encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (acompanante.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  acompanante.nombre = req.body.nombre || acompanante.nombre;
  acompanante.apellido = req.body.apellido || acompanante.apellido;
  acompanante.cuil = req.body.cuil || acompanante.cuil;

  try {
    const acompananteAlmacenado = await acompanante.save();
    res.json(acompananteAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const eliminarAcompanante = async (req, res) => {
  const { id } = req.params;
  const acompanante = await Acompanante.findById(id);

  if (!acompanante) {
    const error = new Error("El acompanante no fue encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (acompanante.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  try {
    await acompanante.deleteOne();
    res.json({
      msg: `El acompanante ${acompanante.nombre} ${acompanante.apellido} fue eliminado correctamente`,
    });
  } catch (error) {
    console.log(error);
  }
};

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
