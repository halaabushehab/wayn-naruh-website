import { useState, useEffect, useReducer } from "react";
import { Lock, Mail, User, Eye, EyeOff, X, Facebook } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import handleGoogleLogin from "./GoogleLogin"; // ✅ استيراد الدالة
import Swal from "sweetalert2";


export default function AuthForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
    const navigate = useNavigate(); // للتنقل بعد التسجيل الناجح
    const [user, setUser] = useState(null);

    const [formData, setFormData] = useState({
      name: '', // تأكد من وجود خاصية name
      email: '',
      password: '',
      showPassword: false,
    });
  console.log(formData); // عرض القيم داخل formData

  const [isSignUp, setIsSignUp] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  }, [isSignUp]);

  // ===================================================
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const validateForm = () => {
    let errors = {};
    const { username, email, password } = formData;

    if (!username) errors.username = "الاسم مطلوب.";
    if (!email) errors.email = "البريد الإلكتروني مطلوب.";
    if (!password) errors.password = "كلمة المرور مطلوبة.";

    if (email && !emailPattern.test(email)) {
        errors.email = "صيغة البريد الإلكتروني غير صحيحة.";
    }
    if (typeof password !== "string" || !password.trim()) {
        setError("كلمة المرور يجب أن تكون نصًا.");
        return;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
};

const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { username, email, password } = formData;
    const url = "http://localhost:9527/api/auth/register";
    const data = { username, email, password: String(password) };

    try {
        await axios.post(url, data);
        alert("تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");
        toggleForm(); // تحويل النموذج إلى تسجيل الدخول
    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
        if (err.response?.data?.message === "Email already in use") {
            setError("هذا البريد الإلكتروني مستخدم بالفعل.");
        } else {
            setError("فشل التسجيل. حاول مرة أخرى.");
        }
    }
};

const handleLogin = async (e) => {
  e.preventDefault();
  const { email, password } = formData;
  
  try {
      console.log("📤 Sending login data:", { email, password });

      // إرسال البيانات إلى السيرفر
      const response = await axios.post("http://localhost:9527/api/auth/login", { email, password }, { withCredentials: true });

      // استخراج بيانات المستخدم
      const userData = response.data; // تأكد أن السيرفر يُرجع بيانات كاملة مثل username و email
      console.log("✅ User data received:", userData);

      // تحديث حالة المستخدم
      if (userData) {
          setUser(userData);  
   // 🔹 تخزين التوكن في localStorage لاستخدامه لاحقًا
   localStorage.setItem("token", response.data.token);
   localStorage.setItem("username", response.data.username);
   localStorage.setItem("email", response.data.email); // تخزين البريد الإلكتروني
   localStorage.setItem("userId", response.data.userId); // تخزين ID المستخدم  } else {
  } else {
          throw new Error("المستخدم غير موجود في الرد من السيرفر");
      }

      // رسالة ترحيب
      Swal.fire({
          title: `مرحبًا ${userData.username}! 👋`,
          text: "أهلاً بك في موقع 'وين نروح'! استمتع باستكشاف أفضل الوجهات.",
          icon: "success",
          confirmButtonText: "ابدأ الآن!",
          background: "linear-gradient(to right,rgb(220, 228, 233), #022C43, #FFD700)",
          color: "#fff",
      });

      setFormData({
          name: '',
          email: '',
          password: '',
          showPassword: false
      });

      console.log("🔄 Redirecting to home...");
      handleCancel(false);

  } catch (error) {
      console.error("❌ Error:", error.response ? error.response.data : error.message);

      Swal.fire({
          title: "فشل تسجيل الدخول",
          text: "يرجى التحقق من بيانات الدخول والمحاولة مجددًا.",
          icon: "error",
          confirmButtonText: "حسناً",
          background: "#022C43",
          color: "#FFD700",
      });
  }
};





const toggleForm = () => {
  setIsSignUp((prev) => !prev);
  setFormErrors({});
  setError(""); // تصفير الأخطاء قبل التبديل
  setFormData({ username: "", email: "", password: "", showPassword: false });
};


const handleCancel = () => {
    setIsOpen(false);
    if (setFormData) {
      setFormData({ username: "", email: "", password: "", showPassword: false });
  }};

if (!isOpen) return null;

