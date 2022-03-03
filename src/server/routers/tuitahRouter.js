const express = require("express");
const {
  getAllTuits,
  createTuit,
  updateTuit,
} = require("../controllers/tuitahController");

const router = express.Router();

router.get("/list", getAllTuits);
router.patch("/:id", updateTuit);
router.post("/new", createTuit);

module.exports = router;
