const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require('./routes/auth');
const placeRoutes = require("./routes/placeRoutes");
const messageroutes = require("./routes/messageroutes");
const commentRoutes = require("./routes/commentRoutes");
const ratingRoutes = require('./routes/ratingRoutes');
// const profileRoutes = require("./routers/profileRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const cookieParser = require('cookie-parser');
const cors = require('cors');
require("dotenv").config();
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 5000;

// تفعيل CORS في البداية:
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'], // Add other HTTP methods as needed
    credentials: true // If you need to include cookies
}));




app.use(cookieParser());
app.use(express.json());


require('dotenv').config(); // تحميل متغيرات البيئة من .env

const transporter = nodemailer.createTransport({
  service: "gmail", // أو أي خدمة بريد أخرى تستخدمها
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD,
  },
});

module.exports = transporter;





// 🛣️ ربط الراوتر الخاص بالأماكن
connectDB();
app.use("/api/auth", authRoutes);
app.use("/places", placeRoutes);
app.use("/api", messageroutes);
// app.use("/comments", commentRoutes);
app.use('/api/ratings', ratingRoutes);
// app.use("/api/profile", profileRoutes);
app.use("/api", paymentRoutes);

// في حال كنت تستخدم نقطة نهاية تسجيل منفصلة للتجربة:
app.post('/api/auth/register', (req, res) => {
    console.log("🔴Received data:", req.body);
    // باقي كود التسجيل...
    res.status(201).json({ message: "User registered" });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});