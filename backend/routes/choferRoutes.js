import express from "express";
import {
  obtenerChoferes,
  nuevoChofer,
  obtenerChofer,
  actualizarChofer,
  eliminarChofer,
  agregarColaborador,
  eliminarColaborador,
} from "../controllers/choferesController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, obtenerChoferes).post(checkAuth, nuevoChofer);

router
  .route("/:id")
  .get(checkAuth, obtenerChofer)
  .put(checkAuth, actualizarChofer)
  .delete(checkAuth, eliminarChofer);

router.post("/agregar-colaborador/:id", checkAuth, agregarColaborador);
router.post("/eliminar-colaborador", checkAuth, eliminarColaborador);

export default router;
