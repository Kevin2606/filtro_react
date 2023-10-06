import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { limitGetProducto } from "../helpers/rateLimit.js";
import { getCategoriaV1 } from "../version/v1/categoria.js";

const version = routesVersioning();
const appCategoria = Router();
// accept-version

appCategoria.get(
    "/",
    limitGetProducto(),
    version({
        "1.0.0": getCategoriaV1,
    })
);

export default appCategoria;
