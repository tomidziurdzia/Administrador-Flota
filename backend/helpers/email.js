import nodemailer from "nodemailer";

export const emailRegisto = async (datos) => {
  const { email, nombre, token } = datos;

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
