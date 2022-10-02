require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo.js");
const { URL_API } = require("./config/softcredentials");
const { PORT } = require("./config/softcredentials.js");

const app = express();

app.use(express.json());
/* app.use(
  cors({
    origin: URL_API,
    credentials: true,
  })
); */

const port = PORT || 3001;

//app.use("/", require("./routes"));
app.use("/dogs", require("./routes/dogs.js"));

app.listen(port, () => console.log(`%s listening on port: ${port}`));

dbConnect();
