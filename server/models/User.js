const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
  },
  role: {
    type: String,
    default: "user", // or "admin"
  },
});

module.exports = mongoose.model("User", userSchema);
