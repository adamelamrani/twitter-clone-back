const express = require("express");
const { getAllTuits, createTuit } = require("../controllers/tuitahController");

const router = express.Router();

router.get("/list", getAllTuits);

router.post("/new", createTuit);

module.exports = router;
