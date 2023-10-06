import { conexion } from "../../db/conexion.js";
const db = await conexion();



export const postCompraV1 = async (req, res) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});
    const collection = db.collection("compra");
    res.status(201).json({data: await collection.insertOne({...req.body})})
}