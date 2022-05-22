import mongoose from "mongoose";

const acompanantesSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
    },
    apellido: {
      type: String,
      trim: true,
      required: true,
    },
    cuil: {
      type: Number,
      trim: true,
      required: true,
      unique: true,
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

const Acompanante = mongoose.model("Acompanante", acompanantesSchema);
export default Acompanante;
