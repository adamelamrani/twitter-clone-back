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

const createTuitero = async (req, res, next) => {
  const newTuitero = req.body;

  try {
    const createdTuitero = await Tuitero.create(newTuitero);
    if (createdTuitero) {
      res.status(201).json(createdTuitero);
    } else {
      const error = new Error("No tuit new tuitero");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

module.exports = { getAllTuitero, createTuitero };
