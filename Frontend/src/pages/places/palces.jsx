// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";
// import { ChevronDown, ChevronUp, MapPin, Ticket, Star, Heart } from "lucide-react"

// const CityPage = () => {
//   const [places, setPlaces] = useState([]);
//   const [city, setCity] = useState("");
//   const [showFavorites, setShowFavorites] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const userEmail = "user@example.com"; // يجب استبداله بالبريد الإلكتروني للمستخدم المسجل دخول

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const cityParam = params.get("city");
//     if (cityParam && cityParam !== city) {
//       setCity(cityParam);
//       fetchPlaces(cityParam);
//     }
//   }, [location]);

//   const fetchPlaces = async (city) => {
//     try {
//       const response = await axios.get(`http://localhost:9527/places/city/${city}`);
//       setPlaces(response.data);
//     } catch (error) {
//       console.error("❌ Error fetching places:", error);
//     }
//   };

//   const addToFavorites = (place) => {
//     const userToken = localStorage.getItem("token"); // تحقق من وجود المستخدم
//     if (!userToken) {
//       alert("يرجى تسجيل الدخول لحفظ الأماكن في المفضلة.");
//       return;
//     }
  
//     let userFavorites = JSON.parse(localStorage.getItem(`favorites_${userEmail}`)) || [];
//     const isFavorite = userFavorites.some((fav) => fav._id === place._id);
  
//     if (!isFavorite) {
//       userFavorites.push(place);
//       localStorage.setItem(`favorites_${userEmail}`, JSON.stringify(userFavorites));
//       setPlaces([...places]); // تحديث الواجهة
//       alert(`${place.name} تم إضافته للمفضلة!`);
//     } else {
//       alert(`${place.name} موجود بالفعل في المفضلة.`);
//     }
//   };

//   const removeFromFavorites = (place) => {
//     const userToken = localStorage.getItem("token"); // تحقق من وجود المستخدم
//     if (!userToken) return;
  
//     let userFavorites = JSON.parse(localStorage.getItem(`favorites_${userEmail}`)) || [];
//     userFavorites = userFavorites.filter((fav) => fav._id !== place._id);
//     localStorage.setItem(`favorites_${userEmail}`, JSON.stringify(userFavorites));
    
//     if (showFavorites) {
//       setPlaces(userFavorites); // إذا كنا في صفحة المفضلة، قم بتحديث القائمة
//     }
    
//     alert(`${place.name} تم إزالته من المفضلة.`);
//   };

//   const getDisplayedPlaces = () => {
//     if (showFavorites) {
//       return JSON.parse(localStorage.getItem(`favorites_${userEmail}`)) || [];
//     }
//     return places;
//   };


//   const handleDetails = (place) => {
//     console.log("🔹 Navigating to:", `/place-details/${place._id}`);
//     navigate(`/place-details/${place._id}`);
//   };
  

//   const [isExpanded, setIsExpanded] = useState(false)
//   const [isFavorite, setIsFavorite] = useState(false)
  
//   return (
//     <div style={{ padding: "20px", position: "relative", minHeight: "100vh", marginTop: "100px", backgroundColor: "#f8f9fa" }}>
//   <h1 style={{ textAlign: "center", color: "#022C43" }}>الأماكن في {city}</h1>

