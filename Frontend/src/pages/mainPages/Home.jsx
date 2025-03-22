import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../../components/HomeComponents/Categories"
import SeasonalDestinations from "../../components/HomeComponents/SeasonalDestinations";
import SearchComponent from "../../components/HomeComponents/SearchComponent"


const Home = () => {
  const [placeCount, setPlaceCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  // {!searchResults.length && (
  //   <section id="hero" className="relative bg-cover bg-center h-[500px]">
  //     <h1 className="text-white text-4xl font-bold text-center">مرحبًا بك في موقعنا</h1>
  //   </section>
  // )}



  useEffect(() => {
    axios.get("http://localhost:9527/places/count")
      .then((response) => {
        setPlaceCount(response.data.count);
        console.log("📥 Response:", response);
      })
      .catch((error) => {
        console.error("❌ Error fetching place count:", error);
      });
  }, []);

  
  // 🔹 الأنماط الداخلية
  const styles = {
    welcomeArea: {
      background: "url('https://www.angelplayground.com/uploadfile/userfiles/image/20230606/20230606125941_67130.png') no-repeat center center/cover",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      textAlign: "center",
      color: "#FFFFFF",
    },
    overlay: {
      background: "rgba(0, 44, 67, 0.7)",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    },
    heroContent: {
      position: "relative",
      zIndex: "2",
    },
    categoryArea: {
      background: "#f8f9fa",
      padding: "50px 0",
      color: "#000000",
      textAlign: "center",
    },
    singleCategory: {
      background: "#115173",
      padding: "20px",
      borderRadius: "10px",
      transition: "0.3s",
      cursor: "pointer",
      color: "#FFFFFF",
    },
    singleCategoryHover: {
      background: "#FFD700",
      color: "#000",
    },
    mediaSection: {
      padding: "2rem 0",
    },
    mediaItem: {
      transition: "transform 0.3s ease-in-out",
    },
    mediaItemHover: {
      transform: "scale(1.05)",
    },
    mediaImage: {
      borderRadius: "10px",
      width: "100%",
      height: "450px",
    },
    loc: {
      direction: "rtl",
    },
    aboutImg: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
    },
    aboutImgImage: {
      width: "50%",
      height: "auto",
      objectFit: "cover",
      border: "5px solid #d4a373",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      position: "relative",
      transition: "transform 0.3s ease-in-out",
    },
    aboutImgMain: {
      zIndex: 0,
    },
    aboutImgSmall: {
      top: "40px",
      right: "100px",
      zIndex: 1,
    },
    destinationCounter: {
      fontSize: "3rem",
    },
  };

  return (
    <>
      {/* ***** القسم الرئيسي ***** */}
      <section style={styles.welcomeArea}>
        <div style={styles.overlay}></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-md-10">
              <div style={styles.heroContent}>
                <h2>وين نروح؟</h2>
                <h4>مع وين نروح، كل وجهة هي بداية لقصة جديدة</h4>
              </div>

              {/* 🔹 نموذج البحث */}
            <SearchComponent setSearchResults={setSearchResults} />
            
            </div>
          </div>
        </div>
      </section>

      {/* ***** قسم الفئات ***** */}
      <section style={styles.categoryArea}>
    

  
        <div className="container">
          <div className="row justify-content-center">
            {[
              { name: "المتاحف", icon: "🏛️" },
              { name: "النوادي الرياضية", icon: "🏋️‍♂️" },
              { name: "المطاعم & المقاهي", icon: "🍽️" },
              { name: "أماكن أثرية", icon: "🏰" },
              { name: "الحدائق", icon: "🌳" },
            ].map((category, index) => (
              <div key={index} className="col-6 col-md-2 mb-3">
                <div
                  style={styles.singleCategory}
                  onMouseEnter={(e) => (e.currentTarget.style.background = styles.singleCategoryHover.background)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#115173")}
                  className="text-center"
                >
                  <h6 style={{ margin: "0" }}>{category.icon} {category.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Categories Section Start */}
    <Categories />
      {/* Categories Section End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container section-wrapper">
          <div className="row g-5 align-items-center justify-content-center flex-row-reverse">
            {/* النصوص */}
            <div className="col-lg-5 wow fadeIn text-right" data-wow-delay="0.5s">
              <h4 className="section-title">عن وين نروح؟</h4>
              <h1 className="display-6 mb-3">اكتشف أجمل الأماكن والأنشطة في الأردن بسهولة</h1>
              <p>
                تُعد منصة "وين نروح" دليلك الشامل لاستكشاف الوجهات السياحية والترفيهية المميزة في الأردن. نقدم معلومات مفصلة عن الأماكن التي تناسب العائلات، الأصدقاء، الأطفال، وحتى الأفراد، لتستمتع بأوقات لا تُنسى.
              </p>
              <p className="mb-4">
                من الحدائق والمتنزهات إلى المطاعم والأسواق المحلية، نساعدك في العثور
                على أفضل الخيارات بناءً على موقعك واهتماماتك. المنصة تجمع بين
                التقييمات، المراجعات، وتفاصيل مثل ساعات العمل، الأعمار المناسبة، والتكاليف.
              </p>
             <div className="d-flex align-items-center justify-content-end mb-4">
      <div className="counter-box border border-5 d-flex align-items-center justify-content-center" style={{ borderColor: "#022C43" }}>
        <h1 className="display-1 mb-0" id="destination-counter">{placeCount}</h1>
      </div>
      <div className="ps-3">
        <h3>وجهة</h3>
        <h3 style={{ marginRight: 10 }}>تم إدراجها</h3>
      </div>
    </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>

              <Link
  to="/about"
  style={{
    backgroundColor: "#115173", // لون الخلفية
    color: "#FFD700", // لون النص
    padding: "0.5rem 1rem", // ضبط الحشوة (padding)
    border: "none", // إزالة الحدود
    borderRadius: ".5rem", // توازن الزاوية
    display: "block", // جعل العنصر على سطر مستقل
    textAlign: "left", // محاذاة الزر لليسار
    width: "fit-content", // تحديد عرض العنصر حسب محتواه
    textDecoration: "none" // إزالة الخط السفلي من الرابط
  }}
>
  اقرأ المزيد
</Link>
</div>
            </div>
            {/* الصور */}
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img" style={styles.aboutImg}>
                <img
                  className="img-fluid rounded main-img"
                  src="https://i.pinimg.com/736x/e8/d6/85/e8d6850faff592b9f169b3dcc7a7c539.jpg"
                  alt="الأردن"
                  style={styles.aboutImgImage}
                />
                <img
                  className="img-fluid rounded small-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiTlsnyBtis4rxiETo_wqA32CIFlgsj3PdcsD4RPYQFBg7R1wjbc-ht8SJ2NhKuEQHEM&usqp=CAU"
                  alt="نشاطات"
                  style={styles.aboutImgImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}


      {/* reason start */}
      <SeasonalDestinations />
      {/* reason start */}


</>
  );
};

export default Home;














































// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
// import { ChevronDown, MapPin, Star, ArrowRight, ArrowUp, Search, Calendar, Users } from "lucide-react"
// import Button from "@mui/material/Button";
// import React from 'react';
// import TextField from '@mui/material/TextField';


// export default function Home() {
//   const [scrolled, setScrolled] = useState(false)
//   const [showScrollTop, setShowScrollTop] = useState(false)
//   const [activeCategory, setActiveCategory] = useState("all")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [isExploreHovered, setIsExploreHovered] = useState(false)

//   // Refs for hero section animations
//   const heroRef = useRef(null)
//   const textRef = useRef(null)

//   // Scroll animations
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   })

//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
//   const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

//   // Floating elements for hero section
//   const floatingElements = [
//     { icon: "🏞️", initialX: -20, initialY: -30, size: 40 },
//     { icon: "🏛️", initialX: 30, initialY: -10, size: 50 },
//     { icon: "🏔️", initialX: -40, initialY: 20, size: 45 },
//     { icon: "🏜️", initialX: 50, initialY: 40, size: 55 },
//     { icon: "🌊", initialX: 10, initialY: 60, size: 35 },
//     { icon: "🌄", initialX: -60, initialY: 30, size: 60 },
//   ]

//   // Popular destinations
//   const popularDestinations = [
//     { name: "البتراء", count: 26 },
//     { name: "وادي رم", count: 18 },
//     { name: "جرش", count: 15 },
//     { name: "البحر الميت", count: 22 },
//     { name: "عجلون", count: 12 },
//   ]

//   // Categories
//   const categories = [
//     { id: "all", name: "الكل" },
//     { id: "nature", name: "طبيعة" },
//     { id: "history", name: "تاريخ" },
//     { id: "adventure", name: "مغامرة" },
//     { id: "culture", name: "ثقافة" },
//   ]

//   const [currentLocation, setCurrentLocation] = useState(0)

//   // Refs for scroll animations
//   const aboutRef = useRef(null)
//   const featuredRef = useRef(null)
//   const discoverRef = useRef(null)
//   const whyVisitRef = useRef(null)

//   const locations = [
//     {
//       name: "وادي رم",
//       englishName: "Wadi Rum",
//       description:
//         "صحراء ساحرة ذات تكوينات صخرية فريدة وتاريخ غني، تعرف أيضًا باسم وادي القمر لتشابهها مع سطح القمر. على بعد ساعتين فقط من عمان.",
//       distance: "٢٧٠ كم من عمان",
//       image: "/placeholder.svg?height=600&width=800",
//       rating: 4.8,
//       activities: ["تسلق الصخور", "رحلات السفاري", "التخييم تحت النجوم"],
//       localTips: "زيارة الصباح الباكر تمنحك أفضل إضاءة للتصوير، وتجنب الحرارة المرتفعة في الصيف.",
//     },
//     {
//       name: "البتراء الصغيرة",
//       englishName: "Little Petra",
//       description:
//         "موقع أثري أقل شهرة من البتراء الرئيسية، لكنه يقدم تجربة أكثر هدوءًا وخصوصية للزوار المهتمين بالتاريخ. مثالية لرحلة يوم واحد.",
//       distance: "٢٣٥ كم من عمان",
//       image: "/placeholder.svg?height=600&width=800",
//       rating: 4.6,
//       activities: ["استكشاف الآثار", "التصوير", "المشي لمسافات طويلة"],
//       localTips: "زيارة يوم الثلاثاء أو الأربعاء تضمن لك تجربة هادئة بعيدًا عن الازدحام.",
//     },
//     {
//       name: "وادي الموجب",
//       englishName: "Wadi Mujib",
//       description:
//         "محمية طبيعية تضم أخفض نقطة على سطح الأرض، مع مناظر خلابة وأنشطة مائية مثيرة. مكان رائع لقضاء عطلة نهاية الأسبوع مع العائلة.",
//       distance: "٩٠ كم من عمان",
//       image: "/placeholder.svg?height=600&width=800",
//       rating: 4.7,
//       activities: ["التسلق المائي", "السباحة", "مراقبة الطيور"],
//       localTips: "أفضل وقت للزيارة هو الربيع عندما تكون المياه دافئة والطبيعة خضراء.",
//     },
//   ]

//   const weekendTrips = [
//     {
//       name: "عجلون",
//       image: "/placeholder.svg?height=400&width=600",
//       distance: "٧٥ كم",
//       time: "ساعة واحدة",
//       description: "غابات خضراء وقلعة تاريخية",
//     },
//     {
//       name: "أم قيس",
//       image: "/placeholder.svg?height=400&width=600",
//       distance: "١١٠ كم",
//       time: "ساعة ونصف",
//       description: "آثار رومانية وإطلالة على ثلاث دول",
//     },
//     {
//       name: "البحر الميت",
//       image: "/placeholder.svg?height=400&width=600",
//       distance: "٦٥ كم",
//       time: "٤٥ دقيقة",
//       description: "أخفض بقعة على الأرض",
//     },
//     {
//       name: "دبين",
//       image: "/placeholder.svg?height=400&width=600",
//       distance: "٤٥ كم",
//       time: "٣٠ دقيقة",
//       description: "غابات صنوبر ومسارات للمشي",
//     },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }

//       if (window.scrollY > 300) {
//         setShowScrollTop(true)
//       } else {
//         setShowScrollTop(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     })
//   }

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   }

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//     hover: {
//       y: -15,
//       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       transition: { duration: 0.3 },
//     },
//   }

//   return (
//     <main className="min-h-screen bg-white text-[#444444] overflow-x-hidden">
//       {/* Innovative Hero Section */}
//       <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background layers with parallax effect */}
//         <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
//           {/* Layer 1: Base gradient */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[#022C43] to-[#053F5E] opacity-90"></div>

//           {/* Layer 2: Animated pattern */}
//           <motion.div
//             animate={{
//               backgroundPosition: ["0% 0%", "100% 100%"],
//             }}
//             transition={{
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//               duration: 20,
//               ease: "linear",
//             }}
//             className="absolute inset-0 opacity-10"
//             style={{
//               backgroundImage:
//                 "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
//               backgroundSize: "150px 150px",
//             }}
//           ></motion.div>

//           {/* Layer 3: Map outline of Jordan */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.15 }}
//             transition={{ duration: 2, delay: 0.5 }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <svg
//               viewBox="0 0 300 500"
//               width="500"
//               height="800"
//               className="w-full max-w-3xl"
//               style={{ filter: "drop-shadow(0px 0px 10px rgba(255, 215, 0, 0.5))" }}
//             >
//               <path
//                 d="M150,50 L180,70 L200,100 L220,150 L230,200 L220,250 L200,300 L180,350 L150,400 L120,350 L100,300 L80,250 L70,200 L80,150 L100,100 L120,70 Z"
//                 fill="none"
//                 stroke="#FFD700"
//                 strokeWidth="2"
//               />
//               <motion.circle
//                 cx="150"
//                 cy="120"
//                 r="8"
//                 fill="#FFD700"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: [0, 1.2, 1] }}
//                 transition={{ delay: 1, duration: 1 }}
//               />
//               <motion.circle
//                 cx="190"
//                 cy="180"
//                 r="6"
//                 fill="#FFD700"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: [0, 1.2, 1] }}
//                 transition={{ delay: 1.2, duration: 1 }}
//               />
//               <motion.circle
//                 cx="120"
//                 cy="220"
//                 r="7"
//                 fill="#FFD700"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: [0, 1.2, 1] }}
//                 transition={{ delay: 1.4, duration: 1 }}
//               />
//               <motion.circle
//                 cx="150"
//                 cy="300"
//                 r="5"
//                 fill="#FFD700"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: [0, 1.2, 1] }}
//                 transition={{ delay: 1.6, duration: 1 }}
//               />
//             </svg>
//           </motion.div>
//         </motion.div>

//         {/* Floating elements */}
//         {floatingElements.map((element, index) => (
//           <motion.div
//             key={index}
//             className="absolute text-4xl pointer-events-none"
//             initial={{
//               x: element.initialX + "%",
//               y: element.initialY + "%",
//               opacity: 0,
//             }}
//             animate={{
//               x: [element.initialX + "%", element.initialX + 5 + "%", element.initialX + "%"],
//               y: [element.initialY + "%", element.initialY - 5 + "%", element.initialY + "%"],
//               opacity: 0.8,
//               rotate: [0, 10, 0, -10, 0],
//             }}
//             transition={{
//               repeat: Number.POSITIVE_INFINITY,
//               duration: 5 + index,
//               delay: index * 0.2,
//               ease: "easeInOut",
//             }}
//             style={{ fontSize: element.size }}
//           >
//             {element.icon}
//           </motion.div>
//         ))}

//         {/* Content container */}
//         <motion.div ref={textRef} style={{ y }} className="container mx-auto px-4 relative z-20 text-center">
//           {/* Main title with animated reveal */}
//           <div className="overflow-hidden mb-6">
//             <motion.h1
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="text-white text-6xl md:text-8xl font-bold inline-flex flex-wrap justify-center"
//             >
//               <motion.span
//                 initial={{ scale: 1 }}
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, repeatDelay: 2 }}
//                 className="text-[#FFD700] mx-2"
//               >
//                 أين
//               </motion.span>
//               <span className="mx-2">نذهب؟</span>
//             </motion.h1>
//           </div>

