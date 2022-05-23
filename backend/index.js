import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import choferRoutes from "./routes/choferRoutes.js";
import acompananteRoutes from "./routes/acompananteRoutes.js";
import camionRoutes from "./routes/camionRoutes.js";
import viajeRoutes from "./routes/viajeRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

// Configurar CORS
const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

// Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/choferes", choferRoutes);
app.use("/api/acompanantes", acompananteRoutes);
app.use("/api/camiones", camionRoutes);
app.use("/api/viajes", viajeRoutes);

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
