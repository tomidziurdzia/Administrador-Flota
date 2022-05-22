import mongoose, { mongo } from "mongoose";

const viajeSchema = mongoose.Schema(
  {
    fecha: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    patente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Camion",
      required: true,
    },
    chofer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chofer",
      required: true,
    },
    acompañante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Acompanante",
      default: null,
    },
    destino: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Viaje = mongoose.model("Viaje", viajeSchema);

export default Viaje;