// ================================================================================================================


  const handleGoogleLogin = () => {
    const googleClientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual client ID
    const redirectUri =
      window.location.origin + "http://localhost:9527/api/auth/google-login";

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=email%20profile&prompt=select_account`;

    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(
      googleAuthUrl,
      "googleLogin",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`
    );
  };


  
  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden border-4 border-[#FFD700] text-right transition-all duration-500 transform ${
          animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* شريط علوي مزخرف */}
        <div className="bg-gradient-to-r from-[#022C43] to-[#115173] p-4 text-white relative">
          <h2 className="text-2xl font-bold text-center text-[#FFFFFF]">
            {isSignUp ? "تسجيل حساب جديد - وين نروح" : "تسجيل الدخول"}
          </h2>
          <button
            onClick={handleCancel}
            className="absolute right-4 top-4 text-white hover:text-[#FFD700] transition-colors"
          >
            <X size={24} />
          </button>
          <div className="absolute -bottom-6 right-1/2 transform translate-x-1/2 w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center">
            {isSignUp ? (
              <User size={24} color="#022C43" />
            ) : (
              <Lock size={24} color="#022C43" />
            )}
          </div>
        </div>

        {/* زخرفة جانبية */}
        <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-[#FFD700] via-[#115173] to-[#022C43]"></div>
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#FFD700] via-[#115173] to-[#022C43]"></div>

        <div className="p-6 pt-10 overflow-y-auto max-h-[80vh]">
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}{" "}
          {/* عرض الأخطاء */}
          <form onSubmit={isSignUp ? handleRegister : handleLogin} className="space-y-6">
          {isSignUp && (
              <div className="relative">
                <label className="block font-medium mb-2 text-[#022C43] pr-6">
                  الاسم *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="username" // تأكد من أن name هنا يتطابق مع المفتاح في formData
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pr-10 border-2 border-gray-300 rounded-lg focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] transition-all outline-none text-right"
                    placeholder="أدخل اسمك الكامل"
                  />

                  <User
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#115173]"
                    size={18}
                  />
                </div>
              </div>
            )}

            <div className="relative">
              <label className="block font-medium mb-2 text-[#022C43] pr-6">
                البريد الإلكتروني *
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pr-10 border-2 border-gray-300 rounded-lg focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] transition-all outline-none text-right"
                  placeholder="example@email.com"
                />
                <Mail
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#115173]"
                  size={18}
                />
              </div>
            </div>

            <div className="relative">
              <label className="block font-medium mb-2 text-[#022C43] pr-6">
                كلمة المرور *
              </label>
              <div className="relative">
                <input
                  type={formData.showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pr-10 border-2 border-gray-300 rounded-lg focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] transition-all outline-none text-right"
                  placeholder="************"
                />
                <Lock
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#115173]"
                  size={18}
                />
                <button
                  type="button"
                  onChange={handleChange}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#115173] hover:text-[#FFD700] transition-colors"
                >
                  {formData.showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              <div className="mt-2 flex items-center">
                <label
                  htmlFor="showPassword"
                  className="text-[#022C43] ml-2 text-sm"
                >
                  إظهار كلمة المرور
                </label>
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={formData.showPassword}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 accent-[#FFD700]"
                />
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="py-3 px-6 rounded-lg text-[#022C43] font-bold bg-[#FFD700] hover:bg-opacity-90 w-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>{isSignUp ? "تسجيل حساب" : "تسجيل الدخول"}</span>
                <Lock size={18} />
              </button>

              {/* أزرار تسجيل الدخول الاجتماعي */}
              <div className="space-y-3 pt-2">
                <div className="relative text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                  <button onClick={() => setIsSignUp(!isSignUp)}>
  {isSignUp ? "لديك حساب؟ سجل الدخول" : "ليس لديك حساب؟ سجل الآن"}
</button>
                  </div>
                </div>

            

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="py-3 px-6 rounded-lg text-white bg-[#DB4437] hover:bg-opacity-90 w-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="20px"
                      height="20px"
                      className="ml-2"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    <span>جوجل</span>
                  </div>
                </button>
              </div>

              {!isSignUp && (
                <div className="text-center mt-4">
                  <a
                    href="#"
                    className="text-[#115173] hover:text-[#022C43] transition-colors underline text-sm font-medium"
                  >
                    نسيت كلمة المرور؟
                  </a>
                </div>
              )}
            </div>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={toggleForm}
              className="text-[#115173] hover:text-[#FFD700] transition-colors underline font-medium"
            >
              {isSignUp
                ? "لديك حساب؟ تسجيل الدخول"
                : "ليس لديك حساب؟ إنشاء حساب"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={handleCancel}
              className="text-red-600 hover:text-red-800 transition-colors underline"
            >
              إلغاء
            </button>
          </div>
        </div>

        {/* زخرفة سفلية */}
        <div className="h-2 w-full bg-gradient-to-r from-[#022C43] to-[#115173]"></div>
      </div>
    </div>
  );
}
