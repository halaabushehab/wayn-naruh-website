const Rating = require("../models/Rating");
const Place = require('../models/places');

exports.addRating = async (req, res) => {
  try {
    const { placeId, rating } = req.body;
    const userId = req.user.id; // يُفترض أنك تستخدم مصادقة JWT

    if (rating < 1 || rating > 5) return res.status(400).json({ message: "التقييم يجب أن يكون بين 1 و 5" });

    const place = await Place.findById(placeId);
    if (!place) return res.status(404).json({ message: "المكان غير موجود" });

    const existingRating = await Rating.findOne({ user: userId, place: placeId });

    if (existingRating) {
      existingRating.rating = rating;
      await existingRating.save();
      return res.json(existingRating);
    }

    const newRating = new Rating({ user: userId, place: placeId, rating });
    await newRating.save();

    res.status(201).json(newRating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// حساب متوسط التقييم لمكان معين
exports.getAverageRating = async (req, res) => {
  try {
    const { placeId } = req.params;

    const ratings = await Rating.find({ place: placeId });

    if (ratings.length === 0) return res.json({ average: 0 });

    const average = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;

    res.json({ average: average.toFixed(1) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
