import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import RatingPlace from "../../components/RatingPlace"




const PlaceDetails = () => {
  const [museums, setMuseums] = useState([]);
  const [selectedMuseum, setSelectedMuseum] = useState(null);
  const { id } = useParams(); // استخراج ID من الـ URL
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPlaces, setRelatedPlaces] = useState([]); // إضافة حالة للأماكن المرتبطة
  
 // ✅ جلب بيانات المكان حسب ID
 useEffect(() => {
  const fetchPlaceDetails = async () => {
    try {
      console.log("🔍 Fetching from:", `http://localhost:9527/places/${id}`);
      const response = await axios.get(`http://localhost:9527/places/${id}`);
      console.log("✅ Data received:", response.data);
      setPlace(response.data);
    } catch (err) {
      console.error("❌ Error fetching place details:", err.response?.data || err.message);
      setError("حدث خطأ أثناء جلب البيانات.");
    } finally {
      setLoading(false);
    }
  };

  fetchPlaceDetails();
}, [id]);

// ✅ جلب الأماكن المرتبطة بالفئة بعد تحميل place
// ✅ جلب الأماكن المرتبطة بالفئة بعد تحميل place
useEffect(() => {
  if (!place || !place.categories || place.categories.length === 0) return;

  const category = encodeURIComponent(place.categories[0]); // استخدام أول فئة
  console.log("🔍 Fetching related places for category:", category);

  axios.get(`http://localhost:9527/places/category/${category}`)
    .then((response) => {
      console.log("✅ Related places data received:", response.data);
      setRelatedPlaces(response.data.slice(0, 6)); // عرض أول 6 أماكن مشابهة
    })
    .catch((error) => console.error("❌ Error fetching related places:", error));
}, [place]); // يتم تشغيله عند تحديث place



  if (loading) return <p>جارٍ التحميل...</p>;
  if (error) return <p>{error}</p>;
  if (!place) return <p>لم يتم العثور على المكان.</p>;

  const handleClick = () => {
    if (place.is_free) {
      alert("لا يوجد حاجة لحجز تذاكر لهذا الموقع، يمكنك الذهاب مباشرة!");
    } else {
      navigate(`/pay/${place._id}`);
    }
  };



  return (
    <>


{/* MUSEUM START */}
<section className="museums-section">
      <div className="container" style={{ marginTop: 100, position: "relative", zIndex: 2 }}>
        <h1 className="text-white text-center mb-5" style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
          fontFamily: "var(--font-family-titel)"
        }}>أماكن مشابهة</h1>
        <div className="search-favorite d-flex justify-content-between align-items-center mb-4" style={{ marginBottom: "20px" }}>
          <div className="search-bar" style={{ marginLeft: "auto" }}>
            <input
              type="text"
              className="form-control"
              placeholder="ابحث عن المتحف"
              id="searchInput"
              style={{
                borderRadius: "5px",
                padding: "10px",
                border: "1px solid #ddd",
                width: "100%",
                maxWidth: "300px"
              }}
            />
          </div>
        </div>
        <div className="row" id="museumCards" style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
        {relatedPlaces.length > 0 ? (
        relatedPlaces.map((place, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="product-card" style={{
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "15px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                position: "relative",
                maxWidth: "250px",
                height: "400px",
                margin: "auto"
              }}>
                <span style={{
                  backgroundColor: "rgba(255, 193, 7, 0.8)",
                  color: "#000",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  zIndex: 1
                }}>{place.season}</span>

                <img
                  src={place.images
                  }
                  alt={place.name
                  }
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />

                <div className="card-body" style={{ padding: "10px", textAlign: "center" }}>
                  <h3 className="card-title" style={{ fontSize: "1.3em", margin: "10px 0", color: "#333" }}>
                    {place.name
                    }
                  </h3>
                  <div style={{ color: "#666", margin: "5px 0", fontSize: "0.9em" }}>
                    📍 الموقع
                  </div>
                  <p className="card-text" style={{ color: "#666", margin: "5px 0", fontSize: "0.8em" }}>
                    {place.description}
                  </p>
                  <div className="price" style={{ fontWeight: "bold", margin: "5px 0", color: "#e74c3c" }}>
                    {place.price}
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderTop: "1px solid #ddd" }}>
                  <a href="favorite" target="_blank" style={{
                    cursor: "pointer",
                    color: "#FFD700",
                    fontSize: "1.5rem"
                  }}>
                    <i className="bx bx-heart-circle"></i>
                  </a>
                  <a
                    href="more-details.html"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "rgb(17, 81, 115)",
                      border: "none",
                      color: "white",
                      padding: "5px 8px",
                      borderRadius: "5px",
                      fontSize: "0.8em"
                    }}
                  >
                    المزيد
                  </a>
                </div>
              </div>
            </div>
         ))
        ) : (
          <p className="text-white text-center">لا توجد أماكن مشابهة متاحة.</p>
        )}
        </div>
      </div>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1
      }}>
        
      </div>
    </section>

