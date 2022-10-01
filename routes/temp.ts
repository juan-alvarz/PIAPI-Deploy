import { temperamento } from "../controllers/temp";
const { Router } = require("express");
const router = Router();

router.get("/", temperamento);

/* 
router.get("/", getDogs);
router.post("/", createDog);
router.get("/:id", getDogById);
router.delete("/:id", deleteDog);
 */
export = router;
