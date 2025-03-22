import React from "react";

const sportsClubs = [
  {
    title: "الاتحاد الفني للفروسية في الأردن (FEI)",
    imageUrl: "https://arab.vet/wp-content/uploads/2024/10/%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A-%D9%84%D9%84%D9%81%D8%B1%D9%88%D8%B3%D9%8A%D8%A9-FEI-780x470.jpg",
    description: "يهتم الاتحاد الفني للفروسية بتنظيم البطولات والفعاليات المتعلقة برياضة الفروسية وتطوير مهارات الفرسان في الأردن.",
    price: "سعر الاشتراك: حسب البرنامج",
    detailsLink: "more-details.html",
    season: "winter❄️",
  },
  {
    title: "مراكز إعداد كرة الطائرة في الزرقاء",
    imageUrl: "https://imgy.pro/alghad/907x511/u/1/0/4/3/9/9/2/%D9%85%D9%84%D8%B9%D8%A8%20%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D8%B1%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A8%D8%A7%D9%84%D8%B2%D8%B1%D9%82%D8%A7%D8%A1%20%D8%AC%D8%A7%D9%87%D8%B2%20%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%A8%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B1%D9%8A%D8%A7%D8%AA%20%E2%80%93%20(%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B5%D8%AF%D8%B1).jpg",
    description: "توفر هذه المراكز برامج تدريبية متخصصة لتطوير مهارات لاعبي كرة الطائرة من مختلف الأعمار والمستويات.",
    price: "سعر الاشتراك: حسب البرنامج",
    detailsLink: "more-details.html",
    season: "fall🍂",
  },
  {
    title: "نادي الشطرنج الملكي",
    imageUrl: "https://samanews.ps/ar/uploads/images/59fd6a32335d6d805913b2c4160ea500.jpg",
    description: "يهتم نادي الشطرنج الملكي بتطوير مهارات اللاعبين وتنظيم البطولات المحلية والدولية لعشاق لعبة الشطرنج.",
    price: "سعر الاشتراك: حسب المستوى",
    detailsLink: "more-details.html",
    season: "summer🌞",
  },
  {
    title: "مدرسة السباحة في أكاديمية معبد الثالوث",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSimkWVLylM4m5a1zv_M2RY68gWl83Vn0sg&s",
    description: "تقدم المدرسة برامج تدريبية متكاملة لتعليم السباحة للأطفال والكبار على يد مدربين محترفين.",
    price: "سعر الاشتراك: حسب الدورة",
    detailsLink: "more-details.html",
    season: "fall🍂",
  },
  {
    title: "الصالحية لكرة القدم",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FoyIQTWyV-Mr5clzZIjsZxAeOL-ZyaGN4qs5ESHYsjmuqzbhAm54fgPhqcVGb3FUKqg&usqp=CAU",
    description: "يوفر نادي الصالحية تدريبات مكثفة لتطوير مهارات لاعبي كرة القدم، مع التركيز على اللياقة البدنية والتكتيك.",
    price: "سعر الاشتراك: حسب الفئة العمرية",
    detailsLink: "more-details.html",
    season: "spring🌼",
  },
  {
    title: "نادي الجولف الدولي",
    imageUrl: "https://www.addustour.com/file.php?fileid=616990&width=800&height=450",
    description: "يقدم نادي الجولف الدولي مرافق تدريب حديثة ودورات تعليمية لجميع المستويات، بالإضافة إلى تنظيم البطولات المحلية.",
    price: "سعر الاشتراك: حسب العضوية",
    detailsLink: "more-details.html",
    season: "summer🌞",
  },
];

const  SportClub= () => {
  
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
    }}>الاندية الرياضية</h1>
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
      {/* البطاقات هنا */}
      {sportsClubs.map((museum, index) => (
        <div className="col-md-4 col-sm-6 mb-4" key={index}>
          <div className="product-card" style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            transition: "transform 0.3s, box-shadow 0.3s",
            position: "relative",
            maxWidth: "250px", // Reduced max width
            height: "400px", // Adjusted height
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
            }}>{museum.season}</span>

            <img
              src={museum.imageUrl}
              alt={museum.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }} // Reduced height for image
            />

            <div className="card-body" style={{ padding: "10px", textAlign: "center" }}>
              <h3 className="card-title" style={{ fontSize: "1.3em", margin: "10px 0", color: "#333" }}>
                {museum.title}
              </h3>
              <div style={{ color: "#666", margin: "5px 0", fontSize: "0.9em" }}>
                📍 الموقع
              </div>
              <p className="card-text" style={{ color: "#666", margin: "5px 0", fontSize: "0.8em" }}>
                {museum.description}
              </p>
              <div className="price" style={{ fontWeight: "bold", margin: "5px 0", color: "#e74c3c" }}>
                {museum.price}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderTop: "1px solid #ddd" }}>
              <a href="favorite" target="_blank" style={{
                cursor: "pointer",
                color: "#FFD700",
                fontSize: "1.5rem" // Reduced icon size
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
                  padding: "5px 8px", // Adjusted padding
                  borderRadius: "5px",
                  fontSize: "0.8em" // Reduced button font size
                }}
              >
                المزيد
              </a>
            </div>
          </div>
        </div>
      ))}
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
  }}></div>
</section>

