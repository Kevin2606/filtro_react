import {Router} from "express";
import routesVersioning from 'express-routes-versioning';
import { limitPostProducto } from "../helpers/rateLimit.js";
import { postCompraV1 } from "../version/v1/compra.js";

const version = routesVersioning();
const appCompra = Router();
// accept-version

appCompra.post("/", limitPostProducto(), version({
    "1.0.0": postCompraV1,
}));

export default appCompra;