//           {/* Animated subtitle */}
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-white text-2xl md:text-4xl mb-8"
//           >
//             اكتشف كنوز الأردن المخفية قريباً منك
//           </motion.h2>

//           {/* Interactive search bar */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="max-w-3xl mx-auto mb-10 relative"
//           >
//             <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
//               <div className="flex-1 relative">
//                 <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
//                 <TextField label="Enter text" variant="outlined" />
//               </div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button variant="contained" color="primary">Click me</Button>

//               </motion.div>
//             </div>

//             {/* Category filters */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.9 }}
//               className="flex flex-wrap justify-center gap-2 mt-4"
//             >
//               {categories.map((category) => (
//                 <motion.button
//                   key={category.id}
//                   onClick={() => setActiveCategory(category.id)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                     activeCategory === category.id
//                       ? "bg-[#FFD700] text-[#022C43]"
//                       : "bg-white/10 text-white hover:bg-white/20"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {category.name}
//                 </motion.button>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Popular destinations tags */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1.2 }}
//             className="mb-10"
//           >
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.8 }}
//               transition={{ duration: 0.5, delay: 1.2 }}
//               className="text-white/80 mb-3"
//             >
//               الوجهات الشائعة:
//             </motion.p>
//             <div className="flex flex-wrap justify-center gap-3">
//               {popularDestinations.map((destination, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1.2 + index * 0.1 }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center"
//                 >
//                   <span className="text-white">{destination.name}</span>
//                   <span className="bg-[#FFD700] text-[#022C43] text-xs rounded-full px-2 py-1 mr-2 font-bold">
//                     {destination.count}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.5 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 className="bg-[#FFD700] hover:bg-[#e6c200] text-[#022C43] text-lg px-8 py-6 rounded-full font-bold transition-all duration-300 flex items-center gap-2"
//                 onMouseEnter={() => setIsExploreHovered(true)}
//                 onMouseLeave={() => setIsExploreHovered(false)}
//               >
//                 <motion.span animate={{ x: isExploreHovered ? -5 : 0 }} transition={{ duration: 0.3 }}>
//                   ابدأ الاستكشاف
//                 </motion.span>
//                 <motion.span
//                   animate={{ x: isExploreHovered ? 5 : 0, opacity: isExploreHovered ? 1 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ArrowRight className="w-5 h-5" />
//                 </motion.span>
//               </Button>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white text-lg px-8 py-6 rounded-full font-bold transition-all duration-300 flex items-center gap-2">
//                 <Calendar className="w-5 h-5 ml-2" />
//                 رحلات نهاية الأسبوع
//               </Button>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2, duration: 1 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//             className="flex flex-col items-center"
//           >
//             <span className="text-white/70 text-sm mb-2">اكتشف المزيد</span>
//             <ChevronDown className="text-white w-6 h-6" />
//           </motion.div>
//         </motion.div>

