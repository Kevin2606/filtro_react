import { loadEnv } from 'vite';
import express from "express";
import cors from "cors";
import appProducto from "./routes/producto.js";
import appCategoria from "./routes/categoria.js";

const env = loadEnv("development", process.cwd(), 'VITE')
const app = express();

app.use(cors());
app.use(express.json());
app.use("/producto", appProducto);
app.use("/categoria", appCategoria)

const config = JSON.parse(env.VITE_CONFIG_EXPRESS);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
}); 