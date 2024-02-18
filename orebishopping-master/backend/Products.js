const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  imageURL: String,
  category: String,
  description: String,
});

module.exports = mongoose.model("products", ProductSchema);