//         {/* Decorative elements */}
//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#022C43] to-transparent z-10"></div>

//         <motion.div
//           className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#FFD700]/20 z-5"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.2, 0.3, 0.2],
//           }}
//           transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
//         ></motion.div>

//         <motion.div
//           className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 z-5"
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, delay: 1 }}
//         ></motion.div>
//       </section>

//       {/* About Section with Scroll Animation */}
//       <section ref={aboutRef} className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeInUp}
//             className="flex flex-col md:flex-row items-center"
//           >
//             <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
//               <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-[#022C43]">
//                 <span className="text-[#FFD700]">عن</span> موقعنا
//               </motion.h2>

//               <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#FFD700] mb-6"></motion.div>

//               <motion.p variants={fadeInUp} className="text-lg mb-6 leading-relaxed">
//                 "أين نذهب؟" هو دليلك المحلي لاكتشاف الأماكن الخفية في الأردن. نحن نركز على مساعدة المواطنين الأردنيين
//                 على استكشاف بلدهم الجميل واكتشاف الوجهات القريبة التي ربما لم يزوروها من قبل.
//               </motion.p>

//               <motion.p variants={fadeInUp} className="text-lg mb-6 leading-relaxed">
//                 نقدم معلومات عملية من السكان المحليين، مثل أفضل الأوقات للزيارة، وكيفية الوصول بالمواصلات العامة أو
//                 السيارة، والنصائح الخاصة التي لا يعرفها إلا السكان المحليون.
//               </motion.p>

