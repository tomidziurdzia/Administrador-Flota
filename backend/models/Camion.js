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
    fechaVtv: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    fechaRuta: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    fechaSenasa: {
      type: Date,
      default: Date.now(),
    },
    creador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
  {
    timestamps: true,
  }
);

const Camion = mongoose.model("Camion", camionSchema);
export default Camion;
