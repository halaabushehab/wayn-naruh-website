// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const SeasonalDestinations = () => {
//   const navigate = useNavigate();

//   const handleSeasonClick = (season) => {
//     navigate(`/seasonPage/${season}`);
//   };

//   return (
//     <div className="untree_co-section">
//       <div className="container">
//         <div className="row justify-content-center text-center mb-5">
//           <div className="col-lg-6">
//             <h2 className="section-title text-center mb-3">
//               أفضل الوجهات السياحية في الأردن حسب الفصول
//             </h2>
//             <p>
//               اكتشف أجمل الوجهات السياحية في الأردن التي يمكنك زيارتها في كل فصل
//               من فصول السنة. اختر الفصل المناسب واستمتع بتجارب فريدة تناسب كل
//               موسم.
//             </p>
//           </div>
//         </div>
//         <div className="row">
//           {/* فصل الصيف */}
//           <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ direction: 'rtl' }}>
//             <div className="media-1" onClick={() => handleSeasonClick('الصيف')} style={{ cursor: 'pointer' }} id="الصيف">
//               <img
//                 src="https://alqalahnews.net/assets/2020-07-19/news_gallery/254627_7_1595149938.jpg"
//                 alt="الصيف في الأردن"
//                 className="img-fluid"
//               />
//               <span className="d-flex align-items-center loc mb-2 text-right">
//                 <span className="icon-room mr-3" />
//                 <span>الصيف</span>
//               </span>
//               <h3 style={{ color: '#115173', textDecoration: 'none' }}>وجهات الصيف في الأردن</h3>
//               <p>
//                 استمتع بزيارة المناطق المرتفعة مثل عجلون والشفا حيث الطقس اللطيف والطبيعة الخضراء.
//                 أو قم بزيارة العقبة للاستمتاع بالشواطئ والأنشطة المائية.
//               </p>
//             </div>
//           </div>

//           {/* فصل الشتاء */}
//           <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ direction: 'rtl' }}>
//             <div className="media-1" onClick={() => handleSeasonClick('الشتاء')} style={{ cursor: 'pointer' }} id="الشتاء">
//               <img
//                 src="https://i.pinimg.com/736x/b9/bd/fb/b9bdfba6a360e2b83e77bebee7ee6cbf.jpg"
//                 alt="الشتاء في الأردن"
//                 className="img-fluid"
//               />
//               <span className="d-flex align-items-center loc mb-2 text-right">
//                 <span className="icon-room mr-3" />
//                 <span>الشتاء</span>
//               </span>
//               <h3 style={{ color: '#115173', textDecoration: 'none' }}>وجهات الشتاء في الأردن</h3>
//               <p>
//                 الشتاء هو الوقت المثالي لزيارة المناطق الدافئة مثل البحر الميت حيث يمكنك الاسترخاء والاستفادة من الخصائص العلاجية.
//               </p>
//             </div>
//           </div>

//           {/* فصل الربيع */}
//           <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ direction: 'rtl' }}>
//             <div className="media-1" onClick={() => handleSeasonClick('الربيع')} style={{ cursor: 'pointer' }} id="الربيع">
//               <img
//                 src="https://alqalahnews.net/assets/2020-07-19/news_gallery/254627_7_1595149938.jpg"
//                 alt="الربيع في الأردن"
//                 className="img-fluid"
//               />
//               <span className="d-flex align-items-center loc mb-2 text-right">
//                 <span className="icon-room mr-3" />
//                 <span>الربيع</span>
//               </span>
//               <h3 style={{ color: '#115173', textDecoration: 'none' }}>وجهات الربيع في الأردن</h3>
//               <p>
//                 استمتع بجمال الطبيعة في الربيع مع زيارة مناطق مثل جرش والبتراء حيث الأزهار تتفتح والطقس معتدل.
//               </p>
//             </div>
//           </div>