//   <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
//     {getDisplayedPlaces().length > 0 ? (
//       getDisplayedPlaces().map((place) => (
//         <div
//           key={place._id}
//           style={{
//             width: "300px",
//             backgroundColor: "#FFFFFF",
//             borderRadius: "10px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//             padding: "15px",
//             textAlign: "center",
//             transition: "transform 0.2s",
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//           onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//         >
//           <img
//             src={place.gallery[0]}
//             alt={place.name}
//             style={{ width: "100%", height: "200px", borderRadius: "10px", objectFit: "cover" }}
//           />
//           <h3 style={{ color: "#115173" }}>{place.name}</h3>
//           <p style={{ color: "#444444" }}>{place.short_description}</p>
//           <p><strong style={{ color: "#022C43" }}>التفاصيل:</strong> {place.detailed_description}</p>
//           <p><strong style={{ color: "#022C43" }}>أفضل موسم:</strong> {place.best_season}</p>
//           <p><strong style={{ color: "#022C43" }}>المدينة:</strong> {place.city}</p>
//           <p><strong style={{ color: "#022C43" }}>تواصل:</strong> {place.contact?.phone}</p>
//           <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
//             <button
//               style={{
//                 padding: "10px",
//                 backgroundColor: showFavorites ? "#dc3545" : "#FFD700",
//                 color: "#ffffff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 flexGrow: 1,
//                 marginRight: "10px",
//                 transition: "background-color 0.3s",
//               }}
//               onClick={() => showFavorites ? removeFromFavorites(place) : addToFavorites(place)}
//             >
//               {showFavorites ? "إزالة من المفضلة" : "أضف للمفضلة"}
//             </button>
//             <button
//               style={{
//                 padding: "10px",
//                 backgroundColor: "#115173",
//                 color: "#ffffff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 flexGrow: 1,
//                 transition: "background-color 0.3s",
//               }}
//               onClick={() => handleDetails(place)}
//             >
//               المزيد
//             </button>
//           </div>
//         </div>
//       ))
//     ) : (
//       <p style={{ textAlign: "center", fontSize: "18px", color: "gray" }}>لا توجد أماكن متاحة.</p>
//     )}
//   </div>

//   {/* زر عرض المفضلة */}
//   <button
//     onClick={() => setShowFavorites(!showFavorites)}
//     style={{
//       position: "fixed",
//       bottom: "20px",
//       left: "50%",
//       transform: "translateX(-50%)",
//       padding: "15px 30px",
//       backgroundColor: showFavorites ? "#dc3545" : "#FFD700",
//       color: "#ffffff",
//       border: "none",
//       borderRadius: "30px",
//       fontSize: "16px",
//       cursor: "pointer",
//       boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
//       transition: "background-color 0.3s",
//     }}
//   >
//     {showFavorites ? "عرض الكل" : "عرض المفضلة"}
//   </button>
// </div>
//   );
// };

// export default CityPage;

























import "bootstrap/dist/css/bootstrap.min.css";
import seasonsImage from "../../components/img/4-seasons.png"; // تأكد من المستوى الصحيح
// import PlaceDetails  from "./components/pages/places/PlaceDetails ";
import { Link } from "react-router-dom";
import favoriteImage from "../../components/img/bookmark.png"; // تأكد من المستوى الصحيح
import { useParams, useNavigate } from "react-router-dom";
// import { ChevronDown, ChevronUp, MapPin, Ticket, Star, Heart } from "lucide-react"
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, ChevronUp, MapPin, Ticket, Star, Heart } from "lucide-react"

const cityData = [
  {
    city: "عمان",
    title: "عمان",
    image: "https://example.com/amman-image.jpg", // ضع هنا رابط الصورة الصحيح
    description:
      "عمان هي مدينة مليئة بالأماكن المثيرة للاستكشاف! من المعالم التاريخية والمواقع الثقافية إلى الحدائق والأسواق النابضة بالحياة.",
  },
  {
    city: "اربد",
    title: "اربد",
    image:
      "https://i.pinimg.com/736x/91/00/dc/9100dc3da99d33ffc884109ee72c5f7c.jpg",
    description:
      "إربد هي مدينة تمتاز بجوها الهادئ وجمالها الطبيعي، حيث تجمع بين التاريخ العريق والطبيعة الخلابة مع أسواقها التقليدية.",
  },
  {
    city: "الزرقاء",
    title: "الزرقاء",
    image:
      "https://scontent.famm13-1.fna.fbcdn.net/v/t1.6435-9/127123488_1644512062387400_6830560409441485191_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wDpUWh3HjNkQ7kNvgESw08n&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=AmImClbKqcPE2QOhTZ_Vz6Z&oh=00_AYBfcumRJD2lGRO0p25d47Mej5KlJVsCkhg5iu-lBjZaWg&oe=67BF7DFF",
    description:
      "الزرقاء مدينة حيوية تتميز بموقعها الصناعي والتجاري الهام، وتضم العديد من الأسواق الشعبية والمقاهي التقليدية إلى جانب أماكن ترفيهية تلبي احتياجات العائلات.",
  },
];

