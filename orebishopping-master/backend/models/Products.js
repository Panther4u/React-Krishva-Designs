const mongoose = require("mongoose");

// Product schema and model
const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  image: String,
});

const Product = mongoose.model("Products", productSchema);

