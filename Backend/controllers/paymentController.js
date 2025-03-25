// const Payment = require("../models/Payment");
// // const SubscriptionCard = require("../models/SubscriptionCard");
// const User = require("../models/user");

// exports.createPayment = async (req, res) => {
//   try {
//     const { subscriber_id, subscriptionCard_id, payment_method } = req.body;

//     if (!subscriber_id || !subscriptionCard_id || !payment_method) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const subscriptionCard = await SubscriptionCard.findById(subscriptionCard_id);
//     if (!subscriptionCard) {
//       return res.status(404).json({ error: "Subscription card not found" });
//     }

//     // تحويل السعر إلى رقم (مثلاً 50 دولار)
//     const amount = parseFloat(subscriptionCard.price.replace("$", ""));

//     const paymentData = {
//       subscriber: subscriber_id,
//       subscriptionCard: subscriptionCard_id,
//       amount,
//       payment_method,
//       payment_status: "Completed",
//     };

//     const payment = await Payment.create(paymentData);

//     // استخراج مدة الاشتراك (مثلاً عدد الأشهر) من subscriptionCard.duration
//     const durationMatch = subscriptionCard.duration.match(/\d+/);
//     if (!durationMatch) {
//       throw new Error("No numeric value found in duration");
//     }
    
//     const durationNumber = parseInt(durationMatch[0], 10);
//     if (isNaN(durationNumber)) {
//       throw new Error("Invalid duration value");
//     }
    
//     const subscriptionExpiry = new Date();
//     subscriptionExpiry.setMonth(subscriptionExpiry.getMonth() + durationNumber);

//     await User.findByIdAndUpdate(subscriber_id, {
//       subscriptionPlan: subscriptionCard.title,
//       subscriptionExpiry,
//     });

//     return res
//       .status(201)
//       .json({ message: "Payment recorded successfully", payment });
//   } catch (error) {
//     console.error("Error creating payment:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };


// controllers/paymentController.js


const Payment = require("../models/Payment");
const Place = require("../models/places");
const User = require("../models/User");

exports.createPayment = async (req, res) => {
  try {
    const { userId, placeId, paymentMethod } = req.body;

    if (!userId || !placeId || !paymentMethod) {
      return res.status(400).json({ error: "جميع الحقول مطلوبة" });
    }

    // التحقق من صحة المكان
    const place = await Place.findByPk(placeId);
    if (!place) {
      return res.status(404).json({ error: "المكان غير موجود" });
    }

    // إنشاء عملية الدفع
    const payment = await Payment.create({
      userId,
      placeId,
      amount: place.price,
      paymentMethod,
      status: "completed",
    });

    res.status(201).json({ message: "تمت عملية الدفع بنجاح", payment });
  } catch (error) {
    console.error("خطأ في إنشاء الدفع:", error);
    res.status(500).json({ error: "خطأ في الخادم الداخلي" });
  }
};
