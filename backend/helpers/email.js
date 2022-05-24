import nodemailer from "nodemailer";

export const emailRegisto = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Informacion del mail
  const info = await transport.sendMail({
    from: '"Administrador Logistico" <cuentas@administradorlogistico.com>',
    to: email,
    subject: "Administrador Logistico - Confirmar cuenta",
    text: "Comprueba tu cuenta en Administrador Logistico",
    html: ` <p>Hola ${nombre}, comprueba tu cuenta en Administrador Logistico</p>
       <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace
   
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
   
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // informacion del email
  const info = await transport.sendMail({
    from: '"Administrador Logistico" <cuentas@administradorlogistico.com>',
    to: email,
    subject: "Administrador Logistico - Reestablecer contraseña",
    text: "Reestablecer contraseña",
    html: ` <p>Hola ${nombre}, reestablece tu contraseña</p>
    <p>Sigue el siguiente enlace para generar una nueva contraseña
   
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a></p>
   
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    
    `,
  });
};