<style jsx>{`
  .museums-section {
    padding: 100px 0;
    position: relative;
    background-image: url('https://i.pinimg.com/736x/df/51/0b/df510b0f6a90123515b2e77d1ef45416.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 200vh;
  }

  @media (max-width: 1200px) {
    .product-card {
      max-width: 230px; // Further reduced for medium screens
      height: 350px; // Adjusted height
    }
  }

  @media (max-width: 992px) {
    .product-card {
      max-width: 200px; // Further reduced for medium screens
      height: 300px; // Adjusted height
    }
  }

  @media (max-width: 768px) {
    .product-card {
      max-width: 180px; // Further reduced for smaller screens
      height: 250px; // Adjusted height
    }
  }

  @media (max-width: 576px) {
    .product-card {
      max-width: 150px; // Further reduced for extra small screens
      height: 220px; // Adjusted height
    }
  }

  @media (max-width: 400px) {
    .product-card {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    .museums-section {
      height: 650vh;
    }

    h1 {
      font-size: 2rem;
    }

    .search-bar {
      max-width: 100%;
    }

    .product-card {
      max-width: 90%;
    }
  }

  @media (max-width: 576px) {
    .product-card {
      max-width: 100%;
    }

    h1 {
      font-size: 1.8rem;
    }

    .card-title {
      font-size: 1.2em; // Further reduced title size
    }
  }
`}</style>
{/* end */}


<>
<div className="container mt-5">
  <div className="content-container">
    {/* كارد المعلومات */}
    <div className="info-card">
      <h2 className="text-center mb-3">  {place.name}</h2>
      <p className="text-center text-muted"> {place.city} </p>
      <div className="rating mb-3 text-center">
        <i className="fas fa-star" /> ⭐  {place.rating}
      </div>
      <div className="about mb-3">
        <h3 className="text-center">عن المتحف</h3>
        <p>
        {place.short_description}
        {place.detailed_description}
        </p>
      </div>
      <div className="details">
        <div className="detail">
          <h4>التذاكر</h4>
          <p> {place.ticket_price === 0 ? "مجاني" : `${place.ticket_price} دينار`} </p>
        </div>
        <div className="detail">
          <h4>ساعات العمل</h4>
          <p>{place.working_hours} </p>
        </div>
        <div className="detail">
          <h4>الموقع</h4>
          <p>الموقع الجغرافي</p>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
          {place.categories.map((category, index) => (
            <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">{category}</span>
          ))}
        </div>
    </div>

    {/* حاوية الصور */}
   {/* حاوية الصور */}
<div className="image-container">
  {/* الصورة الرئيسية */}
  <div className="main-image">
    <img
      src={place.images?.[0]} // عرض أول صورة من `images`
      alt="سيارة رئيسية"
      className="img-fluid main-car"
    />
  </div>

  {/* الصور الصغيرة */}
  <div className="small-images">
    {place.images?.slice(1, 3).map((img, index) => ( // عرض أول صورتين بعد الصورة الرئيسية
      <img
        key={index}
        src={img}
        alt={`صورة ${index + 1}`}
        className="img-fluid smaller-car"
      />
    ))}
  </div>
