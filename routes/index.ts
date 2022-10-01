const fs = require("fs");
const express = require("express");
const router = express.Router();

const PATH_ROUTES: string = __dirname;

const removeExtension = (filename: string) => {
  return filename.split(".").shift();
};

const a = fs.readdirSync(PATH_ROUTES).filter((file: string) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

export = router;
