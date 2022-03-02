const debug = require("chalk");
const chalk = require("chalk");
const Tuit = require("../../db/models/Tuit");

const getAllTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find();
    debug(chalk.green("Tuitah List"));
    res.status(200).json({ tuits });
  } catch (error) {
    debug(chalk.red("Error"));
    error.status = 400;
    next(error);
  }
};

const createTuit = async (req, res, next) => {
  const newTuit = req.body;

  try {
    const createdTuit = await Tuit.create(newTuit);
    if (createdTuit) {
      res.status(201).json(createdTuit);
    } else {
      const error = new Error("No tuit to you");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const updateTuit = async (req, res, next) => {
  const { id } = req.params;
  const tuitToUpdate = await Tuit.findByIdAndUpdate(id);
  try {
    if (!tuitToUpdate) {
      debug(chalk.redBright("Couldn't find the requested tuit"));
      const error = new Error("Couldn't find the requested tuit");
      error.code = 404;
      next(error);
    } else {
      debug(chalk.green(`Tuit with id: ${id}, updated`));
      res.status(200).json({ tuitToUpdate });
    }
  } catch (error) {
    debug(chalk.red(`Something went wrong with the request: ${error.message}`));
    error.code = 400;
    next(error);
  }
};

module.exports = { getAllTuits, createTuit, updateTuit };
