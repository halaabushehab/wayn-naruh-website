// Categories.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [places, setPlaces] = useState([]);
  const [category, setCategory] = useState("مطاعم"); // التصنيف الافتراضي

  useEffect(() => {
    if (category) {
      axios
        .get(`http://localhost:9527/places/category/${category}`)
        .then((response) => {
          setPlaces(response.data);
        })
        .catch((error) => {
          console.error("Error fetching places:", error);
        });
    }
  }, [category]); // إعادة جلب البيانات عند تغيير التصنيف

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>اكتشف الأماكن</h1>

      {/* 🔹 أزرار التصنيفات */}
      <div style={styles.categories}>
        {["مطاعم", "طبيعة", "متاحف", "تسوق"].map((cat) => (
          <button
            key={cat}
            style={styles.button}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔹 عرض الأماكن */}
      <div style={styles.placesContainer}>
        {places.length > 0 ? (
          places.map((place) => (
            <div key={place.id} style={styles.placeCard}>
              <img
                src={place.PlaceImages?.[0]?.imageUrl || "default.jpg"}
                alt={place.name}
                style={styles.image}
              />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))
        ) : (
          <p style={styles.noPlaces}>
            لا توجد أماكن متاحة في فئة "{category}".
          </p>
        )}
      </div>
    </div>
  );
};

// 🎨 **التصميم (CSS in JS)**
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  categories: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#3498db",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    backgroundColor: "#2980b9",
  },
  placesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  placeCard: {
    width: "250px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  noPlaces: {
    fontSize: "18px",
    color: "#777",
  },
};

export default Categories;




// import img1 from '../../components/img/img6.jpg';
// import img2 from '../../components/img/img8.jpg';
// import img3 from '../../components/img/468972421_1791075752704752.jpg';
// import img4 from '../../components/img/9ef832334bf52f579c9169f1d7627286 - Copy.jpg';
// import img5 from '../../components/img/تسلق.jpg';
// import img6 from '../../components/img/f5feade344a12a0980225f7adc6922f9.jpg';

// <div className="container py-4" style={{ maxWidth: "900px" }}>
//   <div className="text-center mb-4">
//     <h2 className="display-5 fw-bold text-dark">اكتشف الفئات</h2>
//     <p className="text-muted">استكشف الأماكن المميزة في الأردن حسب الفئة</p>
//   </div>

//   {/* أزرار الفئات */}
//   <div className="d-flex justify-content-start mb-4">
//     {categories.map((category) => (
//       <button
//         key={category.title}
//         onClick={() => setActiveCategory(category)}
//         className={`btn me-2 ${activeCategory.title === category.title ? 'border-bottom border-primary' : ''}`}
//         style={{
//           fontSize: "12px",
//           padding: "5px 10px",
//           backgroundColor: "transparent",
//           border: "none",
//           cursor: "pointer",
//           transition: "color 0.3s",
//         }}
//         onMouseEnter={(e) => e.currentTarget.style.color = "#115173"}
//         onMouseLeave={(e) => e.currentTarget.style.color = "black"}
//       >
//         {category.title}
//       </button>
//     ))}
//   </div>

//   {/* عرض الفئة النشطة */}
//   <div className="row g-4">
//     {categories.map((category, index) => (
//       activeCategory.title === category.title && (
//         <div className="col-md-3" key={index}>
//           <div className="card shadow-sm border-0">
//             <img
//               src={category.image}
//               className="card-img-top"
//               alt={category.title}
//               style={{ height: "200px", objectFit: "cover" }}
//             />
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold">{category.title}</h5>
//               <p className="card-text text-muted">{category.description}</p>
//               <Link to="#" className="btn" style={{ backgroundColor: "#115173", color: "#FFD700" }}>
//                 استكشف الآن
//               </Link>
//             </div>
//           </div>
//         </div>
//       )
//     ))}
//   </div>
// </div>
