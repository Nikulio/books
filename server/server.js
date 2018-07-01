const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const { mongoLocal } = require("./database/db");
const PORT = process.env.PORT || 5000;
const BookSchemaRouter = require("./routes/BookSchemaRouter");

mongoose.connect(mongoLocal).then(
  () => {
    console.log("--- mongo is up");
  },
  (err) => {
    console.log("--- db error is", err);
  },
);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", BookSchemaRouter);


app.listen(PORT, () => {
  console.log("--- success");
});
