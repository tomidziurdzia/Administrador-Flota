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
      type: Number,
      trim: true,
      required: true,
      unique: true,
    },
    fechaCarnet: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    fechaLinti: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    fechaPsicofisico: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    fechaLibretaSanitaria: {
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

const Chofer = mongoose.model("Chofer", choferesSchema);
export default Chofer;
