const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
// const socketIO = require("socket.io");

const { mongoLocal, mongoReal } = require("./database/db");
const PORT = process.env.PORT || 5000;
const db = process.env.MONGOLAB_URI || mongoLocal;
const BookSchemaRouter = require("./routes/BookSchemaRouter");

mongoose.connect(db).then(
  () => {
    console.log("--- mongo is up as", db);
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
app.use(express.static(path.join(__dirname, '../build')));

const server = http.createServer(app);

// const io = socketIO(server);

// io.on("connection", (socket) => {
  // console.log("User connected");

  // socket.on("test", (data) => {});
  //
  // io.sockets.emit("serverTest", { test: "Hello world" });
  //
  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
// });

server.listen(PORT, () => {
  console.log("--- success on port", PORT);
});
