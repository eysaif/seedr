import express from "express";
import cors from "cors";
import seedrRoutes from "./routes/seedrRoute.js";
const PORT = process.env.PORT || 5000;
const app = express();

// CORS is enabled for all origins
app.use(cors());

//TO READ THE REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * App Routes
 */
app.use("/api/v1/seedr", seedrRoutes);
app.use("/", (req, res) => {
  res.send("<h1>Welcome to Seedr</h1>");
});

app.listen(PORT, () => {
  console.log("App listening at port", PORT);
});
