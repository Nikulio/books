const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String },
  descr: { type: String },
  author: { type: String },
  createdAt: { type: Number },
});

module.exports = mongoose.model("BookSchema", BookSchema);
