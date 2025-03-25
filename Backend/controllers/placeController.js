// const Place = require("../models/places");
// const mongoose = require("mongoose");


// // ✅ جلب جميع الأماكن
// exports.getAllPlaces = async (req, res) => {
//   try {
//     const places = await Place.find();
//     res.status(200).json(places);
//   } catch (error) {
//     res.status(500).json({ message: "خطأ في جلب الأماكن", error });
//   }
// };


// // ✅ جلب الأماكن حسب المدينة
// exports.getPlacesByCity = async (req, res) => {
//   try {
//     const { city } = req.params;
//     const places = await Place.find({ city: city });
//     res.status(200).json(places);
//   } catch (error) {
//     res.status(500).json({ message: "خطأ في جلب الأماكن لهذه المدينة", error });
//   }
// };



// exports.addPlace = async (req, res) => {
//     try {
//       const newPlace = new Place(req.body);
//       await newPlace.save();
//       res.status(201).json({ message: "✅ Place added successfully!", place: newPlace });
//     } catch (error) {
//       res.status(400).json({ error: "❌ Failed to add place", details: error.message });
//     }
//   };

  

// // ✅ فلترة الأماكن حسب التصنيف والفئة المناسبة
// exports.filterPlaces = async (req, res) => {
//   try {
//     let filters = {};

//     // فلترة حسب المدينة
//     if (req.query.city) {
//       filters.city = req.query.city;
//     }

//     // فلترة حسب التصنيف (المتاحف فقط)
//     if (req.query.category) {
//       filters.categories = { $in: [req.query.category] }; // يبحث داخل المصفوفة
//     }

//     const places = await Place.find(filters);
//     res.status(200).json(places);
//     console.log("📌 Applied Filters:", filters);

    
//   } catch (error) {
//     res.status(500).json({ error: "❌ Error fetching places", details: error.message });
//   }
// };



// // ✅ جلب تفاصيل المكان حسب الـ ID

// exports.getPlaceById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("📌 Received ID:", id);

//     // التحقق من صحة الـ ID
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "❌ المعرف غير صالح." });
//     }

//     // جلب المكان من قاعدة البيانات
//     const place = await Place.findById(id);
    
//     if (!place) {
//       return res.status(404).json({ message: "❌ المكان غير موجود." });
//     }

//     // ✅ إرسال البيانات بدون الحاجة للتحقق من الموسم
//     res.status(200).json(place);
//   } catch (error) {
//     console.error("❌ خطأ في السيرفر:", error);
//     res.status(500).json({ message: "❌ حدث خطأ أثناء جلب تفاصيل المكان.", error: error.message });
//   }
// };


// // ✅ جلب عدد الأماكن من قاعدة البيانات
// exports.getPlaceCount = async (req, res) => {
//   try {
//     const count = await Place.countDocuments(); // حساب عدد الأماكن
//     res.status(200).json({ count });
//   } catch (error) {
//     console.error("❌ خطأ في جلب عدد الأماكن:", error);
//     res.status(500).json({ message: "❌ خطأ في السيرفر", error: error.message });
//   }
// };


// // ✅ جلب التصنيفات من قاعدة البيانات

// exports.getPlacesByCategory = async (req, res) => {
//   try {
//     const { category } = req.params; // ✅ استخراج الفئة من الرابط
//     console.log("🔍 البحث عن أماكن في الفئة:", category); // ✅ التحقق من الفئة المستلمة

//     const places = await Place.find({ categories: { $in: [category.trim()] } });

//     if (places.length === 0) {
//         return res.status(404).json({ message: "لا توجد أماكن متاحة لهذه الفئة" });
//     }

//     res.status(200).json(places);
// } catch (error) {
//     console.error("❌ خطأ في جلب الأماكن:", error);
//     res.status(500).json({ message: "حدث خطأ في الخادم" });
// }
// };


// //فلتره

// exports.getPlaces = async (req, res) => {
//     try {
//         const { city, category, ticket_price } = req.query;

//         // بناء كائن الفلترة
//         let filter = {};

//         if (city) filter.city = city;
//         if (category) filter.category = category;

