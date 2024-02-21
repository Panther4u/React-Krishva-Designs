const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    clientName: String,
    email: { type: String, unique: true },
    password: String,
    // address: String,
    // city: String,
    // country: String,
    // zip: String,
    role: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchema);