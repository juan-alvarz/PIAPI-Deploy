require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo.js");
const { URL_API } = require("./config/softcredentials");

const app = express();

app.use(express.json());
/* app.use(
  cors({
    origin: URL_API,
    credentials: true,
  })
); */

const port = process.env.PORT || 3001;

app.use("/", require("./routes"));

app.listen(port, () => console.log(`%s listening on port: ${port}`));

dbConnect();
