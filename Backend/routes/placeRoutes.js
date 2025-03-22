
const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

// ✅ جلب جميع الأماكن
router.get("/", placeController.getAllPlaces);

// ✅ جلب عدد الأماكن
router.get("/count", placeController.getPlaceCount);

// ✅ جلب مكان حسب الـ ID
router.get("/:id", placeController.getPlaceById);

// ✅ إضافة مكان جديد
router.post("/", placeController.addPlace);

// ✅ جلب الأماكن حسب المدينة
router.get("/city/:city", placeController.getPlacesByCity);

// ✅ جلب الأماكن حسب التصنيف
router.get("/category/:category", placeController.getPlacesByCategory);

// ✅ جلب الأماكن حسب الموسم
router.get("/season/:season", placeController.getPlacesBySeason);

// ✅ فلترة الأماكن
router.get("/filter", placeController.getPlaces);

// ✅ فلترة الأماكن مع الترقيم
router.get("/filtered", placeController.getFilteredPlaces);


// router.get("/suitable-options",placeController.getUniqueSuitableFor); // استخدمها كـ callback function


module.exports = router;
