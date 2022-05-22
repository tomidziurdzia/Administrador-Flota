import express from "express";
import {
  obtenerCamiones,
  nuevoCamion,
  obtenerCamion,
  actualizarCamion,
  eliminarCamion,
} from "../controllers/camionesController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, obtenerCamiones).post(checkAuth, nuevoCamion);

router
  .route("/:id")
  .get(checkAuth, obtenerCamion)
  .put(checkAuth, actualizarCamion)
  .delete(checkAuth, eliminarCamion);

export default router;