</div>
</div>
{/* معرض السيارات */}
<div className="container py-5">
  <h2 className="text-center mb-4" style={{ color: "#11374d", fontWeight: "bold" }}>
     استمتع بمشاهدة مجموعة من الصور التي تسلط الضوء على جمال  {place.name}   
  </h2>

  {/* شبكة الصور من `gallery` */}
  <div className="row justify-content-center gallery" style={{ height: '600px', overflowY: 'auto' }}>
    {place.gallery?.map((src, index) => (
      <div className="col-md-6 col-lg-4 mb-4" key={index}>
        <div className="img-container">
          <img src={src} alt={`Car ${index + 1}`} className="img-fluid" />
        </div>
      </div>
    ))}
  </div>
</div>

{/* حول المكان */}
<div className="container mt-5">
  <h1 style={{ color: "#11374d", textAlign: "center" }}>حول المكان</h1>

  {/* خيارات المعلومات والحجز */}
  <div className="options text-center grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
  <button 
      onClick={handleClick} 
      className="option block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      شراء التذكرة
    </button>
    <div className="option bg-gray-200 py-2 rounded-lg" data-info="الأماكن القريبة">
      الأماكن القريبة
    </div>
    <div className="option bg-gray-200 py-2 rounded-lg" data-info="وسائل النقل">
      وسائل النقل المتاحة
    </div>
    <div className="option bg-gray-200 py-2 rounded-lg no-underline cursor-pointer" data-info="الخريطة التفاعلية">
      <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
        عرض الموقع على الخريطة
      </a>
    </div>
    <div className="option bg-gray-200 py-2 rounded-lg" data-info="إقتراح أماكن مشابهة">
      إقتراح أماكن مشابهة
    </div>
  </div>

  {/* <div className="map-container mt-5">
    <h3 className="text-center">الموقع على الخريطة:</h3>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.916163524317!2d-122.08424968469273!3d37.42199997982585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI1JzEwLjEiTiAxMjLCsDA1JzA0LjYiVw!5e0!3m2!1sen!2sjo!4v1617161586892!5m2!1sen!2sjo"
      width="100%"
      height="300"
      allowFullScreen=""
      loading="lazy"
      className="rounded-lg shadow-lg"
    ></iframe>
  </div> */}

  {/* قسم التقييم */}
{/* قسم التقييم */}
<div>
      {/* معلومات المكان الأخرى */}
      {place && <RatingPlace placeId={place._id} />}
    </div>
</div>


  {/* CSS داخلي */}
  <style jsx>{`
    .content-container {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      flex-direction: row-reverse;
    }

    .info-card {
      flex: 1.5;
      background: #11374d;
      color: #fff;
      padding: 15px; /* Reduced padding */
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .info-card h2 {
      font-size: 1.5em; /* Reduced font size */
      color: #FFD700;
    }

    .rating {
      color: #FFD700;
      font-size: 1.1em; /* Reduced font size */
    }

    .about {
      font-size: 0.9em; /* Adjusted font size */
    }

    .details {
      margin-top: 15px; /* Reduced margin */
    }

    .details .detail {
      margin-bottom: 10px; /* Reduced margin */
    }

    .details h4 {
      margin-bottom: 5px;
      font-size: 1em; /* Reduced font size */
      color: #FFD700;
    }

    .map-button .btn {
      background-color: #FFD700;
      color: #000;
      border: none;
      font-weight: bold;
    }

    .map-button .btn:hover {
      background-color: #FFA500;
    }

    .image-container {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .main-image img {
      width: 90%;
      height: 300px; /* Reduced height */
      border-radius: 15px;
      border: 1px solid #FFD700;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .main-image img:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .small-images {
      display: flex;
      gap: 10px;
      width: 90%;
    }

    .small-images img {
      flex: 1;
      height: 120px; /* Reduced height */
      border: 1px solid #FFD700;
      border-radius: 15px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .small-images img:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .img-container {
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }

    .img-container img {
      width: 100%;
      height: auto;
      transition: transform 0.4s ease, opacity 0.4s ease;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .img-container:hover img {
      transform: scale(1.05);
      opacity: 0.9;
    }

    .gallery {
      height: 600px; /* Fixed height for the gallery */
      overflow-y: auto; /* Allow scrolling if necessary */
    }

    @media (max-width: 768px) {
      .content-container {
        flex-direction: column;
      }

      .small-images {
        flex-direction: row;
      }
    }

    @media (max-width: 480px) {
      .content-container {
        gap: 20px;
      }

      .info-card {
        padding: 10px; /* Reduced padding */
      }

      .info-card h2 {
        font-size: 1.2em; /* Reduced font size */
      }

      .rating {
        font-size: 0.8em; /* Reduced font size */
      }

      .details h4 {
        font-size: 0.8em; /* Reduced font size */
      }

      .main-image img {
        height: 200px; /* Reduced height */
      }

      .small-images img {
        height: 80px; /* Reduced height */
      }
    }

    .options {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .option {
      cursor: pointer;
      padding: 10px 15px; /* Adjusted padding */
      margin: 10px;
      background-color: #FFD700;
      border-radius: 8px;
      text-align: center;
      font-family: 'Arial', sans-serif;
      font-size: 16px; /* Adjusted font size */
      color: #11374d;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .option:hover {
      background-color: #FFA500;
      transform: scale(1.05);
    }

    .rating-section {
      margin-top: 40px;
      text-align: center;
      font-family: 'Arial', sans-serif;
      color: #11374d;
    }

    .star-rating {
      font-size: 30px;
      cursor: pointer;
    }

    .star {
      margin: 0 5px;
      color: gray;
      transition: color 0.3s;
    }

    #rating-result {
      margin-top: 10px;
      font-size: 18px;
    }
  `}</style>
