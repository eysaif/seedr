import fs from "fs";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

// get the resolved path to the file
const __filename = fileURLToPath(import.meta.url);
// get the name of the directory
const __dirname = path.dirname(__filename);


const downloadImage = async (url,fileName) => {
  try {
    let destination = path.join(__dirname, `../../tmp/${fileName}.jpg`);
    const response = await axios({
      method: "get",
      url: url,
      responseType: "stream",
    });
    response.data.pipe(fs.createWriteStream(destination));
    return new Promise((resolve, reject) => {
      response.data.on("end", () => {
        resolve();
      });

      response.data.on("error", (err) => {
        reject(err);
      });
    });
  } catch (error) {
    throw new Error("Please verify the image path.");
  }
};

export { downloadImage };
