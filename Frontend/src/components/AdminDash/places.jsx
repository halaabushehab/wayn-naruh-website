"use client"

import { useState } from "react"

export default function PlacesTab() {
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: "شاطئ الغروب",
      location: "الإسكندرية",
      description: "شاطئ جميل على البحر المتوسط",
      contact: "+201234567890",
      city: "الإسكندرية",
      working_hours: "10:00 - 22:00",
      rating: 4.5,
      categories: ["شواطئ", "ترفيه"],
      season: "صيف",
      is_outdoor: true,
      is_free: false,
      website: "www.sunset-beach.com",
      suitable_for: ["عائلات", "أصدقاء"],
      submittedBy: "أحمد محمد",
      date: "2023-06-15",
      status: "pending",
      gallery: ["beach1.jpg", "beach2.jpg", "beach3.jpg"],
    },
    {
      id: 2,
      name: "جبل سيناء",
      location: "سيناء",
      description: "جبل تاريخي مقدس",
      contact: "+201234567891",
      city: "سانت كاترين",
      working_hours: "طوال اليوم",
      rating: 4.8,
      categories: ["جبال", "سياحة دينية"],
      season: "ربيع",
      is_outdoor: true,
      is_free: true,
      website: "www.sinai-mountain.com",
      suitable_for: ["مغامرون", "سياح"],
      submittedBy: "محمود خالد",
      date: "2023-06-14",
      status: "approved",
      gallery: ["sinai1.jpg", "sinai2.jpg"],
    },
    {
      id: 3,
      name: "واحة سيوة",
      location: "مطروح",
      description: "واحة طبيعية خلابة",
      contact: "+201234567892",
      city: "سيوة",
      working_hours: "طوال اليوم",
      rating: 4.7,
      categories: ["واحات", "طبيعة"],
      season: "خريف",
      is_outdoor: true,
      is_free: false,
      website: "www.siwa-oasis.com",
      suitable_for: ["عائلات", "مستكشفون"],
      submittedBy: "سارة علي",
      date: "2023-06-13",
      status: "approved",
      gallery: ["siwa1.jpg", "siwa2.jpg", "siwa3.jpg"],
    },
    {
      id: 4,
      name: "الأهرامات",
      location: "الجيزة",
      description: "أحد عجائب الدنيا السبع",
      contact: "+201234567893",
      city: "الجيزة",
      working_hours: "8:00 - 17:00",
      rating: 4.9,
      categories: ["آثار", "سياحة تاريخية"],
      season: "شتاء",
      is_outdoor: true,
      is_free: false,
      website: "www.pyramids.com",
      suitable_for: ["عائلات", "سياح", "مهتمون بالتاريخ"],
      submittedBy: "ليلى أحمد",
      date: "2023-06-12",
      status: "rejected",
      gallery: ["pyramids1.jpg", "pyramids2.jpg", "pyramids3.jpg"],
    },
  ])

  const [selectedPlace, setSelectedPlace] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  const approvePlace = (id) => {
    setPlaces(places.map((place) => (place.id === id ? { ...place, status: "approved" } : place)))
  }

  const rejectPlace = (id) => {
    setPlaces(places.map((place) => (place.id === id ? { ...place, status: "rejected" } : place)))
  }

  const viewDetails = (place) => {
    setSelectedPlace(place)
    setShowDetails(true)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">الأماكن المقترحة</h2>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الاسم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الموقع
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                مقدم من
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                التاريخ
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الحالة
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {places.map((place) => (
              <tr key={place.id}>
                <td className="px-6 py-4 whitespace-nowrap">{place.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{place.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{place.submittedBy}</td>
                <td className="px-6 py-4 whitespace-nowrap">{place.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      place.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : place.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {place.status === "approved"
                      ? "تمت الموافقة"
                      : place.status === "rejected"
                        ? "مرفوض"
                        : "قيد الانتظار"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {place.status === "pending" && (
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <button onClick={() => approvePlace(place.id)} className="text-green-600 hover:text-green-900">
                        قبول
                      </button>
                      <button onClick={() => rejectPlace(place.id)} className="text-red-600 hover:text-red-900">
                        رفض
                      </button>
                    </div>
                  )}
                  <button className="text-[#115173] hover:text-[#022C43]" onClick={() => viewDetails(place)}>
                    عرض
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Place Details Modal */}
      {showDetails && selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedPlace.name}</h3>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowDetails(false)}>
                  &times;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">الوصف</h4>
                    <p>{selectedPlace.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">الموقع</h4>
                      <p>{selectedPlace.location}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">المدينة</h4>
                      <p>{selectedPlace.city}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">التقييم</h4>
                      <p>{selectedPlace.rating} / 5</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">ساعات العمل</h4>
                      <p>{selectedPlace.working_hours}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">الموسم</h4>
                      <p>{selectedPlace.season}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">الموقع الإلكتروني</h4>
                      <p>{selectedPlace.website}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">معلومات الاتصال</h4>
                      <p>{selectedPlace.contact}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">التصنيفات</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPlace.categories.map((category, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">مناسب لـ</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPlace.suitable_for.map((suitable, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                          {suitable}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">في الهواء الطلق</h4>
                      <p>{selectedPlace.is_outdoor ? "نعم" : "لا"}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">مجاني</h4>
                      <p>{selectedPlace.is_free ? "نعم" : "لا"}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">معرض الصور</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedPlace.gallery.map((image, index) => (
                      <div key={index} className="bg-gray-200 rounded-md h-32 flex items-center justify-center">
                        <span className="text-gray-500">{image}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                {selectedPlace.status === "pending" && (
                  <>
                    <button
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      onClick={() => {
                        approvePlace(selectedPlace.id)
                        setShowDetails(false)
                      }}
                    >
                      قبول
                    </button>
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      onClick={() => {
                        rejectPlace(selectedPlace.id)
                        setShowDetails(false)
                      }}
                    >
                      رفض
                    </button>
                  </>
                )}
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  onClick={() => setShowDetails(false)}
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

