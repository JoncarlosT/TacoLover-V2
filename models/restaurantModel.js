const mongoose = require("mongoose");
const User = require("./userModel");
const Review = require("./reviewModel");

const restaurantSchema = new mongoose.Schema({
  title: String,
  images: String,
  description: String,
  location: String,
  geometry: {
    type: {
      enum: ["Point"],
      type: String,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Review,
    },
  ],
});

restaurantSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.review,
      },
    });
  }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
