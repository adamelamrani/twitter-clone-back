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

module.exports = { getAllTuits, createTuit };
