import express from "express";
import { addTor, torList } from "../controlers/torController.js";
const torRoutes = express.Router();

torRoutes.post("/add", addTor);
torRoutes.get("/list", torList);

export default torRoutes;