const CityPage = () => {
  const categories = [
    { name: "متاحف", category: "Museums" },
    { name: "الأندية الرياضية", category: "SportClub" },
    { name: "مطاعم", category: "restaurants" },
    { name: "ترفيه وألعاب", category: "entertainment" },
    { name: "أماكن أثرية", category: "historical-sites" },
    { name: "أماكن للتصوير", category: "photo-spots" },
    { name: "ثقافة وفنون", category: "culture-arts" },
  ];
  const user = JSON.parse(localStorage.getItem("user")); // افترض أن المستخدم تم تخزينه هنا بعد تسجيل الدخول
  const [places, setPlaces] = useState([]);
    const [city, setCity] = useState("");
    const [showFavorites, setShowFavorites] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const storedUserId = localStorage.getItem("userId"); 
    console.log("User ID:", storedUserId);
    const userEmail = user?.email || ""; // تصحيح التسمية
    console.log("User Email:", userEmail);
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // تعريف currentPage


    const [userFavorites, setUserFavorites] = useState([]);

    useEffect(() => {
      if (userEmail) {
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${userEmail}`)) || [];
        setUserFavorites(storedFavorites);
      }
    }, [userEmail]);
    



    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const cityParam = params.get("city");
      if (cityParam && cityParam !== city) {
        setCity(cityParam);
        fetchPlaces(cityParam);
      }
    }, [location]);
  
    const fetchPlaces = async (city) => {
      try {
        const response = await axios.get(`http://localhost:9527/places/city/${city}`);
        setPlaces(response.data);
      } catch (error) {
        console.error("❌ Error fetching places:", error);
      }
    };
  
useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");

    if (storedUserId) setUserId(storedUserId);
    if (storedUsername) setUsername(storedUsername);

    console.log("User ID:", storedUserId);
    console.log("Username:", storedUsername);
}, []);

const addToFavorites = (place) => {
  if (!userId) {
    alert("يرجى تسجيل الدخول لحفظ الأماكن في المفضلة.");
    return;
  }

  let userFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];

  if (!userFavorites.some(fav => fav._id === place._id)) {
    userFavorites.push(place);
    localStorage.setItem(`favorites_${userId}`, JSON.stringify(userFavorites));
    
    // تحديث الحالة
    setFavorites(userFavorites);

    alert(`${place.name} تم إضافته للمفضلة!`);
  } else {
    alert(`${place.name} موجود بالفعل في المفضلة.`);
  }
};

const removeFromFavorites = (place) => {
  if (!userId) return;

  let userFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
  userFavorites = userFavorites.filter(fav => fav._id !== place._id);
  localStorage.setItem(`favorites_${userId}`, JSON.stringify(userFavorites));
  
  // تحديث الحالة
  setFavorites(userFavorites);

  alert(`${place.name} تم إزالته من المفضلة.`);
};
    const [favorites, setFavorites] = useState([]);

useEffect(() => {
  if (userId) {
    const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
    setFavorites(storedFavorites);
  }
}, [userId]);
 


