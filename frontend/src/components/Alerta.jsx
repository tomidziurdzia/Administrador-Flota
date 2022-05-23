import React from "react";

const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error
          ? "from-red-400 to-red-600"
          : "from-primary-blue to-hover-button"
      } bg-gradient-to-br text-center p-3 rounded-xl text-white font-bold text-sm my-10`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
