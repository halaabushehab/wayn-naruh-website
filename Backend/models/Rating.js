const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // تقييم من 1 إلى 5
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rating", RatingSchema);
