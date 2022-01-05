const express = require("express");
require("dotenv").config();

const db = require("./database/connection");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const messageRoute = require("./routes/messageRoute");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(expressValidator());

//routes
app.use("/api", messageRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});