//               <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button className="bg-[#022C43] hover:bg-[#053F5E] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2">
//                   اقرأ المزيد
//                   <motion.span
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//                   >
//                     <ArrowRight className="w-4 h-4" />
//                   </motion.span>
//                 </Button>
//               </motion.div>
//             </div>

//             <motion.div variants={fadeInUp} className="md:w-1/2 relative">
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 viewport={{ once: true }}
//                 className="relative z-10 rounded-lg overflow-hidden shadow-2xl"
//               >
//                 <img src="/placeholder.svg?height=600&width=800" alt="Jordan landscape" className="w-full h-auto" />

//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   viewport={{ once: true }}
//                   className="absolute inset-0 bg-gradient-to-t from-[#022C43] to-transparent opacity-60"
//                 ></motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.7 }}
//                   viewport={{ once: true }}
//                   className="absolute bottom-0 left-0 right-0 p-6 text-white"
//                 >
//                   <p className="text-xl font-bold">اكتشف الأردن بعيون محلية</p>
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 viewport={{ once: true }}
//                 className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#FFD700] rounded-lg -z-10"
//               ></motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Weekend Trips Section */}
//       <section className="py-20 bg-[#053F5E] text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={staggerContainer}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
//               <span className="text-[#FFD700]">رحلات</span> نهاية الأسبوع
//             </motion.h2>