//         // فلترة سعر التذكرة
//         if (ticket_price) {
//             if (ticket_price === "free") {
//                 filter.ticket_price = 0;
//             } else if (ticket_price === "less5") {
//                 filter.ticket_price = { $lt: 5 }; // أقل من 5 دنانير
//             } else if (ticket_price === "more5") {
//                 filter.ticket_price = { $gte: 5 }; // 5 دنانير فأكثر
//             }
//         }

//         // جلب الأماكن المفلترة من قاعدة البيانات
//         const places = await Place.find(filter);

//         res.status(200).json(places);
//     } catch (error) {
//         res.status(500).json({ message: "خطأ في جلب الأماكن", error: error.message });
//     }
// };

// // ✅ جلب التصنيفات الفصول  من قاعدة البيانات

// exports.getPlacesBySeason = async (req, res) => {
//   try {
//       const { season } = req.params;
      
//       // المواسم المتاحة باللغة العربية
//       const validSeasons = ["صيف", "شتاء", "ربيع", "خريف"];
//       if (!validSeasons.includes(season)) {
//           return res.status(400).json({ message: "الموسم غير صالح." });
//       }

//       // جلب الأماكن من قاعدة البيانات التي تتطابق مع الموسم أو تعمل طوال السنة
//       const places = await Place.find({
//           $or: [
//               { best_season: { $regex: season, $options: "i" } }, // البحث بدون حساسية لحالة الأحرف
//               { best_season: "طوال السنة" } // تضمين الأماكن التي تعمل طوال السنة
//           ]
//       });

//       // التحقق إذا لم يتم العثور على أماكن
//       if (places.length === 0) {
//           return res.status(404).json({ message: "لا توجد أماكن لهذا الموسم." });
//       }

//       res.status(200).json(places);
//   } catch (error) {
//       console.error("خطأ أثناء جلب الأماكن:", error);
//       res.status(500).json({ message: "حدث خطأ أثناء جلب الأماكن." });
//   }
// };




// //  الكونترولر مع الفلترة والترقيم



// exports.getFilteredPlaces = async (req, res) => {
//   try {
//     let { city, category, season, page = 1, limit = 8 } = req.query;

//     let filters = {};

//     // ✅ تطبيق الفلترة إذا تم إرسال قيم محددة في الطلب
//     if (city) filters.city = city;
//     if (category) filters.categories = { $in: [category] };
//     if (season) {
//       filters.$or = [
//         { best_season: { $regex: season, $options: "i" } }, // تطابق الموسم
//         { best_season: "طوال السنة" } // تضمين الأماكن التي تعمل طوال السنة
//       ];
//     }

//     // ✅ تحويل القيم الرقمية للصفحة والحد
//     page = parseInt(page);
//     limit = parseInt(limit);
//     const skip = (page - 1) * limit; // حساب عدد العناصر التي يجب تخطيها

//     // ✅ البحث في قاعدة البيانات مع الفلترة والتقسيم إلى صفحات
//     const places = await Place.find(filters).skip(skip).limit(limit);
//     const totalPlaces = await Place.countDocuments(filters); // حساب العدد الكلي للنتائج

//     // ✅ إنشاء بيانات الاستجابة
//     res.status(200).json({
//       totalPlaces, // إجمالي عدد الأماكن بعد الفلترة
//       totalPages: Math.ceil(totalPlaces / limit), // حساب عدد الصفحات الكلي
//       currentPage: page,
//       places
//     });

//   } catch (error) {
//     console.error("❌ خطأ أثناء جلب الأماكن:", error);
//     res.status(500).json({ message: "❌ حدث خطأ في الخادم", error: error.message });
//   }
// };








const Place = require("../models/places");
const mongoose = require("mongoose");

// ✅ جلب جميع الأماكن
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: "خطأ في جلب الأماكن", error });
  }
};

// ✅ جلب عدد الأماكن
exports.getPlaceCount = async (req, res) => {
  try {
    const count = await Place.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: "خطأ في جلب عدد الأماكن", error: error.message });
  }
};

