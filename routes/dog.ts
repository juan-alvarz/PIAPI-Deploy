import { createDog, deleteDog, getDogById, getDogs } from "../controllers/dog";

const express = require("express");
const router = express.Router();

router.get("/", getDogs);
router.post("/", createDog);
router.get("/:id", getDogById);
router.delete("/:id", deleteDog);

export = router;
