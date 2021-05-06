const mongoose = require("mongoose");
const User = require("./userModel");

const reviewSchema = new mongoose.Schema({
  tacoId: Number,
  body: String,
  rating: Number,
  userName: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
