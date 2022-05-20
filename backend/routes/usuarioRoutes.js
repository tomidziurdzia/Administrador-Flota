import express from "express";
import { registrar } from "../controllers/usuarioController";

const router = express.Router();

router.post("/", registrar);

export default router;
