const express = require("express");
const BookSchemaRouter = express.Router();
const path = require("path");
const BookSchema = require("../models/BookSchema");

BookSchemaRouter.route("*").get((req, res) => {
  const file = path.join(__dirname, "../build/index.html");
  res.sendFile(file);
});


BookSchemaRouter.route("/").get(function(req, res) {
  console.log("--- /");
  BookSchema.find((err, data) => {
    err ? console.log("--- error in finding Schema", error) : res.json(data);
  });
});

BookSchemaRouter.route("/add/").post(function(req, res) {
  console.log("--- /add");
  BookSchema.create(req.body).then((data) => {
    res.json(data);
  });
});

BookSchemaRouter.route("/edit/:id").get(function(req, res) {
  const { id } = req.params;
  console.log("--- /edit/:id");
  BookSchema.findById(id, (err, book) => {
    res.json(book);
  });
});

BookSchemaRouter.route("/update/:id").post((req, res) => {
  BookSchema.findById(req.params.id, (err, book) => {
    book.title = req.body.title;
    book.author = req.body.author;
    book.descr = req.body.descr;
    book.save().then(() => {
      res.json("Update is ready");
    });
  });
});

BookSchemaRouter.route("/delete/:id").get((req, res) => {
  const { id } = req.params;
  BookSchema.findByIdAndRemove(id, (err, book) => {
    res.json("Deleted");
  });
});



module.exports = BookSchemaRouter;
