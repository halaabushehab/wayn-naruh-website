const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// إنشاء عملية دفع
router.post("/pay", paymentController.createPayment);

module.exports = router;
