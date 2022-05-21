import mongoose from "mongoose";

const camionSchema = mongoose.Schema(
  {
    marca: {
      type: String,
      trim: true,
      required: true,
    },
    modelo: {
      type: String,
      trim: true,
      required: true,
    },
    patente: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    tipo: {
      type: String,
      trim: true,
      required: true,
    },
    creador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    colaboradores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Camion = mongoose.model("Camion", camionSchema);
export default Camion;
