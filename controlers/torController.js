/**
 * @desc   Torrent Page Add new magnet
 * @route  PUT /api/v1/tor/add
 * @access Private
 */

const addTor = async (req, res, next) => {
  try {
    res.status(200).send({ message: "New TorCard added Successfully." });
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

export { addTor, torList };
