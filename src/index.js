require("dotenv").config();
const debug = require("debug")("Tuitah:root");
const chalk = require("chalk");
const connectDataBase = require("./db/index");
const upServer = require("./server/upServer");

const dbstring = process.env.MONGO_DB_STRING;
const port = process.env.PORT || 4000;

(async () => {
  try {
    await connectDataBase(dbstring);
    await upServer(port, app);
  } catch (error) {
    debug(chalk.red(`Error:`, error.message));
  }
})();
