import { downloadImage } from "../utils/imageDownloader.js";
import torcard from "../models/torCard.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// get the resolved path to the file
const __filename = fileURLToPath(import.meta.url);
// get the name of the directory
const __dirname = path.dirname(__filename);

/**
 * @desc   Torrent Page Add new magnet
 * @route  PUT /api/v1/tor/add
 * @access Private
 */

const addTor = async (req, res, next) => {
  try {
    const url = req.body.Poster || "";
    const fileName = req.body.fileName || new Date().getTime();
    await downloadImage(url, fileName)
      .then(async () => {
        const fileData = await fs.readFileSync(
          path.join(__dirname, `../../../tmp/${fileName}.jpg`)
        );
        const b64 = Buffer.from(fileData).toString("base64");
        const mimeType = "image/jpeg";
        const data = {
          path: `data:${mimeType};base64,${b64}`,
          Name: req.body.Name,
          Files: req.body.Files,
        };
        await torcard.insertMany(data);
        fs.unlink(
          path.join(__dirname, `../../../tmp/${fileName}.jpg`),
          (error) => (error) ? console.log("unable to delete file", error) : ''
        );
        res
          .status(200)
          .send({ message: "Added Successfully", responseData: data });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

const torList = async (req, res, next) => {
  try {
    const skipItem = req.params.skipitem || 0;
    const cardList = await torcard.find({}).skip(skipItem).limit(2);
    if (cardList != null && cardList.length > 0) {
      res.status(200).send(cardList);
      return;
    }
    res.status(200).send({ message: "No record found." });
  } catch (error) {
    next(error);
  }
};

const generatedImage = (req, res, next) => {
  try {
    const fileName = req.body.imageId || "";
    res
      .status(201)
      .sendFile(path.join(__dirname, `../../../tmp/${fileName}.jpg`));
  } catch (error) {
    next(error);
  }
};

export { addTor, torList, generatedImage };