//           {/* فصل الخريف */}
//           <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ direction: 'rtl' }}>
//             <div className="media-1" onClick={() => handleSeasonClick('الخريف')} style={{ cursor: 'pointer' }} id="الخريف">
//               <img
//                 src="https://i.pinimg.com/736x/96/66/79/9666795c840ecea0114e78a37e150bf9.jpg"
//                 alt="الخريف في الأردن"
//                 className="img-fluid"
//               />
//               <span className="d-flex align-items-center loc mb-2 text-right">
//                 <span className="icon-room mr-3" />
//                 <span>الخريف</span>
//               </span>
//               <h3 style={{ color: '#115173', textDecoration: 'none' }}>وجهات الخريف في الأردن</h3>
//               <p>
//                 الخريف هو الوقت المثالي لزيارة المناطق الصحراوية مثل وادي رم حيث الطقس لطيف ومناسب للمغامرات.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS داخلي */}
//       <style jsx>{`
//         .untree_co-section {
//           padding: 2rem 0;
//         }
//         .media-1 {
//           transition: transform 0.3s ease-in-out;
//         }
//         .media-1:hover {
//           transform: scale(1.05);
//         }
//         .media-1 img {
//           border-radius: 10px;
//           width: 100%;
//           height: 450px;
//         }
//         .loc {
//           direction: rtl;
//         }
//         @media (max-width: 768px) {
//           .untree_co-section {
//             padding: 1rem 0;
//             height: auto;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SeasonalDestinations;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const SeasonalDestinations = () => {
  const navigate = useNavigate();

  const handleSeasonClick = (season) => {
    navigate(`/seasonPage/${season}`);
  };

  return (
    <div className="untree_co-section my-50">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6">
            <h2 className="section-title text-center mb-3">
              أفضل الوجهات السياحية في الأردن حسب الفصول
            </h2>
            <p>
              اكتشف أجمل الوجهات السياحية في الأردن التي يمكنك زيارتها في كل فصل
              من فصول السنة. اختر الفصل المناسب واستمتع بتجارب فريدة تناسب كل
              موسم.
            </p>
          </div>
        </div>
        <div className="row">
          {/* فصل الصيف */}
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ direction: 'rtl' }}>
            <div className="media-1" onClick={() => handleSeasonClick('صيف')} style={{ cursor: 'pointer' }} id="صيف">
              <img
                src="https://alqalahnews.net/assets/2020-07-19/news_gallery/254627_7_1595149938.jpg"
                alt="الصيف في الأردن"
                className="img-fluid"
              />
              <span className="d-flex align-items-center loc mb-2 text-right">
                <span className="icon-room mr-3" />
                <span>الصيف</span>
              </span>
              <h3 style={{ color: '#115173', textDecoration: 'none' }}>وجهات الصيف في الأردن</h3>
              <p>
                استمتع بزيارة المناطق المرتفعة مثل عجلون والشفا حيث الطقس اللطيف والطبيعة الخضراء.
                أو قم بزيارة العقبة للاستمتاع بالشواطئ والأنشطة المائية.
              </p>
            </div>
          </div>

          {/* فصل الشتاء */}
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ direction: 'rtl' }}>
            <div className="media-1" onClick={() => handleSeasonClick('شتاء')} style={{ cursor: 'pointer' }} id="شتاء">
              <img
                src="https://i.pinimg.com/736x/b9/bd/fb/b9bdfba6a360e2b83e77bebee7ee6cbf.jpg"
                alt="الشتاء في الأردن"
                className="img-fluid"
              />
              <span className="d-flex align-items-center loc mb-2 text-right">
                <span className="icon-room mr-3" />
                <span>الشتاء</span>
              </span>
              <h3 style={{ color: '#115173', textDecoration: 'none' }}>وجهات الشتاء في الأردن</h3>
              <p>
                الشتاء هو الوقت المثالي لزيارة المناطق الدافئة مثل البحر الميت حيث يمكنك الاسترخاء والاستفادة من الخصائص العلاجية.
              </p>
            </div>
          </div>

          {/* فصل الربيع */}
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ direction: 'rtl' }}>
            <div className="media-1" onClick={() => handleSeasonClick('ربيع')} style={{ cursor: 'pointer' }} id="ربيع">
              <img
                src="https://alqalahnews.net/assets/2020-07-19/news_gallery/254627_7_1595149938.jpg"
                alt="الربيع في الأردن"
                className="img-fluid"
              />
              <span className="d-flex align-items-center loc mb-2 text-right">
                <span className="icon-room mr-3" />
                <span>الربيع</span>
              </span>
              <h3 style={{ color: '#115173', textDecoration: 'none' }}>وجهات الربيع في الأردن</h3>
              <p>
                استمتع بجمال الطبيعة في الربيع مع زيارة مناطق مثل جرش والبتراء حيث الأزهار تتفتح والطقس معتدل.
              </p>
            </div>
          </div>

          {/* فصل الخريف */}
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ direction: 'rtl' }}>
            <div className="media-1" onClick={() => handleSeasonClick('خريف')} style={{ cursor: 'pointer' }} id="خريف">
              <img
                src="https://i.pinimg.com/736x/96/66/79/9666795c840ecea0114e78a37e150bf9.jpg"
                alt="الخريف في الأردن"
                className="img-fluid"
              />
              <span className="d-flex align-items-center loc mb-2 text-right">
                <span className="icon-room mr-3" />
                <span>الخريف</span>
              </span>
              <h3 style={{ color: '#115173', textDecoration: 'none' }}>وجهات الخريف في الأردن</h3>
              <p>
                الخريف هو الوقت المثالي لزيارة المناطق الصحراوية مثل وادي رم حيث الطقس لطيف ومناسب للمغامرات.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS داخلي */}
      <style jsx>{`
        .untree_co-section {
          padding: 2rem 0;
        }
        .media-1 {
          transition: transform 0.3s ease-in-out;
        }
        .media-1:hover {
          transform: scale(1.05);
        }
        .media-1 img {
          border-radius: 10px;
          width: 100%;
          height: 450px;
        }
        .loc {
          direction: rtl;
        }
        @media (max-width: 768px) {
          .untree_co-section {
            padding: 1rem 0;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default SeasonalDestinations;
