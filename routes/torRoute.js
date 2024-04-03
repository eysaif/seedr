import express from "express";
import {
  addTor,
  torList,
  generatedImage,
  removeCard,
} from "../controlers/torController.js";
const torRoutes = express.Router();

torRoutes.post("/add", addTor);
torRoutes.post("/delete", removeCard);
torRoutes.post("/getImage", generatedImage);
torRoutes.get("/list", torList);
torRoutes.get("/list/:skipitem", torList);

export default torRoutes;
