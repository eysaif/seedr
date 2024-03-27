import express from "express";
import { addNew, allVideos } from "../controlers/seedrController.js";
const seedrRoutes = express.Router();

seedrRoutes.post("/add", addNew);
seedrRoutes.post("/videos", allVideos);

export default seedrRoutes;
