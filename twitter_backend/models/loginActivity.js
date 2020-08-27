const ObjectId = require("mongodb").ObjectID;
const mongoose = require("mongoose");

let users = new mongoose.Schema(
  {
    username: String,
    first_name: String,
    last_name: String,
    email_id: String,
    password: String,
  },
  {
    versionKey: false,
  }
);

var model = mongoose.model("users", users, "users");
module.exports = model;
