require("dotenv").config();
const chalk = require("chalk");
const mongoose = require("mongoose");
const debug = require("debug")("Tuitah:Database:");

const connectDataBase = (accesDataBase) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        delete ret._id;
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        delete ret.__v;
      },
    });
    mongoose.set("returnOriginal");
    mongoose.connect(accesDataBase, (error) => {
      if (error) {
        debug(chalk.red(`An error ocurred: ${error.message}`));
        reject(new Error(`An error ocurred: ${error.message}`));
      }
      debug(chalk.greenBright("Connection to database successfull"));
      resolve();
    });
  });

export default connectDataBase;
