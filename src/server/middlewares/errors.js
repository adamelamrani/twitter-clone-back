const chalk = require("chalk");
const debug = require("debug")("Tuitah:Errors:");

const errorNotFound = (req, res) => {
  res.status(404);
  res.json({ error: true, message: "Resoure not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug(chalk.redBright(`Something went wrong: ${err.message}`));
  const errorCode = err.code ?? 500;
  const errorMessage = err.code ? err.message : "General error";
  res.status(errorCode);
  res.json({ error: true, message: errorMessage });
};

module.exports = { errorNotFound, generalError };
