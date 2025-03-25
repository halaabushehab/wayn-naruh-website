// // models/Payment.js
// const mongoose = require("mongoose");

// const PaymentSchema = new mongoose.Schema(
//   {
//     subscriber: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     subscriptionCard: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "SubscriptionCard",
//       required: true,
//     },
//     amount: {
//       type: Number,
//       required: true,
//     },
//     payment_method: {
//       type: String,
//       required: true,
//     },
//     payment_status: {
//       type: String,
//       required: true,
//       default: "Completed",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Payment", PaymentSchema);









const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subscriptionCard: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubscriptionCard",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    payment_method: {
      type: String,
      enum: ["card", "paypal", "zaincash"],
      required: true,
    },
    payment_status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
