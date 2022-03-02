const express = require("express");
const getAllTuits = require("../controllers/tuitahController");

const router = express.Router();

router.get("/list", getAllTuits);

module.exports = router;
