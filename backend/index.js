import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import choferRoutes from "./routes/choferRoutes.js";
import acompananteRoutes from "./routes/acompananteRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

// Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/choferes", choferRoutes);
app.use("/api/acompanantes", acompananteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