</div>
</>
    </>
  );
};

export default PlaceDetails;
































// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const PlaceDetails = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPlaceDetails = async () => {
//       try {
//         console.log("🔍 Fetching from:", `http://localhost:9527/places/${id}`);

//         const response = await axios.get(`http://localhost:9527/places/${id}`);
//         console.log("✅ Data received:", response.data);

//         setPlace(response.data);
//       } catch (err) {
//         console.error("❌ Error fetching place details:", err.response?.data || err.message);
//         setError("حدث خطأ أثناء جلب البيانات.");
//       }
//     };

//     fetchPlaceDetails();
//   }, [id]);

//   if (error) return <p style={{ color: "red" }}>{error}</p>;
//   if (!place) return <p>⏳ جارٍ تحميل البيانات...</p>;

//   return (
//     <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
//       <h1>{place.name}</h1>
      
//       {/* عرض الصور */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         {place.gallery?.map((img, index) => (
//           <img 
//             key={index} 
//             src={img} 
//             alt={`صورة ${index + 1}`} 
//             style={{ width: "150px", height: "100px", borderRadius: "8px", objectFit: "cover" }}
//           />
//         ))}
//       </div>

//       <p><strong>الوصف:</strong> {place.detailed_description}</p>
//       <p><strong>أفضل موسم:</strong> {place.best_season || "غير محدد"}</p>
//       <p><strong>المدينة:</strong> {place.city}</p>
//       <p><strong>ساعات العمل:</strong> {place.working_hours}</p>
//       <p><strong>التقييم:</strong> ⭐ {place.rating}</p>
//       <p><strong>التذكرة:</strong> {place.ticket_price === 0 ? "مجانية" : `${place.ticket_price} دينار`}</p>
      
//       {/* عرض الفئات */}
//       <p><strong>التصنيفات:</strong> {place.categories?.join("، ")}</p>

//       {/* عرض الأشخاص المناسب لهم المكان */}
//       <p><strong>مناسب لـ:</strong> {place.suitable_for?.join("، ")}</p>

//       {/* رابط الخريطة */}
//       <p>
//         <strong>الموقع:</strong>{" "}
//         <a href={place.map_link} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>
//           افتح في Google Maps
//         </a>
//       </p>

//       {/* معلومات الاتصال */}
//       <p><strong>📞 الهاتف:</strong> {place.contact?.phone || "غير متوفر"}</p>
//       <p>
//         <strong>🌐 الموقع الإلكتروني:</strong>{" "}
//         {place.contact?.website ? (
//           <a href={place.contact.website} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>
//             {place.contact.website}
//           </a>
//         ) : (
//           "غير متوفر"
//         )}
//       </p>
//     </div>
//   );
// };

// export default PlaceDetails;
