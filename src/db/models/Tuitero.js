const { Schema, model } = require("mongoose");

const TuiteroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
});

const Tuitero = model("Tuitero", TuiteroSchema, "users");

module.exports = Tuitero;