<style jsx>{`
  .museums-section {
    padding: 100px 0;
    position: relative;
    background-image: url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/11/8a/68/caption.jpg?w=900&h=500&s=1');
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
<div className="info-card text-right">
  <h2 className="text-center mb-3">نادي الشطرنج الملكي</h2>
  <p className="text-muted">عمان - عبدون</p>
  <div className="rating mb-3 text-center">
    <i className="fas fa-star" /> 4.8
  </div>
  <div className="about mb-3">
    <h3 className="text-center">عن النادي</h3>
    <p>
      تأسس نادي الشطرنج الملكي لتعزيز رياضة الشطرنج في الأردن وتطوير مهارات اللاعبين من مختلف الأعمار.
      يوفر النادي بيئة مثالية للتدريب والمنافسة، ويستضيف بطولات محلية ودولية.
    </p>
  </div>
  <div className="details">
    <div className="detail">
      <h4>رسوم الاشتراك</h4>
      <p>5.00 دينار أردني شهريًا</p>
    </div>
    <div className="detail">
      <h4>ساعات العمل</h4>
      <p>9:00 صباحًا - 9:00 مساءً</p>
    </div>
    <div className="detail">
      <h4>الموقع</h4>
      <p>عمان - عبدون</p>
    </div>
  </div>
  <div className="map-button mb-3 text-center">
    <a href="#" className="btn btn-primary">
      الخريطة التفاعلية
    </a>
  </div>
</div>

<style jsx>{`
  .info-card {
    direction: rtl; /* Set text direction to right-to-left */
    background-color: #f8f9fa; /* Light background for better contrast */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .text-right {
    text-align: right; /* Align text to the right */
  }

  .btn-primary {
    background-color: rgb(17, 81, 115);
    border: none;
    color: white;
  }

  .btn-primary:hover {
    background-color: rgb(10, 60, 90); /* Darker shade on hover */
  }
`}</style>

    {/* حاوية الصور */}
    <div className="image-container">
  <div className="main-image">
    <img
      src="https://i.pinimg.com/736x/7d/3d/d3/7d3dd317e3fbd8f06a49a0ccbb9883e3.jpg"
      alt="نادي الشطرنج"
      className="img-fluid main-club"
    />
  </div>
  <div className="small-images">
    <img
      src="https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/474086541_1117237476870187_6768662233531713980_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFvmDTOUWwBqZJQIa-B30QoOmLH6Nh-Gqo6Ysfo2H4aqt3lRLpaw1-bW4J3Lj7Rwks&_nc_ohc=jqR0Ff71Pz8Q7kNvgFaNHS2&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=AQXY_BPwgAle_Qs6F70hU_K&oh=00_AYCBrpUAmc5OXqxj34C7m9dyozSEgSOSG3v8_k7LyqlNMA&oe=67A8432A"
      alt="بطولة شطرنج"
      className="img-fluid smaller-club"
    />
    <img
      src="https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/463365932_8851674908178475_441502559088653524_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeGg9hHz10-dW50BeHOsm-HTYkeEtqRHK5FiR4S2pEcrkRW0uXX-YzOb7irkTrihRjg&_nc_ohc=nL0I6uh3hhwQ7kNvgF1eYqf&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=AjfbJbqSpt8rYgBx1WRsphw&oh=00_AYDjy-X9PAmqYYJLKJUjTXxG9mNBrg8f1Vh3z5xloKkvCw&oe=67A83DBA"
      alt="لاعب شطرنج"
      className="img-fluid smaller-club"
    />
  </div>
</div>
  </div>

  {/* معرض السيارات */}
  <div className="container py-5">
    <h2
      className="text-center mb-4"
      style={{ color: "#11374d", fontWeight: "bold" }}
    >
      معرض السيارات
    </h2>
    <div className="row justify-content-center gallery" style={{ height: '600px', overflowY: 'auto' }}>
      {[
        "https://i.pinimg.com/736x/c6/60/e3/c660e35086e333926e0e652f13591e07.jpg",
        "https://i.pinimg.com/736x/32/65/9f/32659f36d33bc72a545ff329af249a61.jpg",
        "https://i.pinimg.com/736x/76/8c/9d/768c9debaedddf159a0a9cf7c4bd313a.jpg",
        "https://i.pinimg.com/736x/43/f1/de/43f1de4b0f447b272d15ffbe20090da1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4pWRxitXKbyrmYrkKGeSqoz5O72Q5aAnT_iotUThSO15XZpKpf0Q2CAK7vxcEO1uBtc&usqp=CAU"
      ].map((src, index) => (
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
    <div className="options text-center">
      <div className="option" data-url="../reason/checkOut.html">
        شراء التذكرة
      </div>
      <div className="option" data-info="الأماكن القريبة">
        الأماكن القريبة
      </div>
      <div className="option" data-info="الفصل المناسب للزيارة">
        أفضل وقت للزيارة
      </div>
      <div className="option" data-info="معلومات عن ملاعب">
        ارفق مكان مماثل
      </div>
      <div className="option" data-info="معلومات عن مقاوم">
        المزيد
      </div>
    </div>
    <div className="rating-section text-center">
      <h3>قيم الموقع:</h3>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span className="star" key={star} data-value={star}>
            ★
          </span>
        ))}
      </div>
      <div id="rating-result">لم تقيم بعد</div>
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

export default SportClub;