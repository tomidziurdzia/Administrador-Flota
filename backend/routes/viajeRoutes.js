import express from "express";
import {
  nuevoViaje,
  obtenerViaje,
  actualizarViaje,
  eliminarViaje,
} from "../controllers/viajesController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", checkAuth, nuevoViaje);

router
  .route("/:id")
  .get(checkAuth, obtenerViaje)
  .put(checkAuth, actualizarViaje)
  .delete(checkAuth, eliminarViaje);

export default router;
