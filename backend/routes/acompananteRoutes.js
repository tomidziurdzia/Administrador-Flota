import express from "express";
import {
  obtenerAcompanantes,
  nuevoAcompanante,
  obtenerAcompanante,
  actualizarAcompanante,
  eliminarAcompanante,
  agregarColaborador,
  eliminarColaborador,
} from "../controllers/acompanantesController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
  .route("/")
  .get(checkAuth, obtenerAcompanantes)
  .post(checkAuth, nuevoAcompanante);

router
  .route("/:id")
  .get(checkAuth, obtenerAcompanante)
  .put(checkAuth, actualizarAcompanante)
  .delete(checkAuth, eliminarAcompanante);

router.post("/agregar-colaborador/:id", checkAuth, agregarColaborador);
router.post("/eliminar-colaborador", checkAuth, eliminarColaborador);

export default router;
