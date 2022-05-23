import React from "react";

const Login = () => {
  return (
    <>
      <h1 className="text-primary-blue font-black text-center text-2xl md:text-4xl">
        Iniciar Sesión
      </h1>
      <form className="my-5 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            className="text-gray-500 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full mt-2 p-3 border rounded-xl"
            id="email"
            type="email"
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="mt-8 my-5">
          <label
            className="text-gray-500 block text-xl font-bold"
            htmlFor="contraseña"
          >
            Contraseña
          </label>
          <input
            className="w-full mt-2 p-3 border rounded-xl"
            id="contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-primary-blue text-white w-full py-3 font-bold rounded hover:cursor-pointer hover:bg-hover-button transition-colors"
        />
      </form>
    </>
  );
};

export default Login;