//             <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></motion.div>

//             <motion.p variants={fadeInUp} className="text-lg max-w-3xl mx-auto">
//               وجهات قريبة من عمان، مثالية لرحلة يوم واحد أو عطلة نهاية الأسبوع
//             </motion.p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {weekendTrips.map((trip, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-[#022C43] rounded-xl overflow-hidden shadow-lg"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <motion.img
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                     src={trip.image}
//                     alt={trip.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#022C43] to-transparent opacity-70"></div>
//                   <div className="absolute top-4 right-4 bg-[#FFD700] text-[#022C43] rounded-full px-3 py-1 text-sm font-bold">
//                     {trip.distance}
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <h3 className="text-xl font-bold mb-2">{trip.name}</h3>
//                   <div className="flex items-center mb-3">
//                     <Clock className="w-4 h-4 text-[#FFD700] mr-2" />
//                     <span className="text-sm text-gray-300">{trip.time} بالسيارة من عمان</span>
//                   </div>
//                   <p className="text-gray-300 mb-4">{trip.description}</p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="text-[#FFD700] font-semibold flex items-center"
//                   >
//                     اكتشف المزيد
//                     <motion.span
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//                     >
//                       <ArrowRight className="w-4 h-4 mr-2" />
//                     </motion.span>
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Location with 3D Effect */}
//       <section ref={featuredRef} className="py-20 bg-[#022C43] text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={staggerContainer}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
//               <span className="text-[#FFD700]">الوجهة</span> المميزة
//             </motion.h2>

