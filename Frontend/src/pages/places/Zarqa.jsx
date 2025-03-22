import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import seasonsImage from "../../components/img/4-seasons.png"; // تأكد من المستوى الصحيح
import favoriteImage from "../../components/img/bookmark.png"; // تأكد من المستوى الصحيح

const Zarqa = () => {
        const sectionStyle = {
            backgroundImage:
              "url(https://i.pinimg.com/736x/22/75/2e/22752e19847e3b0cae24396a7cee8acc.jpg",
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
             {/*Hero section end */}
    
            <section className="dorne-welcome-area bg-overlay" style={sectionStyle}>
              <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center">
                  <div className="col-12 col-md-10">
                    <div className="hero-content text-center text-white">
                 
                    </div>
        
                    {/* الكارد */}
                    <div style={bigCardStyle} className="mt-4">
                  <div className="row align-items-center">
                    {/* الصورة */}
                    <div className="col-md-6">
                      <img
				  src="https://scontent.famm13-1.fna.fbcdn.net/v/t1.6435-9/127123488_1644512062387400_6830560409441485191_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wDpUWh3HjNkQ7kNvgESw08n&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=AmImClbKqcPE2QOhTZ_Vz6Z&oh=00_AYBfcumRJD2lGRO0p25d47Mej5KlJVsCkhg5iu-lBjZaWg&oe=67BF7DFF" 
          alt="صورة الوجهة"
                        className="img-fluid rounded shadow"
                      />
                    </div>
    
                    {/* النص */}
                    <div className="col-md-6">
                      <div className="card-body text-white">
                        <h3 className="card-title">الزرقاء</h3>
                        <p className="card-text" style={{ fontSize: "1.25rem", lineHeight: "1.8" }}>
                        الزرقاء مدينة حيوية تتميز بموقعها الصناعي والتجاري الهام، وتعد مركزًا نابضًا بالحياة. تضم العديد من الأسواق الشعبية والمقاهي التقليدية، بالإضافة إلى أماكن ترفيهية تلبي احتياجات العائلات. توفر الزرقاء تجربة فريدة تجمع بين الأصالة والحداثة.







</p>
                      </div>
                    </div>
                  </div>
                </div>
        
                    {/* قائمة الأزرار مع التمرير */}
                    <div style={buttonContainerStyle} className="mt-3">
                      {[
                        { name: "متاحف", link: "../places/destination-details.html" },
                        { name: "الأندية الرياضية", link: "../places/destination-details-sport-child.html" },
                        { name: "مطاعم", link: "#" },
                        { name: "ترفيه وألعاب", link: "#" },
                        { name: "أماكن أثرية", link: "#" },
                        { name: "أماكن للتصوير", link: "#" },
                        { name: "ثقافة وفنون", link: "#" },
                      ].map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="btn"
                          style={buttonStyle}
                          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                        >
                          {item.name}
                        </a>
                      ))}
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
        fontSize: "2.5rem", // تكبير الخط
        color: "#FFD700", // اللون الأساسي
        marginTop: "100px", // تحريكه للأسفل قليلًا
        transition: "color 0.3s ease",
        marginBottom: "-100px", // تحريكه للأسفل قليلًا
        cursor:"pointer"
    
      }}
      onMouseEnter={(e) => (e.target.style.color = "#FFC107")} // تغيير اللون عند التحريك فوقه
      onMouseLeave={(e) => (e.target.style.color = "#FFD700")} // إعادة اللون عند إزالة المؤشر
    >
      الوجهات ذات الصلة
    </h2>
         <div className="container" style={{ marginTop: 100 }}>
          <h1 className="text-white text-center mb-5" style={styles.sectionTitle}>
            
          </h1>
          <div className="search-favorite d-flex justify-content-between align-items-center mb-4" style={{ position: 'left' }}>
      <div className="favorite-icon" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="favorite" target="_blank" style={{ marginLeft: 10 }}>
        <img src={favoriteImage} alt="4 Seasons" style={{ width: 50, height: 50 }} />
    
            {/* alt="Bookmark"
            style={{ width: 50, height: 50 }}
          /> */}
        </a>
        <a href="../reason/features_1.html" target="_blank" style={{ marginLeft: 10 }}>
        <img src={seasonsImage} alt="4 Seasons" style={{ width: 50, height: 50 }} />
    
        </a>
      </div>
      <div className="search-bar" style={{ marginRight: 10 }}>
        <input
          type="text"
          className="form-control"
          placeholder=" 🔎 ابحث عن  الموقع"
          id="searchInput"
          style={{ textAlign: 'right' , position:"righ"}} // لجعل النص في الصندوق على اليمين
        />
      </div>
    </div>
    <div className="related-gifts" style={styles.relatedGifts}>
          {[...Array(8)].map((_, index) => (
            <div key={index} style={styles.cardContainer}>
    <span style={styles.seasonTag}>  الشتاء  ❄️</span>
    <div style={styles.favoriteIconContainer}>
                <i className="bx bx-heart-circle" style={styles.favoriteIcon}></i>
              </div>
              <img
                src="https://i.pinimg.com/736x/c9/42/28/c942285b64f5951ef3ecf474a783293d.jpg"
                alt="مكان سياحي"
                style={styles.cardImage}
              />
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>وادي رم - مغامرة في الصحراء</h3>
                <div style={styles.locationIcons}>📍 الأردن - وادي رم</div>
                <div style={styles.rating}>⭐ 4.8</div>
                <button style={styles.detailsButton}>عرض التفاصيل +</button>
              </div>
            </div>
          ))}
        </div>
        </div>
    </>
        
        
        
    
   
  );
};

export default Zarqa;