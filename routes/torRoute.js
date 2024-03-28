import express from "express";
import { addTor, torList,generatedImage } from "../controlers/torController.js";
const torRoutes = express.Router();

torRoutes.post("/add", addTor);
torRoutes.post("/getImage", generatedImage);
torRoutes.get("/list", torList);

export default torRoutes;