//             <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></motion.div>
//           </motion.div>

//           <div className="flex flex-col md:flex-row items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="md:w-3/5 mb-10 md:mb-0"
//             >
//               <div className="relative">
//                 <motion.div
//                   whileHover={{
//                     rotateY: 5,
//                     rotateX: -5,
//                     z: 50,
//                     transition: { duration: 0.5 },
//                   }}
//                   className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform perspective-1000"
//                 >
//                   <img
//                     src={locations[currentLocation].image || "/placeholder.svg"}
//                     alt={locations[currentLocation].name}
//                     className="w-full h-auto"
//                   />
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                     className="absolute inset-0 bg-gradient-to-t from-[#022C43] to-transparent opacity-60"
//                   ></motion.div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                   viewport={{ once: true }}
//                   className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#FFD700] rounded-lg -z-10"
//                 ></motion.div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="md:w-2/5 md:pl-16"
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentLocation}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <div className="flex items-center mb-4">
//                     <MapPin className="text-[#FFD700] w-6 h-6 mr-2" />
//                     <h3 className="text-3xl font-bold">{locations[currentLocation].name}</h3>
//                   </div>

//                   <p className="text-sm text-[#FFD700] mb-4">{locations[currentLocation].englishName}</p>

//                   <div className="flex items-center mb-4">
//                     <Star className="text-[#FFD700] w-5 h-5 mr-1 fill-current" />
//                     <span className="text-lg font-semibold">{locations[currentLocation].rating}</span>
//                     <span className="text-sm text-gray-300 mr-2">/ 5.0</span>
//                   </div>

//                   <div className="flex items-center mb-6 bg-[#053F5E] px-3 py-2 rounded-md">
//                     <motion.div
//                       animate={{ rotate: [0, 10, 0] }}
//                       transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
//                     >
//                       <MapPin className="text-[#FFD700] w-4 h-4 mr-2" />
//                     </motion.div>
//                     <span className="text-sm">{locations[currentLocation].distance}</span>
//                   </div>

//                   <p className="text-lg mb-6 leading-relaxed">{locations[currentLocation].description}</p>

//                   <div className="mb-6 bg-[#115173] p-4 rounded-lg">
//                     <h4 className="text-[#FFD700] font-semibold mb-3 flex items-center">
//                       <Users className="w-4 h-4 mr-2" /> نصائح محلية:
//                     </h4>
//                     <p className="text-sm text-gray-200">{locations[currentLocation].localTips}</p>
//                   </div>

//                   <div className="mb-8">
//                     <h4 className="text-[#FFD700] font-semibold mb-3 flex items-center">
//                       <Calendar className="w-4 h-4 mr-2" /> الأنشطة المتاحة:
//                     </h4>
//                     <ul className="space-y-2">
//                       {locations[currentLocation].activities.map((activity, index) => (
//                         <motion.li
//                           key={index}
//                           className="flex items-center"
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.1 + 0.3 }}
//                         >
//                           <div className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></div>
//                           {activity}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>

//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button className="bg-[#FFD700] hover:bg-[#e6c200] text-[#022C43] px-6 py-3 rounded-md font-semibold">
//                       خطط لرحلتك
//                     </Button>
//                   </motion.div>
//                 </motion.div>
//               </AnimatePresence>

//               <div className="flex space-x-2 rtl:space-x-reverse mt-8">
//                 {locations.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => setCurrentLocation(index)}
//                     className={`w-12 h-3 rounded-full ${currentLocation === index ? "bg-[#FFD700]" : "bg-gray-500"}`}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     aria-label={`View location ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Discover Section with Hover Effects */}
//       <section ref={discoverRef} className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={staggerContainer}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-[#022C43]">
//               <span className="text-[#FFD700]">اكتشف</span> الأردن
//             </motion.h2>

