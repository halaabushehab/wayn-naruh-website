const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },  // رقم الهاتف
    avatar: { type: String, required: false }, // صورة الملف الشخصي
    bio: { type: String, required: false },    // السيرة الذاتية
    birthdate: { type: Date, required: false }, // تاريخ الميلاد
    joinDate: { type: Date, default: Date.now }, // تاريخ الانضمام
    city: { type: String, required: false }  // المدينة

});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
