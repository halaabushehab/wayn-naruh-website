// const express = require("express");
// const router = express.Router();
// const { removeComment } = require("../controllers/commentController"); // استدعاء الكونترولر

// // مسار حذف مقال من savedArticles
// router.delete("/remove-comment/:commentId", removeComment);

// module.exports = router;


const express = require("express");
const { addComment, getCommentsByPlace } = require("../controllers/commentController");
const authMiddleware = require("../middleware/authMiddleware"); // تأكد من وجود مصادقة

const router = express.Router();

router.post("/add", authMiddleware, addComment);
router.get("/:placeId", getCommentsByPlace);

module.exports = router;
