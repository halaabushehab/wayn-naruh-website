"use client"

import { useState } from "react"

export default function BookingsTab() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "سارة علي",
      destination: "جبل سيناء",
      date: "2023-07-15",
      people: 2,
      status: "confirmed",
      paid: true,
    },
    {
      id: 2,
      customer: "محمود خالد",
      destination: "شرم الشيخ",
      date: "2023-07-20",
      people: 4,
      status: "pending",
      paid: false,
    },
    {
      id: 3,
      customer: "ليلى أحمد",
      destination: "الأقصر",
      date: "2023-08-05",
      people: 1,
      status: "confirmed",
      paid: true,
    },
    {
      id: 4,
      customer: "أحمد محمد",
      destination: "الغردقة",
      date: "2023-08-12",
      people: 3,
      status: "cancelled",
      paid: false,
    },
  ])

  const confirmBooking = (id) => {
    setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: "confirmed" } : booking)))
  }

  const cancelBooking = (id) => {
    setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: "cancelled" } : booking)))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">الحجوزات</h2>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                العميل
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الوجهة
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                التاريخ
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                عدد الأشخاص
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الحالة
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الدفع</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap">{booking.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.people}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {booking.status === "confirmed" ? "مؤكد" : booking.status === "cancelled" ? "ملغي" : "قيد الانتظار"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.paid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.paid ? "مدفوع" : "غير مدفوع"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {booking.status === "pending" && (
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <button
                        onClick={() => confirmBooking(booking.id)}
                        className="text-green-600 hover:text-green-900"
                      >
                        تأكيد
                      </button>
                      <button onClick={() => cancelBooking(booking.id)} className="text-red-600 hover:text-red-900">
                        إلغاء
                      </button>
                    </div>
                  )}
                  {booking.status !== "pending" && <button className="text-[#115173] hover:text-[#022C43]">عرض</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

