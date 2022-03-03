const express = require("express");
const {
  getAllTuitero,
  createTuitero,
} = require("../controllers/tuiteroController");

const router = express.Router();

router.get("/allTuitero", getAllTuitero);
router.post("/new", createTuitero);

module.exports = router;
