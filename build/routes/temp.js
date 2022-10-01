"use strict";
const temp_1 = require("../controllers/temp");
const { Router } = require("express");
const router = Router();
router.get("/", temp_1.temperamento);
module.exports = router;
