import { Link } from "react-router-dom";

const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-primary-blue font-black text-center text-2xl md:text-4xl">
        Recuperar Usuario
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
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-primary-blue text-white w-full py-3 font-bold rounded hover:cursor-pointer hover:bg-hover-button transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link className="block text-center my-5 text-gray-500 text-sm" to="/">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
        <Link
          className="block text-center my-5 text-gray-500 text-sm"
          to="/registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
};

export default OlvidePassword;
