import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "./img/Screenshot 2025-01-24 235121.png";
import FormRegistration from "../components/FormRegistration";
import Cookies from "js-cookie";





const Navbar = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  // ✅ التحقق من userId عند تحميل الصفحة
 // داخل useEffect لعرض بيانات المستخدم عند تحميل الـ Navbar
useEffect(() => {
  const storedUserId = localStorage.getItem("userId");
  const storedUsername = localStorage.getItem("username");
  console.log("🔄 بيانات المستخدم في Navbar:", storedUserId, storedUsername);
  setUserId(storedUserId); // تعيين الـ userId في الحالة
  setUsername(storedUsername); // تعيين اسم المستخدم في الحالة
}, []);

  
  
  // ✅ متابعة التغييرات على user
  useEffect(() => {
    console.log("🔄 [useEffect] بيانات المستخدم في Navbar:", user);
    
  }, [user]);

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      console.log("📌 [useEffect] Found username in localStorage:", savedUsername);
      setUser({ username: savedUsername });
    }
  }, []);

  const handleLogin = (userData) => {
    console.log("✅ [handleLogin] بيانات المستخدم:", userData);
    setUser(userData);
    localStorage.setItem("userId", userData.id); // تأكد من تخزين `id`
    localStorage.setItem("username", userData.username);
    setFormOpen(false);
  };

  const handleLogout = () => {
    console.log("🚪 [handleLogout] تسجيل الخروج، حذف البيانات...");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    setUser(null);
    navigate("/Home");
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    });
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ طباعة ID المستخدم عند كل تغيير في القائمة
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    console.log("📌 [useEffect] isUserMenuOpen:", isUserMenuOpen);
    const closeDropdown = (e) => {
      if (!e.target.closest("#user-dropdown")) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [isUserMenuOpen]);



  return (
    <header
    dir="rtl"
    className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md ${
      isScrolled ? "bg-[#022C43]/80" : "bg-[#022C43]"
    }`}
  >
    <div className="container mx-auto px-6 flex items-center justify-between py-4">
      {/* Logo */}
      <Link to="/">
        <img className="h-12 w-auto" src={logo} alt="Burritos la chiquita Logo" />
      </Link>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`lg:flex items-center gap-6 text-white text-lg transition-all duration-300 ${
          menuOpen ? "fixed top-16 right-0 w-full bg-[#022C43] p-6 shadow-lg" : "hidden lg:flex"
        }`}
      >
        <Link className="hover:text-[#FFD700] transition" to="/">الرئيسية</Link>
        
        {/* Cities Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setIsOpen(!isOpen)} className="hover:text-[#FFD700]">
            المدن ▼
          </button>
          <div className={`absolute right-0 mt-2 w-40 bg-[#115173] rounded shadow-md ${isOpen ? "block" : "hidden"}`}>
            <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]" to="/places?city=عمان">عمان</Link>
            <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]"  to="/places?city=الزرقاء">الزرقاء</Link>
            <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]" to="/places?city=إربد">إربد</Link>
          </div>
        </div>

        <Link className="hover:text-[#FFD700] transition" to="/Blog">المدونات</Link>
        <Link className="hover:text-[#FFD700] transition" to="/About">من نحن</Link>
        <Link className="hover:text-[#FFD700] transition" to="/contact">تواصل معنا</Link>
      </nav>

      {/* أزرار تسجيل الدخول والخروج */}
      <div className="hidden lg:flex gap-4 items-center relative">
      {user ? (
        <div className="relative" id="user-dropdown">
          {/* زر المستخدم (يفتح القائمة المنسدلة) */}
          <button 
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
            className="border border-[#FFD700] text-[#FFD700] px-4 py-2 rounded flex items-center gap-2"
          >
            <FaUser /> {user.username}
            
          </button>

          {/* القائمة المنسدلة (دروب داون مستقل) */}
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#115173] text-white rounded shadow-lg z-50">
<Link to={`/ProfilePage/${userId}`} className="block px-4 py-2 hover:bg-[#0d3a5a]">
  الملف الشخصي
</Link>

<Link to="/help" className="block px-4 py-2 hover:bg-[#0d3a5a]">
                المساعدة
              </Link>
              <button 
                onClick={handleLogout} 
                className="block w-full text-right  px-4 py-2 text-red-500 hover:bg-[#0d3a5a]"
              >
                تسجيل الخروج
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setFormOpen(true)}
          className="border border-[#FFD700] text-[#FFD700] px-4 py-2 rounded"
        >
          👤 تسجيل الدخول
        </button>
      )}
    </div>

        {isFormOpen && (
          <div className="absolute top-20 right-0 w-[500px] bg-white shadow-lg rounded-lg">
            <FormRegistration onClose={() => setFormOpen(false)} onLogin={handleLogin} />
          </div>
        )}
      </div>
  </header>
  );
};

