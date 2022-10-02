const express = require("express");
const {
  getDogs,
  getDogById,
  createDog,
  deleteDog,
} = require("../controllers/dogs.js");
const router = express.Router();

router.get("/", getDogs);
router.get("/:id", getDogById);
router.delete("/:id", deleteDog);
router.post("/", createDog);

module.exports = router;
