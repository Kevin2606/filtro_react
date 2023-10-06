import { conexion } from "../../db/conexion.js";
const db = await conexion();

export const getCategoriaV1 = async (req, res) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});
    res.status(200).json({data: await db.collection("categoria").find().toArray()})
}