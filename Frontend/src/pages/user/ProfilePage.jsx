// // "use client"

// // import { useState, useRef } from "react"
// // import {
// //   EnvelopeIcon, // بدل MailIcon
// //   PhoneIcon,
// //   GlobeEuropeAfricaIcon, // بدل GlobeAltIcon
// //   PencilIcon, // بدل PencilAltIcon
// //   PhotoIcon, // بدل PhotographIcon
// //   BookmarkIcon, // بدل SaveIcon
// //   XMarkIcon, // بدل XIcon
// // } from "@heroicons/react/24/outline";


// // const UserProfile = () => {
// //   // Initial user data - in a real app, this would come from your backend
// //   const [user, setUser] = useState({
// //     name: "أحمد محمد",
// //     email: "ahmed@example.com",
// //     phone: "0791234567",
// //     location: "عمان، الأردن",
// //     bio: "مهتم باكتشاف المواقع الأقل شهرة في الأردن ومشاركتها مع الآخرين. أحب السفر والتصوير والتدوين عن تجاربي.",
// //     website: "www.ahmadtravel.com",
// //     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
// //     joinDate: "2023-01-15",
// //     favorites: ["البتراء الصغيرة", "وادي الهيدان", "قلعة عجلون", "محمية ضانا"],
// //   })

// //   // State for edit mode
// //   const [isEditing, setIsEditing] = useState(false)
// //   const [editedUser, setEditedUser] = useState({ ...user })

// //   // Ref for file input
// //   const fileInputRef = useRef(null)

// //   // Handle image upload
// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0]
// //     if (file) {
// //       const reader = new FileReader()
// //       reader.onloadend = () => {
// //         setEditedUser({ ...editedUser, avatar: reader.result })
// //       }
// //       reader.readAsDataURL(file)
// //     }
// //   }

// //   // Handle form input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setEditedUser({ ...editedUser, [name]: value })
// //   }

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault()
// //     setUser(editedUser)
// //     setIsEditing(false)
// //   }

// //   // Cancel editing
// //   const handleCancel = () => {
// //     setEditedUser({ ...user })
// //     setIsEditing(false)
// //   }

// //   return (
// //     <div className="bg-[#FFFFFF] min-h-screen p-4 md:p-8" dir="rtl">
// //       <div className="max-w-4xl mx-auto">
// //         {/* Header */}
// //         <div className="text-center mb-8">
// //           <h1 className="text-3xl font-bold text-[#022C43]">الملف الشخصي</h1>
// //           <p className="text-[#444444]">مرحباً بك في "إلى أين نذهب؟"</p>
// //         </div>

// //         {/* Profile Card */}
// //         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// //           {/* Cover Photo */}
// //           <div className="h-32 bg-gradient-to-r from-[#022C43] to-[#115173]"></div>

// //           {/* Profile Info */}
// //           <div className="relative px-4 sm:px-6 pb-6">
// //             {/* Avatar */}
// //             <div className="relative -mt-16 mb-4">
// //               <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mx-auto bg-[#053F5E]">
// //                 <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-full h-full object-cover" />
// //               </div>

// //               {/* Edit Button */}
// //               {!isEditing && (
// //                 <button
// //                   onClick={() => setIsEditing(true)}
// //                   className="absolute  top-22 right-91 -translate-y-1/100 bg-[#FFD700] text-[#022C43] p-2 rounded-full shadow-md hover:bg-yellow-400 transition-colors"
// //                   >
// //                   <PencilIcon className="h-3 w-3" />
// //                 </button>
// //               )}
// //             </div>

