const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require("dotenv").config();
const mongoose = require('mongoose');


const register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log("🔴 Received data:", req.body);

    // 🔴 التحقق من تعبئة جميع الحقول
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // 🔹 التحقق مما إذا كان البريد الإلكتروني مستخدمًا بالفعل
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });

        await user.save();
        console.log("✅ User successfully registered:", user.username); // ✅ تأكيد التسجيل

        res.status(201).json({
            message: "User registered successfully",
            username: user.username, // ✅ إرسال الاسم فقط
        });

    } catch (error) {
        console.error("❌ Registration error:", error);
        res.status(500).json({ message: "Registration failed", error: error.message });
    }
};




const login = async (req, res) => {
    const { email, password } = req.body;
    console.log("🔵 Login attempt with email:", email);

    try {
        const user = await User.findOne({ email });

        // التأكد من وجود المستخدم والتحقق من كلمة المرور
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // 🔹 إنشاء التوكن مع صلاحية لمدة 24 ساعة
        const token = jwt.sign({ userId: user.id, username: user.username ,email: user.email  }, process.env.JWT_SECRET, { expiresIn: "24h" });

        // 🔹 إرسال التوكن في الكوكيز
        res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

        console.log("✅ User logged in:", user.username);

        return res.json({
            message: "Logged in",
            username: user.username, // ✅ إرسال اسم المستخدم للـ React
            token, // ✅ إرسال التوكن إذا كان سيتم تخزينه في `localStorage`
            email: user.email,
            userId: user._id,
        });

    } catch (error) {
        console.error("❌ Login error:", error);
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};




// Get all users
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({ isdeleted: false }).select(
        "-password -otp -otpExpiry"
      );
      const userCount = users.length;
  
      res.status(200).json({
        message: "Users fetched successfully",
        users,
        userCount,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Get a single user by ID
  const getUserById = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
  
    try {
      const user = await User.findById(id).select("-password -otp -otpExpiry");
  
      if (!user || user.isdeleted) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User fetched successfully", user });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Get user profile (based on token user ID)
  const getUserProfile = async (req, res) => {
    try {
      const userId = req.user.id; // يتم استخراجه من التوكن بعد المصادقة
  
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
  
      const user = await User.findById(userId).select("-password -otp -otpExpiry");
  
      if (!user || user.isdeleted) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "Profile fetched successfully", user });
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Edit user details
  const editUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
  
    try {
      const user = await User.findById(id);
  
      if (!user || user.isdeleted) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Update only the fields that are provided
      if (updates.username) user.username = updates.username;
      if (updates.email) user.email = updates.email;
      if (updates.password) {
        user.password = await bcrypt.hash(updates.password, 10);
      }
      if (updates.profilePicture) user.profilePicture = updates.profilePicture;
      if (updates.role) user.role = updates.role;
      if (updates.isdeleted !== undefined) user.isdeleted = updates.isdeleted;
      if (updates.isActivated !== undefined)
        user.isActivated = updates.isActivated;
  
      // Save updated user
      await user.save();
  
      const userResponse = user.toObject();
      delete userResponse.password;
      delete userResponse.otp;
      delete userResponse.otpExpiry;
  
      res.status(200).json({ message: "User updated successfully", user: userResponse });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Soft delete a user
  const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
  
    try {
      const user = await User.findById(id).select("isdeleted");
  
      if (!user || user.isdeleted) {
        return res.status(404).json({ message: "User not found" });
      }
  
      await User.findByIdAndUpdate(id, { isdeleted: true }, { new: true });
  
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };




module.exports = {
    register,
    login,
    getAllUsers,
    getUserById,
    editUser,
    deleteUser,
    getUserProfile,
};