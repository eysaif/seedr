import Seedr from "seedr";

//Initialize SEEDER
const seedr = new Seedr();
/**
 * @desc   Seedr Page Add new magnet
 * @route  PUT /api/v1/seedr/add
 * @access Private
 */
const addNew = async (req, res, next) => {
  try {
    let { pwd, usr, magnet } = { ...req.body };
    await seedr.login(usr, pwd);
    await seedr.addMagnet(magnet);
    res.status(200).send({ message: "Magnet added Successfully." });
  } catch (error) {
    if (error.message == "Request failed with status code 401") {
      res.status(401).send({ message: "Bad Credentials", error: error });
    } else {
      res.status(500).send({ message: "Internal server error.", error: error });
    }
  }
};

/**
 * @desc   Recieve All Video of Account
 * @route  POST /api/v1/seedr/videos
 * @access Private
 */
const allVideos = async (req, res, next) => {
  try {
    let { pwd, usr } = { ...req.body };
    await seedr.login(usr, pwd);
    let data = await seedr.getVideos();
    res.status(200).send({ message: "Video List", data: data });
  } catch (error) {
    if (error.message == "Request failed with status code 401") {
      res.status(401).send({ message: "Bad Credentials", error: error });
    } else {
      res.status(500).send({ message: "Internal server error.", error: error });
    }
  }
};

export { addNew, allVideos };
