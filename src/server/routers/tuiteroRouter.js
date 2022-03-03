const express = require("express");
const getAllTuitero = require("../controllers/tuiteroController");

const router = express.Router();

router.get("/allTuitero", getAllTuitero);

module.exports = router;
