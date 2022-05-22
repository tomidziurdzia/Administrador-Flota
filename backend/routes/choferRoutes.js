import express from "express";
import {
  obtenerChoferes,
  nuevoChofer,
  obtenerChofer,
  actualizarChofer,
  eliminarChofer,
} from "../controllers/choferesController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, obtenerChoferes).post(checkAuth, nuevoChofer);

router
  .route("/:id")
  .get(checkAuth, obtenerChofer)
  .put(checkAuth, actualizarChofer)
  .delete(checkAuth, eliminarChofer);

export default router;
