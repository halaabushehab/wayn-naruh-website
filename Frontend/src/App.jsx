import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages - Main
import Home from "./pages/mainPages/Home.jsx";
import Blog from "./pages/mainPages/Blog.jsx";
import PlogDetails from "./pages/mainPages/PlogDetails.jsx";
import About from "./pages/mainPages/About.jsx";
import Contact from "./pages/mainPages/Contact.jsx";
import SeasonalDestinations from "./components/HomeComponents/SeasonalDestinations.jsx";
import SeasonPage from "./pages/places/seasonPage.jsx";
import Payments from "./pages/mainPages/Payments.jsx";
// Pages - Places
import CityPage from "./pages/places/palces.jsx";
import PlaceDetails from "./pages/places/PlaceDetails.jsx";

// Pages - User
import Login from "./pages/user/Login.jsx";
import Register from "./pages/user/Register.jsx";
import ProfilePage from "./pages/user/ProfilePage.jsx";
import AdminDash from "./components/AdminDash/AdminDash.jsx";

const AppContent = () => {
  // استخدام useLocation لتحديد الصفحة الحالية
  const location = useLocation();
  // إذا كان الـ pathname يبدأ بـ "/AdminDash" نقوم بإخفاء الـ Navbar والفوتر
  const hideLayout = location.pathname.startsWith("/AdminDash");

  return (
    <>
      { !hideLayout && <Navbar /> }
      <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/PlogDetails" element={<PlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/seasonPage/:season" element={<SeasonPage />} />
          <Route path="/SeasonalDestinations" element={<SeasonalDestinations />} />
          <Route path="/pay" element={<Payments />}/>
          {/* Places Routes */}
          <Route path="/places" element={<CityPage />} />
          <Route path="/place-details/:id" element={<PlaceDetails />} />
          
          {/* User Routes */}
          <Route path="/ProfilePage/:id" element={<ProfilePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminDash" element={<AdminDash />} />
        </Routes>
      </div>
      { !hideLayout && <Footer /> }
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
