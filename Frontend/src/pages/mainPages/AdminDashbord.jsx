import Overview from "../Component/AdminDashbord/Overview";
import SubscriptionCardForm from "../Component/AdminDashbord/SubscriptionCardForm";
import PlaceCards from "../Component/AdminDashbord/PlaceCards"; // تم تغيير اسم الكومبوننت من ArticalCards إلى PlaceCards
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import PostDashboard from "./Subscription/Post";

function AdminDashbord() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/placescards" element={<PlaceCards />} /> 
        <Route path="/subform" element={<SubscriptionCardForm />} />
        <Route path="/postform" element={<PostDashboard />} />
      </Routes>
    </>
  );
}

export default AdminDashbord;
