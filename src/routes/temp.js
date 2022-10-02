const { temperament } = require("../controllers/temp.js");
const { Router } = require("express");
const router = Router();

router.get("/", temperament);

module.exports = router;
