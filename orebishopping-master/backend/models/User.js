const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  role: String,
});

module.exports = mongoose.model("user", UserSchema);
