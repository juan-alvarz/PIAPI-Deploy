"use strict";
const dog_1 = require("../controllers/dog");
const express = require("express");
const router = express.Router();
router.get("/", dog_1.getDogs);
router.post("/", dog_1.createDog);
router.get("/:id", dog_1.getDogById);
router.delete("/:id", dog_1.deleteDog);
module.exports = router;