//             <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></motion.div>

//             <motion.p variants={fadeInUp} className="text-lg max-w-3xl mx-auto">
//               تعرف على مجموعة متنوعة من الوجهات الساحرة القريبة منك، مثالية لقضاء وقت ممتع مع العائلة والأصدقاء
//             </motion.p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {[
//               {
//                 title: "المناظر الطبيعية",
//                 image: "/placeholder.svg?height=400&width=600",
//                 description: "استكشف التضاريس المتنوعة من الصحاري إلى الوديان والجبال",
//               },
//               {
//                 title: "المواقع التاريخية",
//                 image: "/placeholder.svg?height=400&width=600",
//                 description: "اكتشف آثار الحضارات القديمة والقلاع التاريخية",
//               },
//               {
//                 title: "التجارب الثقافية",
//                 image: "/placeholder.svg?height=400&width=600",
//                 description: "انغمس في الثقافة الأردنية الغنية والتقاليد المحلية",
//               },
//               {
//                 title: "المغامرات",
//                 image: "/placeholder.svg?height=400&width=600",
//                 description: "جرب أنشطة مثيرة من تسلق الصخور إلى الغوص",
//               },
//               {
//                 title: "الطعام المحلي",
//                 image: "/placeholder.svg?height=400&width=600",
//                 description: "تذوق النكهات الأردنية الأصيلة والأطباق التقليدية",
//               },
//               {
//                 title: "الحياة البرية",
//                 image: "/placeholder.svg?height=400&width=600",
//                 description: "شاهد الحيوانات والنباتات الفريدة في محميات الأردن الطبيعية",
//               },
//             ].map((category, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="overflow-hidden rounded-xl group relative"
//               >
//                 <div className="relative h-80 overflow-hidden">
//                   <motion.img
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                     src={category.image}
//                     alt={category.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <motion.div
//                     initial={{ opacity: 0.7 }}
//                     whileHover={{ opacity: 0.9 }}
//                     className="absolute inset-0 bg-gradient-to-t from-[#022C43] to-transparent"
//                   ></motion.div>

//                   <motion.div
//                     initial={{ y: 20, opacity: 0.8 }}
//                     whileHover={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute bottom-0 left-0 right-0 p-6 transform"
//                   >
//                     <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
//                     <p className="text-gray-200 text-sm">{category.description}</p>

//                     <motion.button
//                       initial={{ opacity: 0, y: 20 }}
//                       whileHover={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="mt-4 bg-[#FFD700] text-[#022C43] px-4 py-2 rounded-md font-bold flex items-center"
//                     >
//                       استكشف المزيد
//                       <ArrowRight className="mr-2 w-4 h-4" />
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-center mt-12"
//           >
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button className="bg-[#022C43] hover:bg-[#053F5E] text-white px-8 py-4 rounded-md font-semibold">
//                 عرض جميع الوجهات
//               </Button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Visit Section with Animated Cards */}
//       <section ref={whyVisitRef} className="py-20 bg-[#115173] text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={staggerContainer}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
//               <span className="text-[#FFD700]">لماذا</span> تستكشف الأردن؟
//             </motion.h2>

//             <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></motion.div>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {[
//               {
//                 title: "تنوع فريد",
//                 description: "من البحر الميت إلى الصحاري والجبال، الأردن يقدم تنوعًا طبيعيًا مذهلًا في مساحة صغيرة نسبيًا",
//                 icon: "🏞️",
//               },
//               {
//                 title: "تراث غني",
//                 description: "اكتشف آلاف السنين من التاريخ في المواقع الأثرية والمعالم التاريخية المحفوظة بشكل رائع",
//                 icon: "🏛️",
//               },
//               {
//                 title: "ضيافة أصيلة",
//                 description: "استمتع بالترحيب الدافئ والضيافة الأردنية الأصيلة التي تجعل زيارتك لا تُنسى",
//                 icon: "☕",
//               },
//               {
//                 title: "مطبخ شهي",
//                 description: "تذوق المأكولات الأردنية اللذيذة والأطباق التقليدية التي تعكس تاريخ وثقافة المنطقة",
//                 icon: "🍽️",
//               },
//             ].map((reason, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//                   y: -10,
//                 }}
//                 className="bg-[#053F5E] p-8 rounded-lg text-center"
//               >
//                 <motion.div
//                   animate={{
//                     y: [0, -10, 0],
//                     scale: [1, 1.1, 1],
//                   }}
//                   transition={{
//                     repeat: Number.POSITIVE_INFINITY,
//                     duration: 3,
//                     delay: index * 0.2,
//                   }}
//                   className="text-5xl mb-6"
//                 >
//                   {reason.icon}
//                 </motion.div>

