import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="md:w-80 lg-96 px-5 py-10">
      <Link
        to="viajes"
        className="bg-primary-blue w-full block text-white font-bold p-3 mt-5 text-center rounded-lg"
      >
        Viajes
      </Link>
      <Link
        to="choferes"
        className="bg-primary-blue w-full block text-white font-bold p-3 mt-5 text-center rounded-lg"
      >
        Choferes
      </Link>
      <Link
        to="acompanantes"
        className="bg-primary-blue w-full block text-white font-bold p-3 mt-5 text-center rounded-lg"
      >
        Acompañantes
      </Link>
    </aside>
  );
};

export default Sidebar;
