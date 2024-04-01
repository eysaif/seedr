import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TorCardModel = new Schema({
  path: { type: String },
  Name: { type: String },
  Files: {type: Array},
});


export default mongoose.model('torcard', TorCardModel)