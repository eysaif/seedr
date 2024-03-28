import { downloadImage } from "../utils/imageDownloader.js";
import path from "path";
import { fileURLToPath } from "url";

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
    const url = req.body.imageURL || "";
    const fileName = req.body.fileName || new Date().getTime();
    await downloadImage(url, fileName)
      .then(() => {
        res.status(200).send({ message: "New TorCard added Successfully." });
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
    res.status(200).send({ message: "New TorCard List added Successfully." });
  } catch (error) {
    next(error);
  }
};

const generatedImage = (req, res, next) => {
  try {
    const fileName = req.body.imageId || "";
    res.status(201).sendFile(path.join(__dirname, `../utils/${fileName}.jpg`));
  } catch (error) {
    next(error);
  }
};

export { addTor, torList, generatedImage };
