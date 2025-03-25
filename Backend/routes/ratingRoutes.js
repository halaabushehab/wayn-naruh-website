// const express = require('express');
// const router = express.Router();
// const ratingController = require('../controllers/ratingController');

// // 📌 إضافة تقييم جديد
// router.post('/', ratingController.addRating);

// // 📌 جلب جميع التقييمات لمكان معين مع حساب المتوسط
// router.get('/:placeId', ratingController.getRatingsForPlace);

// module.exports = router;


const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// إنشاء عملية دفع
router.post("/pay", paymentController.createPayment);

module.exports = router;
