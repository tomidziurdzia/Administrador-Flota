import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { auth } = useAuth();

  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <Link to="/dashboard">
          <h1 className="text-3xl text-primary-blue font-black text-center">
            Administrador Logístico
          </h1>
        </Link>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="search"
            placeholder="Buscar Viaje"
            className="rounded-lg lg:w-96 block mr-5 p-2 bg-gray-100 border"
          />
          {
            // TODO: Aca tengo que poner el nombre solo y que se abra un nav para usuario, cambiar contraseña, cerrar sesion
          }
          <button
            type="button"
            className="text-white text-sm bg-primary-blue p-3 rounded-md font-bold"
          >
            Cerrar Sesión
            <p className="text-sm font-bold ">{auth.nombre}</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
