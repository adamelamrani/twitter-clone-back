require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const tuitahRouter = require("./routers/tuitahRouter");

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use("/", tuitahRouter);

module.exports = app;
