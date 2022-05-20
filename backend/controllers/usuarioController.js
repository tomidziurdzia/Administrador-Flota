import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";

// Registrar Usuario
const registrar = async (req, res) => {
  // Evitar registros duplicados
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(404).json({ msg: error.message });
  }
  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    const usuarioAlmacenado = await usuario.save();

    res.json(usuarioAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

// Autenticar Usuario
const autenticar = async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuario existe
  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  // Comprobar si el Usuario esta o no confirmado
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no ha sido confirmada");
    return res.status(404).json({ msg: error.message });
  }

  // Comprobar password
  if (await usuario.comprobarPassword(password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJWT(usuario._id),
    });
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

// Confirmar y validar las cuentas
const confirmar = async (req, res) => {
  const { token } = req.params;

  const usuarioConfirmar = await Usuario.findOne({ token });

  // Reviso si el token es valido
  if (!usuarioConfirmar) {
    const error = new Error("El token es invalido");
    return res.status(403).json({ msg: error.message });
  }

  // Si llega aca es porque el token es valido
  try {
    (usuarioConfirmar.confirmado = true), (usuario.confirmar.token = "");
    await usuarioConfirmar.save();
    res.json({ msj: "Usuario confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

export { registrar, autenticar, confirmar };
