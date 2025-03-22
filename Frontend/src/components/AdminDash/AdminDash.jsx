import { useState } from "react"
import { Calendar, MessageSquare, MapPin, CreditCard, Home, Users, Settings, Menu, X ,LogOut } from 'lucide-react'
import OverviewTabComponent from "../AdminDash/Overview"
import PlacesTabComponent from "../AdminDash/places"
import MessagesTabComponent from "../AdminDash/messages"
import BookingsTabComponent from "../AdminDash/bookings"
import PaymentsTabComponent from "../AdminDash/payments"
import UsersTab from "../AdminDash/Users"
import SettingsTab from "../AdminDash/settings"
import NavBarComponent from "../AdminDash/nav"
import { useNavigate } from "react-router-dom";

// Main Dashboard Component
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)











  const handleLogout = () => {
    // إزالة بيانات المستخدم
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // إعادة توجيه المستخدم للصفحة الرئيسية أو صفحة تسجيل الدخول
    navigate("/");
  };
  return (
    <div dir="rtl" className="flex h-screen bg-[#FFFFFF] text-[#444444] font-sans">
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-[#053F5E] text-white md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0 z-40 w-64 bg-[#022C43] text-white transition-transform duration-200 ease-in-out md:static md:inset-auto md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 border-b border-[#115173]">
            <h1 className="text-2xl font-bold text-[#FFD700]">لوحة التحكم</h1>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <SidebarItem
              icon={<Home />}
              text="نظرة عامة"
              active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            />
            <SidebarItem
              icon={<MapPin />}
              text="الأماكن المقترحة"
              active={activeTab === "places"}
              onClick={() => setActiveTab("places")}
            />
            <SidebarItem
              icon={<MessageSquare />}
              text="الرسائل"
              active={activeTab === "messages"}
              onClick={() => setActiveTab("messages")}
            />
            <SidebarItem
              icon={<Calendar />}
              text="الحجوزات"
              active={activeTab === "bookings"}
              onClick={() => setActiveTab("bookings")}
            />
            <SidebarItem
              icon={<CreditCard />}
              text="المدفوعات"
              active={activeTab === "payments"}
              onClick={() => setActiveTab("payments")}
            />
            <SidebarItem
              icon={<Users />}
              text="المستخدمين"
              active={activeTab === "users"}
              onClick={() => setActiveTab("users")}
            />
            <SidebarItem
              icon={<Settings />}
              text="الإعدادات"
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            />
              <SidebarItem
             icon={<LogOut />}  // أو يمكنك استخدام <FaSignOutAlt /> من react-icons
             text="تسجيل الخروج"
             active={false}  // لا حاجة لحالة active لزر تسجيل الخروج
             onClick={handleLogout}
            />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBarComponent />
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {activeTab === "overview" && <OverviewTabComponent />}
            {activeTab === "places" && <PlacesTabComponent />}
            {activeTab === "messages" && <MessagesTabComponent />}
            {activeTab === "bookings" && <BookingsTabComponent />}
            {activeTab === "payments" && <PaymentsTabComponent />}
            {/* {activeTab === "users" && <UsersTab />} */}
            {activeTab === "settings" && <SettingsTab />}
          </div>
        </div>
      </div>
    </div>
  )
}

// Sidebar Item Component
function SidebarItem({ icon, text, active, onClick }) {
  return (
    <button
      className={`flex items-center w-full p-3 rounded-md transition-colors ${active ? "bg-[#115173] text-[#FFD700]" : "hover:bg-[#053F5E]"}`}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </button>
  )
}