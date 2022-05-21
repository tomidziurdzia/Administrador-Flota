import express from "express";
import {
  obtenerCamiones,
  nuevoCamion,
  obtenerCamion,
  actualizarCamion,
  eliminarCamion,
  agregarColaborador,
  eliminarColaborador,
} from "../controllers/camionesController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, obtenerCamiones).post(checkAuth, nuevoCamion);

router
  .route("/:id")
  .get(checkAuth, obtenerCamion)
  .put(checkAuth, actualizarCamion)
  .delete(checkAuth, eliminarCamion);

router.post("/agregar-colaborador/:id", checkAuth, agregarColaborador);
router.post("/eliminar-colaborador", checkAuth, eliminarColaborador);

export default router;
