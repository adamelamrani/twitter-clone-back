const { Schema, model } = require("mongoose");

const TuitSchema = new Schema({
  date: {
    timestamp: true,
    default: Date.now(),
  },
  text: {
    type: String,
    min: 1,
    max: 200,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Tuit = model("Tuit", TuitSchema, "tuits");
export default Tuit;
