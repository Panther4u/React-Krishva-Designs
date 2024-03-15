const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    clientName: String,
    email: String,
    password: String,
    role: String,
    phone: Number,
    profileIcon: String,
});

module.exports = mongoose.model("user", UserSchema);