// ✅ إضافة مكان جديد
exports.addPlace = async (req, res) => {
  try {
    const { name, city, categories, ticket_price, rating } = req.body;

    if (!name || !city || !categories || ticket_price == null) {
      return res.status(400).json({ message: "❌ جميع الحقول المطلوبة يجب تعبئتها." });
    }

    if (!Array.isArray(categories)) {
      return res.status(400).json({ message: "❌ التصنيفات يجب أن تكون مصفوفة." });
    }

    if (typeof ticket_price !== "number" || ticket_price < 0) {
      return res.status(400).json({ message: "❌ سعر التذكرة غير صالح." });
    }

    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).json({ message: "❌ التقييم يجب أن يكون بين 1 و 5." });
    }

    const newPlace = new Place(req.body);
    await newPlace.save();
    res.status(201).json({ message: "✅ تم إضافة المكان بنجاح!", place: newPlace });
  } catch (error) {
    res.status(400).json({ error: "❌ فشل في إضافة المكان", details: error.message });
  }
};




// ✅ جلب تفاصيل المكان حسب الـ ID
exports.getPlaceById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "❌ المعرف غير صالح." });
    }

    const place = await Place.findById(id);
    
    if (!place) {
      return res.status(404).json({ message: "❌ المكان غير موجود." });
    }

    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ message: "❌ حدث خطأ أثناء جلب تفاصيل المكان.", error: error.message });
  }
};

// ✅ جلب الأماكن حسب المدينة
exports.getPlacesByCity = async (req, res) => {
  try {
    const { city } = req.params;
    const places = await Place.find({ city });
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: "خطأ في جلب الأماكن لهذه المدينة", error });
  }
};

// ✅ جلب الأماكن حسب التصنيف
exports.getPlacesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const places = await Place.find({ categories: { $in: [category.trim()] } });

    if (places.length === 0) {
      return res.status(404).json({ message: "لا توجد أماكن متاحة لهذه الفئة" });
    }

    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ في الخادم" });
  }
};

// ✅ جلب الأماكن حسب الموسم
exports.getPlacesBySeason = async (req, res) => {
  try {
    const { season } = req.params;
    const validSeasons = ["صيف", "شتاء", "ربيع", "خريف"];

    if (!validSeasons.includes(season)) {
      return res.status(400).json({ message: "الموسم غير صالح." });
    }

    const places = await Place.find({
      $or: [{ best_season: { $regex: season, $options: "i" } }, { best_season: "طوال السنة" }]
    });

    if (places.length === 0) {
      return res.status(404).json({ message: "لا توجد أماكن لهذا الموسم." });
    }

    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء جلب الأماكن." });
  }
};

// ✅ فلترة الأماكن حسب التصنيف، المدينة، السعر
exports.getPlaces = async (req, res) => {
  try {
    const { city, category, ticket_price, page = 1, limit = 10 } = req.query;
    let filter = {};

    if (city) filter.city = city;
    if (category) filter.categories = { $in: [category] };
    if (ticket_price) {
      const price = Number(ticket_price);
      if (!isNaN(price)) filter.ticket_price = price;
    }

    const places = await Place.find(filter)
      .limit(limit * 1) // تحويل limit إلى عدد صحيح
      .skip((page - 1) * limit)
      .exec();

    const total = await Place.countDocuments(filter);

    res.status(200).json({
      total,
      page,
      totalPages: Math.ceil(total / limit),
      places,
    });
  } catch (error) {
    res.status(500).json({ message: "خطأ في جلب الأماكن", error: error.message });
  }
};


// ✅ الفلترة مع الترقيم (Pagination)
exports.getFilteredPlaces = async (req, res) => {
  try {
    let { city, category, season, page = 1, limit = 8 } = req.query;
    let filters = {};

    if (city) filters.city = city;
    if (category) filters.categories = { $in: [category] };
    if (season) {
      filters.$or = [
        { best_season: { $regex: season, $options: "i" } },
        { best_season: "طوال السنة" }
      ];
    }

    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;

    const places = await Place.find(filters).skip(skip).limit(limit);
    const totalPlaces = await Place.countDocuments(filters);

    res.status(200).json({
      totalPlaces,
      totalPages: Math.ceil(totalPlaces / limit),
      currentPage: page,
      places
    });

  } catch (error) {
    res.status(500).json({ message: "❌ حدث خطأ في الخادم", error: error.message });
  }
};

// exports.getUniqueSuitableFor = async (req, res) => {
//   try {
//     const uniqueValues = await Place.distinct("suitable_for");
//     res.json(uniqueValues);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching data" });
//   }
// };



