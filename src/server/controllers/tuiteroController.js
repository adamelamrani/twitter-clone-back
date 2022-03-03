const debug = require("chalk");
const chalk = require("chalk");
const Tuitero = require("../../db/models/Tuitero");

const getAllTuitero = async (req, res, next) => {
  try {
    const tuiteros = await Tuitero.find();
    debug(chalk.green("Tuitero List"));
    res.status(200).json({ tuiteros });
  } catch (error) {
    debug(chalk.red("Error"));
    error.status = 400;
    next(error);
  }
};

module.exports = getAllTuitero;
