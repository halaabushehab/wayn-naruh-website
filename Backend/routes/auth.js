const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { 
    register,
     login,  
    getAllUsers,
    getUserById,
    deleteUser,
    getUserProfile, } = 
    require('../controllers/authController'); // استيراد الدوال

const router = express.Router();






// ✅ انشاء حساب كل المستخدمين
router.post('/register', register);
// ✅ تسجيل الدخول  كل المستخدمين
router.post('/login', login);

// ✅ جلب كل المستخدمين
router.get("/all", getAllUsers);

// ✅ جلب مستخدم حسب الـ ID
router.get("/:id", getUserById);

// ✅ جلب بروفايل المستخدم (يحتاج تسجيل دخول)
router.get("/profile/me", authMiddleware, getUserProfile);

// ✅ تعديل بيانات المستخدم
// router.put("/edit/:id", updateUser);

// ✅ حذف المستخدم (Soft Delete)
router.delete("/delete/:id", deleteUser);


module.exports = router;