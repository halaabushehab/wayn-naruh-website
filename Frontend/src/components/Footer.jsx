import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    
        <footer className="bg-light text-dark pt-5 pb-3" style={{ fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
          <div className="container">
            <div className="row text-right">
              {/* عن الموقع */}
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="fw-bold mb-3">عن "وين نروح"</h5>
                <p className="text-muted">
                  استكشف أفضل الوجهات السياحية في الأردن. نحن نساعدك على اكتشاف أماكن مذهلة وتخطيط رحلاتك بسهولة، من عمان إلى البحر الأحمر ومدينة البتراء.
                </p>
                {/* الأيقونات الاجتماعية */}
                <div className="d-flex gap-2">
                  <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
    
              {/* الصفحات */}
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="fw-bold mb-3">الصفحات</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="footer-link">المدن</a></li>
                  <li><a href="#" className="footer-link">دليلك المثالي للسفر</a></li>
                  <li><a href="#" className="footer-link">اتصل بنا</a></li>
                </ul>
              </div>
    
              {/* الموارد */}
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="fw-bold mb-3">الموارد</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="footer-link">دليل السياحة في الأردن</a></li>
                  <li><a href="#" className="footer-link">أفضل الوجهات</a></li>
                  <li><a href="#" className="footer-link">مقالات سياحية</a></li>
                </ul>
              </div>
    
              {/* تواصل معنا */}
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="fw-bold mb-3">تواصل معنا</h5>
                <ul className="list-unstyled">
                  <li><i className="fas fa-envelope text-primary"></i> <a href="mailto:info@wainrooh.com" className="footer-link">info@wainrooh.com</a></li>
                  <li><i className="fas fa-phone text-primary"></i> <a href="#" className="footer-link">+962 6 123 4567</a></li>
                  <li><i className="fas fa-map-marker-alt text-primary"></i> <a href="#" className="footer-link">عمان، الأردن</a></li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* حقوق النشر */}
          <div className="text-center text-muted mt-3">
            <p className="mb-0">
              جميع الحقوق محفوظة &copy; 2025. تم التصميم بحب بواسطة <strong className="text-dark">وين نروح</strong> وتنفيذ <strong className="text-dark">Hala abushehab</strong>.
            </p>
          </div>
    
          {/* إضافة كود CSS داخل JSX */}
          <style>
            {`
              body {
                font-family: 'Cairo', sans-serif;
              }
    
              .footer-link {
                text-decoration: none;
                color: #333;
                transition: color 0.3s ease-in-out;
              }
              
              .footer-link:hover {
                color: #f0ad4e;
              }
    
              .social-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #333;
                color: white;
                font-size: 18px;
                transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                text-decoration: none;
              }
    
              .social-icon:hover {
                background-color: #f0ad4e;
                color: white;
              }
    
              ul.list-unstyled {
                padding: 0;
              }
    
              ul.list-unstyled li {
                margin-bottom: 8px;
              }
            `}
          </style>
        </footer>
      
    
    
    
  );
};

export default Footer;
