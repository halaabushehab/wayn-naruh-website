// import { useParams, useEffect, useState } from "react";
// import axios from "axios";

// const seasons = [
//   {
//     name: 'الشتاء',
//     image: 'https://i.pinimg.com/736x/32/67/a6/3267a65ffd20d86460e16fe4d7448f4e.jpg',
//     museums: ['متحف الشهيد', 'متحف السيارات الملكي'],
//   },
//   {
//     name: 'الربيع',
//     image: 'https://i.pinimg.com/736x/79/47/92/794792e7810b3a00ed4e5e218c6a4b7d.jpg',
//     museums: ['متحف الفنون', 'متحف تاريخ الأردن'],
//   },
//   {
//     name: 'الصيف',
//     image: 'https://i.pinimg.com/736x/af/2f/c5/af2fc5188a8a77408fb9608ab4d0b18a.jpg',
//     museums: ['متحف الأطفال', 'معرض بانوراما عمان'],
//   },
//   {
//     name: 'الخريف',
//     image: 'https://i.pinimg.com/736x/a1/dc/03/a1dc034cae12923bbd33741ff0f8f5aa.jpg',
//     museums: ['متحف التراث', 'متحف الثقافة'],
//   },
// ];

// const SeasonPage = () => {
//   const { season } = useParams(); // جلب اسم الفصل من الرابط
//   const [places, setPlaces] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [backgroundImage, setBackgroundImage] = useState('');
//   const [selectedMuseums, setSelectedMuseums] = useState([]);

//   // دالة لتحديث الخلفية والمتحف بناءً على الفصل
//   const showMuseums = (season) => {
//     const selectedSeason = seasons.find(s => s.name === season);
//     if (selectedSeason) {
//       setBackgroundImage(selectedSeason.image);
//       setSelectedMuseums(selectedSeason.museums);
//     }
//   };

//   useEffect(() => {
//     if (season) { // تأكد أن season ليس فارغًا
//       showMuseums(season); // تحديث الخلفية والمتحف
//       axios.get(`http://localhost:9527/places/season/${season}`)
//         .then((response) => {
//           console.log("البيانات المسترجعة:", response.data);
//           setPlaces(response.data); // حفظ البيانات
//           setLoading(false); // إيقاف التحميل
//         })
//         .catch((error) => {
//           console.error("خطأ أثناء جلب البيانات:", error);
//           setError("حدث خطأ أثناء جلب البيانات.");
//           setLoading(false); // إيقاف التحميل
//         });
//     } else {
//       console.log("تحذير: الموسم غير معرف، لن يتم إرسال الطلب.");
//       setLoading(false); // إيقاف التحميل
//     }
//   }, [season]);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center">أفضل وجهات {season} في الأردن</h2>
//       {loading ? (
//         <p className="text-center">جارٍ تحميل البيانات...</p>
//       ) : error ? (
//         <p className="text-danger text-center">{error}</p>
//       ) : (
//         <div className="row">
//           {places.map((place) => (
//             <div key={place.id} className="col-md-4 mb-4">
//               <div className="card">
//                 <img src={place.image} alt={place.name} className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">{place.name}</h5>
//                   <p className="card-text">{place.short_description}</p>
//                   <p className="text-muted">التصنيف: {place.categories.join(", ")}</p>
//                   <p className="text-muted">السعر: {place.ticket_price === 0 ? "مجاني" : `${place.ticket_price} دينار`}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="mt-4">
//         <h3>المتاحف الموصى بها في فصل {season}</h3>
//         <ul>
//           {selectedMuseums.map((museum, index) => (
//             <li key={index}>{museum}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SeasonPage;



import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SeasonalDestinations from "../../components/HomeComponents/SeasonalDestinations";

const colors = {
  white: "#FFFFFF",
  gold: "#FFD700",
  darkBlue: "#022C43",
  darkGray: "#333333",
  navyBlue: "#115173",
  deepBlue: "#053F5E",
  cardBg: "rgba(255, 255, 255, 0.85)", // Semi-transparent white
};

const seasons = [
  { name: "الشتاء", image: "https://i.pinimg.com/736x/32/67/a6/3267a65ffd20d86460e16fe4d7448f4e.jpg", museums: ["متحف الشهيد", "متحف السيارات الملكي"] },
  { name: "الربيع", image: "https://i.pinimg.com/736x/79/47/92/794792e7810b3a00ed4e5e218c6a4b7d.jpg", museums: ["متحف الفنون", "متحف تاريخ الأردن"] },
  { name: "الصيف", image: "https://i.pinimg.com/736x/af/2f/c5/af2fc5188a8a77408fb9608ab4d0b18a.jpg", museums: ["متحف الأطفال", "معرض بانوراما عمان"] },
  { name: "الخريف", image: "https://i.pinimg.com/736x/a1/dc/03/a1dc034cae12923bbd33741ff0f8f5aa.jpg", museums: ["متحف التراث", "متحف الثقافة"] },
];

const SeasonPage = () => {
  const { season } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [selectedMuseums, setSelectedMuseums] = useState([]);

  useEffect(() => {
    if (!season) {
      setLoading(false);
      return;
    }
    
    const normalizedSeason = season.trim();
    const selectedSeason = seasons.find((s) => s.name === normalizedSeason);
    if (selectedSeason) {
      setBackgroundImage(selectedSeason.image);
      setSelectedMuseums(selectedSeason.museums);
    }
    
    axios
      .get(`http://localhost:9527/places/season/${normalizedSeason}`)
      .then((response) => {
        setPlaces(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("حدث خطأ أثناء جلب البيانات.");
        setLoading(false);
      });
  }, [season]);

  return (
    <>
      <SeasonalDestinations />
      <div 
        className="container mt-4 p-4 rounded shadow-lg" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          color: colors.white,
        }}
      >
        <h2 
          className="text-center p-3 rounded" 
          style={{ backgroundColor: colors.navyBlue, color: colors.gold }}
        >
          أفضل وجهات {season} في الأردن
        </h2>

        {loading ? (
          <p className="text-center text-light">جارٍ تحميل البيانات...</p>
        ) : error ? (
          <p className="text-danger text-center">{error}</p>
        ) : (
          <div className="row">
            {places.map((place) => (
              <div key={place.id} className="col-md-4 mb-4">
                <div 
                  className="card p-3 shadow-sm" 
                  style={{ 
                    background: colors.cardBg, 
                    borderRadius: "15px", 
                    backdropFilter: "blur(10px)", 
                    border: "1px solid rgba(255, 255, 255, 0.3)" 
                  }}
                >
                  <div 
                    className="d-flex justify-content-between align-items-center p-2"
                    style={{ backgroundColor: colors.gold, borderRadius: "10px" }}
                  >
                    <span className="fw-bold">{place.name}</span>
                    <span>⭐ {place.rating || "4.5"}</span>
                  </div>
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="card-img-top rounded mt-2" 
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      {place.short_description}
                    </p>
                    <p className="text-muted">التصنيف: {place.categories.join(", ")}</p>
                    <p className="text-muted">
                      السعر: {place.ticket_price === 0 ? "مجاني" : `${place.ticket_price} دينار`}
                    </p>
                    <button 
                      className="btn w-100 text-light mt-2"
                      style={{
                        background: "linear-gradient(45deg, #022C43, #115173)",
                        borderRadius: "10px",
                        padding: "8px 0",
                      }}
                    >
                      المزيد
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SeasonPage;
