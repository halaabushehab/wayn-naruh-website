const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  short_description: { type: String, required: true }, 
  detailed_description: { type: String, required: true }, 
  city: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  working_hours: { type: String, required: true },
  rating: { type: Number, default: 0 },
  ticket_price: { type: Number, required: true },
  categories: [{ type: String, required: true }], // قائمة الفئات (منتزهات، طبيعة..)
  best_season: { type: String, required: true }, // الموسم الأنسب للزيارة
  is_outdoor: { type: Boolean, required: true },
  is_free: { type: Boolean, required: true },
  suitable_for: [{ type: String, required: true }], // الفئات المستهدفة (عائلات، أطفال..)
  contact: {
    phone: { type: String, required: false }, // رقم الهاتف
    website: { type: String, required: false } // الموقع الإلكتروني
  },
  map_link: { type: String, required: false }, // رابط خرائط جوجل
  images: [{ type: String, required: true }], // صور للمكان
  gallery: [{ type: String, required: false }] // ألبوم صور إضافي
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
