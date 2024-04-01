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
        const binary = Buffer.from(fileData);
        const data = {
          path: binary,
          Name: req.body.Name,
          Files: req.body.Files,
        };
        await torcard.insertMany(data);
        res.status(200).send({
          message: "New TorCard added Successfully.",
          data: { ...req.body, fileName: fileName },
        });
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
    const cardList = await torcard.findOne({});
    if(cardList !=null){
     // cardList.forEach((item)=>{
      cardList.path = 'data:image/jpg;base64,' + cardList.path.toString('base64');
       // item.path = img;
     // })
    }
    res.status(200).send(cardList);
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
