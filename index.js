import express from "express";
import Seedr from "seedr";
import cors from "cors";
const PORT = process.env.PORT || 5000;
const app = express();

// CORS is enabled for all origins
app.use(cors());

//TO READ THE REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize SEEDER
const seedr = new Seedr();

app.post("/api/add", async (req, res) => {
  try {
    let { pwd, usr, magnet } = { ...req.body };
    await seedr.login(usr, pwd);
    await seedr.addMagnet(magnet);
    res.status(200).send({ message: "Magnet added Successfully." });
  } catch (error) {
    res.status(500).send({ message: "Internal server error.", error: error });
  }
});

app.post("/api/videos", async (req, res) => {
  try {
    let { pwd, usr } = { ...req.body };
    await seedr.login(usr,pwd);
    let data = await seedr.getVideos();
    res.status(200).send({ message: "Video List",data:data });
  } catch (error) {
    res.status(500).send({ message: "Internal server error.", error: error });
  }
});

app.use("/", (req, res) => {
  res.send("<h1>Welcome to Seedr</h1>");
});

app.listen(PORT, () => {
  console.log("App listening at port", PORT);
});