export default Navbar;























// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "./img/Screenshot 2025-01-24 235121.png";
// import  FormRegistration from '../components/FormRegistration';







// const Navbar = () => {
//   const [isFormOpen, setFormOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null); // Add useRef for dropdown
//   const [isSearchOpen, setSearchOpen] = useState(false);
  
  
  
  
//   const closeDropdown = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false); // Change from setDropdownOpen to setIsOpen
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", closeDropdown);
//     return () => {
//       document.removeEventListener("mousedown", closeDropdown);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       dir="rtl"
//       className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md ${
//         isScrolled ? "bg-[#022C43]/80" : "bg-[#022C43]"
//       }`}
//     >
//       <div className="container mx-auto px-6 flex items-center justify-between py-4">
//         {/* Logo */}
//         <Link to="/">
//           <img className="h-12 w-auto" src={logo} alt="Burritos la chiquita Logo" />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`lg:flex items-center gap-6 text-white text-lg transition-all duration-300 ${
//             menuOpen ? "fixed top-16 right-0 w-full bg-[#022C43] p-6 shadow-lg" : "hidden lg:flex"
//           }`}
//         >
//           <Link className="hover:text-[#FFD700] transition" to="/">الرئيسية</Link>
          
//           {/* Cities Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <button onClick={() => setIsOpen(!isOpen)} className="hover:text-[#FFD700]">
//               المدن ▼
//             </button>
//             <div className={`absolute right-0 mt-2 w-40 bg-[#115173] rounded shadow-md ${isOpen ? "block" : "hidden"}`}>
//               <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]" to="/places/amman">عمان</Link>
//               <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]" to="/places/zarqa">الزرقاء</Link>
//               <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]" to="/places/irbid">إربد</Link>
//             </div>
//           </div>

//           <Link className="hover:text-[#FFD700] transition" to="/Blog">المدونات</Link>
//           <Link className="hover:text-[#FFD700] transition" to="/About">من نحن</Link>
//           <Link className="hover:text-[#FFD700] transition" to="/contact">تواصل معنا</Link>
//         </nav>

//         {/* Buttons */}
//         <div className="hidden lg:flex gap-4">
//       <button 
//         className="border border-[#FFD700] text-[#FFD700] px-4 py-2 rounded hover:bg-[#FFD700] hover:text-[#022C43] transition"
//         onClick={() => setFormOpen(!isFormOpen)}
//       >
//         👤 تسجيل الدخول
//       </button>
      
//       <button 
//         className="border border-[#FFD700] text-[#FFD700] px-4 py-2 rounded hover:bg-[#FFD700] hover:text-[#022C43] transition" 
//         onClick={() => setSearchOpen(!isSearchOpen)}
//       >
//         🔍 البحث
//       </button>
      
//       {isFormOpen && (
//         <div className="absolute top-20 right-0 w-[500px] bg-white shadow-lg rounded-lg z-50">
//           <FormRegistration onClose={() => setFormOpen(false)} />
//         </div>
//       )}
      
//       {isSearchOpen && (
//         <div className="absolute top-20 right-0 w-[500px] bg-white shadow-lg p-4 rounded-lg z-50 border-2 border-[#FFD700]">
//           <div className="flex items-center gap-2 relative">
//             <input 
//               type="text" 
//               placeholder="ابحث هنا..." 
//               className="w-full p-3 pr-10 border-2 border-gray-300 rounded-lg focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] transition-all outline-none text-right"
//             />
//             <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#115173] hover:text-[#FFD700] transition-colors">
//               🔍
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