const getDisplayedPlaces = () => {
  return showFavorites ? favorites : places;
};

    
  
    const handleDetails = (place) => {
      console.log("🔹 Navigating to:", `/place-details/${place._id}`);
      navigate(`/place-details/${place._id}`);
    };
    
  
    const [isExpanded, setIsExpanded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)


    const sectionStyle = {
        backgroundImage:
          "url(https://i0.wp.com/familyinjordan.com/wp-content/uploads/2018/07/IMG_20180623_154944.jpg?fit=750%2C563&ssl=1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
      };
    
      const bigCardStyle = {
        backgroundColor: "rgba(26, 55, 77, 0.8)", // شفافية خفيفة
        borderRadius: "15px",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      };
    
      const buttonContainerStyle = {
        display: "flex",
        overflowX: "auto",
        padding: "10px 0",
        justifyContent: "center",
        gap: "10px",
      };
    
      const buttonStyle = {
        whiteSpace: "nowrap",
        flexShrink: "0",
        backgroundColor: "#FFD700",
        color: "#000",
        borderRadius: "8px",
        padding: "10px 15px",
        fontSize: "1em",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "background-color 0.3s ease, transform 0.2s",
      };
    
      const buttonHoverStyle = {
        backgroundColor: "#FFC107",
        color: "#fff",
        transform: "scale(1.05)",
      };
    
      const styles = {
        cardContainer: {
          backgroundColor: "white",
          borderRadius: "15px",
          width: "300px",
          height: "500px",
          margin: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "right",
          direction: "rtl",
          position: "relative",
        },
        seasonTag: {
          position: "absolute",
          top: "10px",
          left: "10px",
          // backgroundColor: "",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "1.2rem",
        },
        favoriteIconContainer: {
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        //   backgroundColor: "rgba(255, 255, 255, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        },
        favoriteIcon: {
          fontSize: "3rem",
          color: "#FFD700",
        },
        cardImage: {
          width: "100%",
          height: "200px",
          objectFit: "cover",
        },
        cardBody: {
          padding: "20px",
          height: "calc(100% - 200px)",
        },
        cardTitle: {
          fontSize: "1.25em",
          marginBottom: "15px",
          fontWeight: "bold",
        },
        locationIcons: {
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          marginBottom: "10px",
        },
        rating: {
          display: "flex",
          alignItems: "center",
          color: "#f5a623",
          fontSize: "1em",
        },
        detailsButton: {
          backgroundColor: "#115173",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "1em",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "block",
          textAlign: "center",
          marginTop: "10px",
        },
        relatedGifts: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 كارد في كل سطر
    gap: "20px", // تباعد بين الكروت
    justifyContent: "start",
    direction: "rtl", // بدء من اليمين
    padding: "20px",
  },

 "@media (max-width: 1024px)": {
  cardContainer: {
    flex: "1 1 calc(33.33% - 20px)", // 3 كروت في كل سطر
  },
},
"@media (max-width: 768px)": {
  cardContainer: {
    flex: "1 1 calc(50% - 20px)", // 2 كارت في كل سطر
  },
},
"@media (max-width: 480px)": {
  relatedGifts: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)", // كارت واحد في كل سطر
    justifyContent: "center",
    padding: "20px",
  },
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)", // 3 كروت في السطر
  },

  /* عند تصغير الشاشة إلى 768px */
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)", // 2 كارد في السطر
  },

  /* عند تصغير الشاشة إلى 480px */
  "@media (max-width: 480px)": {
    gridTemplateColumns: "repeat(1, 1fr)", // كارد واحد في كل سطر
    justifyContent: "center",
  },
},
      };

  return (
    <>
    {/* Hero section end */}
  
    <section className="dorne-welcome-area bg-overlay" style={sectionStyle}>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-md-10">
            <div className="hero-content text-center text-white"></div>
  
            <div style={bigCardStyle} className="mt-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src="https://i.pinimg.com/736x/47/d2/c2/47d2c22f9255593d5dbb0f1443369f4f.jpg"
                    alt="صورة الوجهة"
                    className="img-fluid rounded shadow"
                  />
                </div>
  
                <div className="col-md-6">
                  <div className="card-body text-white">
                    <h3 className="card-title">عمان</h3>
                    <p
                      className="card-text"
                      style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
                    >
                      عمان هي مدينة مليئة بالأماكن المثيرة للاستكشاف! من المعالم
                      التاريخية والمواقع الثقافية إلى الحدائق المناسبة للعائلات
                      والأسواق النابضة بالحياة، هناك شيء للجميع. سواء كنت تبحث عن
                      مغامرة، استرخاء، أو تجربة طعام فريدة، تقدم عمان العديد من
                      الخيارات لجعل زيارتك لا تنسى.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div style={buttonContainerStyle} className="mt-3">
              <div style={{ display: "flex", gap: "10px" }}>
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.category}`}
                    className="btn btn-primary"
                    style={buttonStyle}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#0056b3")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#115173")
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Hero section end */}
  
    <h2
        className="section-title"
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#FFD700",
          marginTop: "100px",
          transition: "color 0.3s ease",
          marginBottom: "-100px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.target.style.color = "#FFC107")}
        onMouseLeave={(e) => (e.target.style.color = "#FFD700")}
      >
        الوجهات ذات الصلة
      </h2>

      <div className="container" style={{ marginTop: 100, width: "90%" }}>
        
      <h1 className="text-white text-center mb-5" style={styles.sectionTitle}></h1>
      <div
        className="search-favorite d-flex justify-content-between align-items-center mb-4"
        style={{ position: "left" }}
      >
        <div
          className="favorite-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <a
            href="#"
            onClick={() => {
              const userToken = localStorage.getItem("token");
              localStorage.getItem(`favorites_${userEmail}`);
  
              if (!userToken) {
                alert("يرجى تسجيل الدخول لحفظ الأماكن في المفضلة.");
                return;
              }
              setShowFavorites(!showFavorites);
            }}
            style={{ marginLeft: 10, cursor: "pointer" }}
          >
            {showFavorites ? " " : " "}
            <img
              src={favoriteImage}
              alt="4 Seasons"
              style={{ width: 50, height: 50 }}
            />
          </a>
  
          <Link to="/seasonPage/الشتاء">
            <img
              src={seasonsImage}
              alt="4 Seasons"
              style={{ width: 50, height: 50, cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className="search-bar" style={{ marginRight: 10 }}>
          <input
            type="text"
            className="form-control"
            placeholder=" 🔎 ابحث عن  الموقع"
            id="searchInput"
            style={{ textAlign: "right", position: "righ" }}
          />
        </div>
      </div>
    <div
          style={{
            padding: "20px",
            position: "relative",
            minHeight: "100vh",
            marginTop: "100px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <h1 style={{ textAlign: "center", color: "#022C43" }}>
            الأماكن في {city}
          </h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
            >
              {getDisplayedPlaces().length > 0 ? (
                getDisplayedPlaces().map((place) => (
                  <div
                    key={place._id}
                    style={{
                      width: "300px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      padding: "15px",
                      textAlign: "center",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <img
                      src={place.gallery[0]}
                      alt={place.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                    <h3 style={{ color: "#115173" }}>{place.name}</h3>
                    <p style={{ color: "#444444" }}>{place.short_description}</p>
                    <p>
                      <strong style={{ color: "#022C43" }}>التفاصيل:</strong>{" "}
                      {place.detailed_description}
                    </p>
                    <p>
                      <strong style={{ color: "#022C43" }}>أفضل موسم:</strong>{" "}
                      {place.best_season}
                    </p>
                    <p>
                      <strong style={{ color: "#022C43" }}>المدينة:</strong>{" "}
                      {place.city}
                    </p>
                    <p>
                      <strong style={{ color: "#022C43" }}>تواصل:</strong>{" "}
                      {place.contact?.phone}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <button
                        style={{
                          padding: "10px",
                          backgroundColor: showFavorites ? "#dc3545" : "#FFD700",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          flexGrow: 1,
                          marginRight: "10px",
                          transition: "background-color 0.3s",
                        }}
                        onClick={() =>
                          showFavorites
                            ? removeFromFavorites(place)
                            : addToFavorites(place)
                        }
                      >
                        {showFavorites ? "إزالة من المفضلة" : "أضف للمفضلة"}
                      </button>
                      <button
                        style={{
                          padding: "10px",
                          backgroundColor: "#115173",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          flexGrow: 1,
                          transition: "background-color 0.3s",
                        }}
                        onClick={() => handleDetails(place)}
                      >
                        المزيد
                      </button>
                    </div>
                  </div>
              ))
          ) : (
            <p
              style={{ textAlign: "center", fontSize: "18px", color: "gray" }}
            >
              لا توجد أماكن متاحة.
            </p>
          )}
        </div>
  
        {/* Pagination */}
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {Array.from({ length: Math.ceil(places.length / 6) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  margin: "0 5px",
                  padding: "10px 15px",
                  backgroundColor: currentPage === i + 1 ? "#115173" : "#FFD700",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  </>
      );
    };
    
    

export default CityPage;