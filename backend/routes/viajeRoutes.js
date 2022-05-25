import express from "express";
import {
  nuevoViaje,
  obtenerViaje,
  actualizarViaje,
  eliminarViaje,
  obtenerViajes,
} from "../controllers/viajesController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, obtenerViajes).post(checkAuth, obtenerViajes);

router
  .route("/:id")
  .get(checkAuth, obtenerViaje)
  .put(checkAuth, actualizarViaje)
  .delete(checkAuth, eliminarViaje);

export default router;
