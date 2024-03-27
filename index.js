import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import seedrRoutes from "./routes/seedrRoute.js";
import { dbConnection } from "./configs/dbConnector.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 5000;
const app = express();

/**
 * CORS is enabled for all origins
 */
app.use(cors());

/**
 * Configure ENV Path
 */
dotenv.config({ path: "./configs/config.env" });

/**
 * Database Conection
 */
dbConnection();

/**
 * TO READ THE REQUEST BODY
 */
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true }));

/**
 * App Routes
 */
app.use("/api/v1/seedr", seedrRoutes);
app.use("/", (req, res) => {
  res.send("<h1>Welcome to Seedr</h1>");
});

/**
 * Use the ErrorHandler to catch app wise Errors
 */
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("App listening at port", PORT);
});
