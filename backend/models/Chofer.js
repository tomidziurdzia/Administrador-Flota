import mongoose from "mongoose";

const choferesSchema = mongoose.Schema(
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
      type: String,
      trim: true,
      required: true,
    },
    fechaCarnet: {
      type: Date,
      required: true,
    },
    fechaLinti: {
      type: Date,
      required: true,
    },
    fechaPsicofisico: {
      type: Date,
      required: true,
    },
    fechaLibretaSanitaria: {
      type: Date,
      default: null,
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

const Chofer = mongoose.model("Chofer", choferesSchema);
export default Chofer;
