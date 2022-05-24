import nodemailer from "nodemailer";

export const emailRegisto = async (datos) => {
  const { email, nombre, token } = datos;

  //TODO: mover a variable de entorno
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2430e9e0d95a7f",
      pass: "23678dd02e0887",
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

  // TODO: Mover hacia variables de entorno
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2430e9e0d95a7f",
      pass: "23678dd02e0887",
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
