const express = require("express");
const { addRating, getAverageRating } = require("../controllers/ratingController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, addRating);
router.get("/average/:placeId", getAverageRating);

module.exports = router;
