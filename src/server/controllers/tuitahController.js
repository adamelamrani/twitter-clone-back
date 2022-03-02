const debug = require("chalk");
const chalk = require("chalk");
const Tuit = require("../../db/models/Tuit");

const getAllTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find();
    debug(chalk.green("Tuitah List"));
    res.statuts(200).json({ tuits });
  } catch (error) {
    debug(chalk.red("Error"));
    error.status = 400;
    next(error);
  }
};

module.exports = getAllTuits;