// //             {isEditing ? (
// //               /* Edit Form */
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 <div className="text-center mb-6">
// //                   <div
// //                     onClick={() => fileInputRef.current.click()}
// //                     className="cursor-pointer inline-flex items-center justify-center gap-2 text-[#053F5E] hover:text-[#022C43]"
// //                   >
// //                     <PhotoIcon className="h-5 w-5" />
// //                     <span>تغيير الصورة</span>
// //                   </div>
// //                   <input
// //                     type="file"
// //                     ref={fileInputRef}
// //                     onChange={handleImageUpload}
// //                     className="hidden"
// //                     accept="image/*"
// //                   />
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   <div>
// //                     <label className="block text-sm font-medium text-[#444444] mb-1">الاسم</label>
// //                     <input
// //                       type="text"
// //                       name="name"
// //                       value={editedUser.name}
// //                       onChange={handleChange}
// //                       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
// //                     />
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-medium text-[#444444] mb-1">البريد الإلكتروني</label>
// //                     <input
// //                       type="email"
// //                       name="email"
// //                       value={editedUser.email}
// //                       onChange={handleChange}
// //                       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
// //                     />
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-medium text-[#444444] mb-1">رقم الهاتف</label>
// //                     <input
// //                       type="tel"
// //                       name="phone"
// //                       value={editedUser.phone}
// //                       onChange={handleChange}
// //                       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
// //                     />
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-medium text-[#444444] mb-1">الموقع</label>
// //                     <input
// //                       type="text"
// //                       name="location"
// //                       value={editedUser.location}
// //                       onChange={handleChange}
// //                       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
// //                     />
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-medium text-[#444444] mb-1">الموقع الإلكتروني</label>
// //                     <input
// //                       type="text"
// //                       name="website"
// //                       value={editedUser.website}
// //                       onChange={handleChange}
// //                       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
// //                     />
// //                   </div>

// //                   <div className="md:col-span-2">
// //                     <label className="block text-sm font-medium text-[#444444] mb-1">نبذة عني</label>
// //                     <textarea
// //                       name="bio"
// //                       value={editedUser.bio}
// //                       onChange={handleChange}
// //                       rows="4"
// //                       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
// //                     ></textarea>
// //                   </div>
// //                 </div>

// //                 <div className="flex justify-end gap-3 pt-4">
// //                   <button
// //                     type="button"
// //                     onClick={handleCancel}
// //                     className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
// //                   >
// //                     <XMarkIcon className="h-5 w-5" />
// //                     إلغاء
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="flex items-center gap-2 px-4 py-2 bg-[#053F5E] text-white rounded-md hover:bg-[#022C43]"
// //                   >
// //                     <BookmarkIcon className="h-5 w-5" />
// //                     حفظ التغييرات
// //                   </button>
// //                 </div>
// //               </form>
// //             ) : (
// //               /* Display Profile */
// //               <div>
// //                 <div className="text-center mb-6">
// //                   <h2 className="text-2xl font-bold text-[#022C43]">{user.name}</h2>
// //                   <p className="text-[#444444]">عضو منذ {user.joinDate}</p>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div className="space-y-4">
// //                     <div className="flex items-center gap-3">
// //                       <div className="bg-[#053F5E] p-2 rounded-full">
// //                         <EnvelopeIcon className="h-5 w-5 text-white" />
// //                       </div>
// //                       <div>
// //                         <p className="text-sm text-[#444444]">البريد الإلكتروني</p>
// //                         <p className="font-medium">{user.email}</p>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-3">
// //                       <div className="bg-[#053F5E] p-2 rounded-full">
// //                         <PhoneIcon className="h-5 w-5 text-white" />
// //                       </div>
// //                       <div>
// //                         <p className="text-sm text-[#444444]">رقم الهاتف</p>
// //                         <p className="font-medium">{user.phone}</p>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-3">
// //                       <div className="bg-[#053F5E] p-2 rounded-full">
// //                         <EnvelopeIcon  className="h-5 w-5 text-white" />
// //                       </div>
// //                       <div>
// //                         <p className="text-sm text-[#444444]">الموقع</p>
// //                         <p className="font-medium">{user.location}</p>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-3">
// //                       <div className="bg-[#053F5E] p-2 rounded-full">
// //                         <GlobeEuropeAfricaIcon className="h-5 w-5 text-white" />
// //                       </div>
// //                       <div>
// //                         <p className="text-sm text-[#444444]">الموقع الإلكتروني</p>
// //                         <p className="font-medium">{user.website}</p>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <div className="mb-4">
// //                       <h3 className="text-lg font-semibold text-[#022C43] mb-2">نبذة عني</h3>
// //                       <p className="text-[#444444]">{user.bio}</p>
// //                     </div>

// //                     <div>
// //                       <h3 className="text-lg font-semibold text-[#022C43] mb-2">المواقع المفضلة</h3>
// //                       <div className="flex flex-wrap gap-2">
// //                         {user.favorites.map((favorite, index) => (
// //                           <span key={index} className="bg-[#115173] text-white px-3 py-1 rounded-full text-sm">
// //                             {favorite}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Recent Activity Section */}
// //         {!isEditing && (
// //           <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
// //             <h3 className="text-xl font-semibold text-[#022C43] mb-4">نشاطاتي الأخيرة</h3>
// //             <div className="space-y-4">
// //               <div className="border-r-4 border-[#FFD700] pr-4">
// //                 <p className="font-medium">إضافة موقع جديد: وادي الهيدان</p>
// //                 <p className="text-sm text-[#444444]">منذ 3 أيام</p>
// //               </div>
// //               <div className="border-r-4 border-[#FFD700] pr-4">
// //                 <p className="font-medium">تعليق على موقع: قلعة عجلون</p>
// //                 <p className="text-sm text-[#444444]">منذ أسبوع</p>
// //               </div>
// //               <div className="border-r-4 border-[#FFD700] pr-4">
// //                 <p className="font-medium">تحديث معلومات الملف الشخصي</p>
// //                 <p className="text-sm text-[#444444]">منذ أسبوعين</p>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

// // export default UserProfile








"use client"

import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeEuropeAfricaIcon,
  PencilIcon,
  PhotoIcon,
  BookmarkIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

const UserProfile = () => {
  const { id } = useParams();// استخراج Id من الرابط

  // حالة لتخزين بيانات المستخدم
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    city: "",
    bio: "",
    avatar: "",
    joinDate: "",
    birthdate:"",
    favorites: [],
  });

  // حالة لتحميل البيانات
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // حالة لتعديل البيانات
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  // Ref لرفع الصورة
  const fileInputRef = useRef(null);

  // جلب بيانات المستخدم من الخادم
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:9527/api/auth/${id}`);
        console.log("Data from server:", response.data); // تحقق من البيانات
        setUser(response.data.user);
        setEditedUser(response.data.user);
        console.log("Data from server111111111111:", response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [id]);
  

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedUser({ ...editedUser, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // استخدم name بدلاً من username
    setEditedUser ({ ...editedUser , [name]: value });
  };
  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9527/api/auth/${id}`, editedUser);
      setUser(editedUser);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  if (loading) {
    return <div className="text-center py-10">جاري التحميل...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">حدث خطأ: {error}</div>;
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen p-4 md:p-8 my-25" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#022C43]">الملف الشخصي</h1>
          <p className="text-[#444444]">مرحباً بك في "وين نروح؟"</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-[#022C43] to-[#115173]"></div>

          {/* Profile Info */}
          <div className="relative px-4 sm:px-6 pb-6">
            {/* Avatar */}
            <div className="relative -mt-16 mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mx-auto bg-[#053F5E]">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Edit Button */}
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="absolute top-22 right-91 -translate-y-1/100 bg-[#FFD700] text-[#022C43] p-2 rounded-full shadow-md hover:bg-yellow-400 transition-colors"
                >
                  <PencilIcon className="h-3 w-3" />
                </button>
              )}
            </div>

            {isEditing ? (
              /* Edit Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <div
                    onClick={() => fileInputRef.current.click()}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 text-[#053F5E] hover:text-[#022C43]"
                  >
                    <PhotoIcon className="h-5 w-5" />
                    <span>تغيير الصورة</span>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                    accept="image/*"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input
  type="text"
  name="username"
  value={editedUser.username || ""}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
/>



                  <div>
                    <label className="block text-sm font-medium text-[#444444] mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      username="email"
                      value={editedUser.email}
                      onChange={handleChange}
                      
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#444444] mb-1">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      value={editedUser.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#444444] mb-1">الموقع</label>
                    <input
                      type="text"
                      username="location"
                      value={editedUser.location}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
                    />
                  </div>

                <div>
  <label className="block text-sm font-medium text-[#444444] mb-1">تاريخ الميلاد</label>
  <input
    type="date"  // تغيير النوع إلى "date" لتحديد تاريخ
    name="birthdate"  // تعديل name ليتناسب مع الحقل
    value={editedUser.birthdate}  // ربط القيمة بحقل birthdate في حالة الاستخدام
    onChange={handleChange}  // التعامل مع التغيير في القيمة
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
  />
</div>


                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#444444] mb-1">نبذة عني</label>
                    <textarea
                      username="bio"
                      value={editedUser.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#053F5E]"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    <XMarkIcon className="h-5 w-5" />
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 bg-[#053F5E] text-white rounded-md hover:bg-[#022C43]"
                  >
                    <BookmarkIcon className="h-5 w-5" />
                    حفظ التغييرات
                  </button>
                </div>
              </form>
            ) : (
              /* Display Profile */
              <div>
                <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#022C43]">{user.username}</h2>                  <p className="text-[#444444]">عضو منذ {user.joinDate}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#053F5E] p-2 rounded-full">
                        <EnvelopeIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#444444]">البريد الإلكتروني</p>
                        <p className="font-medium">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-[#053F5E] p-2 rounded-full">
                        <PhoneIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#444444]">رقم الهاتف</p>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-[#053F5E] p-2 rounded-full">
                        <EnvelopeIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#444444]">الموقع</p>
                        <p className="font-medium">{user.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-[#053F5E] p-2 rounded-full">
                        <GlobeEuropeAfricaIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#444444]">الموقع الإلكتروني</p>
                        <p className="font-medium">{user.website}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-[#022C43] mb-2">نبذة عني</h3>
                      <p className="text-[#444444]">{user.bio}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#022C43] mb-2">المواقع المفضلة</h3>
                      {/* <div className="flex flex-wrap gap-2">
                        {user.favorites.map((favorite, index) => (
                          <span key={index} className="bg-[#115173] text-white px-3 py-1 rounded-full text-sm">
                            {favorite}
                          </span>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity Section */}
        {!isEditing && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#022C43] mb-4">نشاطاتي الأخيرة</h3>
            <div className="space-y-4">
              <div className="border-r-4 border-[#FFD700] pr-4">
                <p className="font-medium">إضافة موقع جديد: وادي الهيدان</p>
                <p className="text-sm text-[#444444]">منذ 3 أيام</p>
              </div>
              <div className="border-r-4 border-[#FFD700] pr-4">
                <p className="font-medium">تعليق على موقع: قلعة عجلون</p>
                <p className="text-sm text-[#444444]">منذ أسبوع</p>
              </div>
              <div className="border-r-4 border-[#FFD700] pr-4">
                <p className="font-medium">تحديث معلومات الملف الشخصي</p>
                <p className="text-sm text-[#444444]">منذ أسبوعين</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;


// import { useParams } from "react-router-dom";

// function ProfilePage() {
//   const { id } = useParams(); // استقبال ID من الرابط

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       flexDirection: "column"
//     }}>
//       <div style={{
//         fontSize: "48px",
//         fontWeight: "bold"
//       }}>
//         ملف المستخدم: {id} {/* عرض الـ ID المرسل من الرابط */}
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;
