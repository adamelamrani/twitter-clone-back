const { Schema, model } = require("mongoose");

const TuitSchema = new Schema(
  {
    date: {
      type: Date,
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
  },
  { timestamp: true }
);

const Tuit = model("Tuit", TuitSchema, "tuits");
module.exports = Tuit;