//                 <h3 className="text-xl font-bold mb-4 text-[#FFD700]">{reason.title}</h3>
//                 <p className="text-gray-200">{reason.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action with Parallax */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-[#022C43] rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden"
//           >
//             <motion.div
//               animate={{
//                 backgroundPositionY: ["0%", "10%", "0%"],
//               }}
//               transition={{
//                 repeat: Number.POSITIVE_INFINITY,
//                 duration: 20,
//                 ease: "linear",
//               }}
//               className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
//               style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')" }}
//             ></motion.div>

//             <div className="relative z-10">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="text-3xl md:text-5xl font-bold mb-6"
//               >
//                 <span className="text-[#FFD700]">هل أنت مستعد</span> للمغامرة؟
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="text-xl max-w-3xl mx-auto mb-10"
//               >
//                 دعنا نساعدك في اكتشاف الأماكن الخفية في الأردن وتخطيط رحلة لا تُنسى
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button className="bg-[#FFD700] hover:bg-[#e6c200] text-[#022C43] text-lg px-8 py-4 rounded-full font-bold">
//                   ابدأ رحلتك الآن
//                 </Button>
//               </motion.div>
//             </div>

//             <motion.div
//               animate={{
//                 rotate: 360,
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 rotate: { repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" },
//                 scale: { repeat: Number.POSITIVE_INFINITY, duration: 5 },
//               }}
//               className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FFD700] opacity-20 rounded-full"
//             ></motion.div>

//             <motion.div
//               animate={{
//                 rotate: -360,
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 rotate: { repeat: Number.POSITIVE_INFINITY, duration: 25, ease: "linear" },
//                 scale: { repeat: Number.POSITIVE_INFINITY, duration: 7, delay: 1 },
//               }}
//               className="absolute -top-20 -left-20 w-60 h-60 bg-[#FFD700] opacity-20 rounded-full"
//             ></motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer with Animation */}
//       <footer className="bg-[#022C43] text-white py-12">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex flex-col md:flex-row justify-between items-center"
//           >
//             <div className="mb-8 md:mb-0">
//               <motion.h2
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="text-3xl font-bold mb-2"
//               >
//                 <span className="text-[#FFD700]">أين</span> نذهب؟
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="text-gray-300"
//               >
//                 اكتشف كنوز الأردن المخفية
//               </motion.p>
//             </div>

//             <div className="flex flex-col md:flex-row gap-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-[#FFD700] font-semibold mb-3">تواصل معنا</h3>
//                 <p className="text-gray-300">info@wheredowego.jo</p>
//                 <p className="text-gray-300">+962 79 123 4567</p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-[#FFD700] font-semibold mb-3">تابعنا</h3>
//                 <div className="flex gap-4">
//                   <motion.a
//                     whileHover={{ y: -5, color: "#FFD700" }}
//                     transition={{ duration: 0.2 }}
//                     href="#"
//                     className="text-white hover:text-[#FFD700]"
//                   >
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path
//                         fillRule="evenodd"
//                         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   </motion.a>

//                   <motion.a
//                     whileHover={{ y: -5, color: "#FFD700" }}
//                     transition={{ duration: 0.2 }}
//                     href="#"
//                     className="text-white hover:text-[#FFD700]"
//                   >
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path
//                         fillRule="evenodd"
//                         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   </motion.a>

//                   <motion.a
//                     whileHover={{ y: -5, color: "#FFD700" }}
//                     transition={{ duration: 0.2 }}
//                     href="#"
//                     className="text-white hover:text-[#FFD700]"
//                   >
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                     </svg>
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             viewport={{ once: true }}
//             className="border-t border-[#115173] mt-8 pt-8 text-center text-gray-400 text-sm"
//           >
//             <p>© {new Date().getFullYear()} أين نذهب؟ جميع الحقوق محفوظة.</p>
//           </motion.div>
//         </div>
//       </footer>

//       {/* Back to Top Button */}
//       <AnimatePresence>
//         {showScrollTop && (
//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             onClick={scrollToTop}
//             className="fixed bottom-8 left-8 bg-[#FFD700] text-[#022C43] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ArrowUp className="w-6 h-6" />
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </main>
//   )
// }

// // Clock component for the Weekend Trips section
// function Clock({ className }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <circle cx="12" cy="12" r="10"></circle>
//       <polyline points="12 6 12 12 16 14"></polyline>
//     </svg>
//   )
// }

