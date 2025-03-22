// import React, { useEffect, useState } from "react";
// import amman from "../../components/img/amman-vedio.mp4"; 
// import placeholderImage from "../img/عمان.jpg"; // استبدلها بصورتك
// import { motion } from "framer-motion";

import { RemoveFormattingIcon } from "lucide-react";


// function About() {

//   const [counts, setCounts] = useState({
//     counter1: 0,
//     counter2: 0,
//     counter3: 0,
//   });

//   useEffect(() => {
//     const targetValues = { counter1: 500, counter2: 200, counter3: 1000 }; // القيم المستهدفة
//     const duration = 2000; // مدة العداد

//     Object.keys(targetValues).forEach((key) => {
//       let start = 0;
//       const increment = targetValues[key] / (duration / 50);

//       const interval = setInterval(() => {
//         start += increment;
//         if (start >= targetValues[key]) {
//           start = targetValues[key];
//           clearInterval(interval);
//         }
//         setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
//       }, 50);
//     });
//   }, []);






//   const travelData = [
//     {
//       icon: "../components/img/74791447_426415758045651_706926972399255552_n.jpg",
//       title: "رحلة مريحة",
//       description: "تجربة رائعة في استكشاف أماكن غير مشهورة في الأردن.",
//     },
//     {
//       icon: "srccomponentsimglocation.jpg",
//       title: "فنادق فاخرة",
//       description: "تجربة إقامة مريحة في أماكن هادئة وجميلة.",
//     },
//     {
//       icon: "srccomponentsimgweb.jpg",
//       title: "دليل السفر",
//       description: "مساعدتك في اكتشاف الكنوز المخفية في الأردن.",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "أحمد الصالح",
//       role: "مسافر مغامر",
//       image:
//         "https://i.pinimg.com/736x/e6/21/9b/e6219b93a72b6376e381a454cf366df9.jpg",
//       text: "تجربة مذهلة! اكتشفت أماكن لم أكن أعرفها في الأردن واستمتعت كثيرًا.",
//     },
//     {
//       name: "ليلى عبد الله",
//       role: "مستكشفة",
//       image:
//         "https://i.pinimg.com/736x/93/79/d2/9379d261dfd39d582b0dc96a09f8a324.jpg",
//       text: "الموقع رائع وسهل الاستخدام، ساعدني في التخطيط لرحلتي بكل سهولة!",
//     },
//     {
//       name: "خالد العتيبي",
//       role: "مسافر عائلي",
//       image:
//         "https://i.pinimg.com/736x/3d/1f/3c/3d1f3c3be9ae71b3d2d09c04d610c58c.jpg",
//       text: "أفضل منصة لاكتشاف أماكن جديدة! أنصح بها الجميع.",
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="relative h-[500px] flex items-center justify-center bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
//         style={{
//           backgroundImage:
//             "url('https://i.pinimg.com/736x/7a/39/c9/7a39c98897363a0625c40c57d8522bc7.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg animate-fadeIn"></div>
//         <div className="relative z-10 text-center text-white px-8 max-w-3xl animate-slideUp">
//           <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-zoomIn">
//             وين نروح؟
//           </h1>
//           <p className="text-xl text-gray-200 leading-relaxed animate-fadeIn delay-200">
//             اكتشف الأماكن المميزة والوجهات المخفية في الأردن.
//           </p>
//           {/* <button className="mt-6 bg-[#FFD700] text-[rgb(2,44,67)] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all animate-bounce"> */}
//           <button className="mt-6 bg-[#FFD700] text-[rgb(2,44,67)] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all animate-bounce">
//             استكشف الآن
//           </button>
//         </div>
//       </div>

//       {/* section 1 */}

//       <section className="bg-gradient-to-r from-gray-100 to-white-300 py-2 flex flex-col items-center w-4/6 mx-auto overflow-hidden max-h-[600px] p-5 md:p-10 rounded-lg shadow-lg">
//         <style>
//           {`
//       .img-container {
//         border: 5px solid transparent;
//         transition: transform 0.3s, border-color 0.3s;
//         width: 100%;
//         max-width: 400px;
//         margin-bottom: 10px;
//         height: 500px;
//         overflow: hidden;
//         margin-right: 10px;
//         border-radius: 10px; /* إضافة زوايا مدورة */
//       }
      
//       .img-container:hover {
//         transform: scale(1.05);
//         border-color: #FFB800; /* تغيير لون الحدود عند التمرير */
//         border-style: solid;
//       }

//       @media (max-width: 768px) {
//         .vision {
//           max-height: none;
//           padding: 10px;
//         }
//       }
//     `}
//         </style>

//         <div className="flex flex-col md:flex-row items-center w-full">
//           {/* صورة */}
//           <div className="md:w-1/2 flex justify-center">
//             <div className="img-container">
//               <img
//                 src="https://i.pinimg.com/736x/91/a7/13/91a713753af5b86e75f4b1a337def119.jpg"
//                 alt="صورة"
//                 className="w-full h-full object-cover rounded-lg" // إضافة زوايا مدورة للصورة
//               />
//             </div>
//           </div>

//           {/* النص */}
//           <div className="md:w-1/2 text-gray-800 text-right p-5">
//             <h4 className="text-4xl font-bold text-[#2f5c8a] mt-2 underline decoration-[#FFB800] decoration-4">
//               قصتنا
//             </h4>
//             <p className="mt-3 text-lg leading-relaxed text-gray-700">
//               لم يكن "وين نروح" مجرد فكرة سياحية للتعرف على الأماكن الشهيرة، بل
//               هو دليل للمواطنين لاكتشاف الأماكن الغير معروفة والمميزة التي تستحق
//               الزيارة. نشأت فكرتنا من تجارب شخصية، حيث اكتشفنا صدفة أماكن رائعة
//               لم نكن نسمع عنها من قبل، وكانت تلك الأماكن مفيدة للأطفال ومثالية
//               للطلعات مع العائلة والأصدقاء.
//             </p>
//             <p className="mt-3 text-lg leading-relaxed text-gray-700">
//               نحن من سكان محافظة أخرى، وعندما نزور عمان غالبًا نجد أنفسنا
//               محدودين بالأماكن والمطاعم المعروفة. لكننا نعلم جيدًا أن هناك جواهر
//               مخفية تنتظر من يكتشفها، أماكن توفر أجواء مميزة وتفاصيل مثل تكلفة
//               الزيارة تساعدكم على التخطيط لطلعتكم بكل سهولة.
//             </p>
//             <p className="mt-3 text-lg leading-relaxed text-gray-700">
//               هدفنا أن نكون رفيقكم في رحلة الاستكشاف، وأن نقدم لكم دليلًا عمليًا
//               يساعدكم على العثور على تلك الأماكن الرائعة التي تُضفي على كل طلعة
//               تجربة فريدة وممتعة.
//             </p>
//           </div>
//         </div>
//       </section>









//       {/* section 2 */}
//       <div className="w-4/5 mx-auto py-10 text-right">
//         <style>
//           {`
//       .single-counter {
//         border: 2px solid #2f5c8a;
//         border-radius: 10px;
//         padding: 15px; /* تقليل padding */
//         background-color: #f9f9f9;
//         transition: background-color 0.3s, transform 0.3s;
//         max-height: 120px; /* تحديد ارتفاع أقصى */
//       }
      
//       .single-counter:hover {
//         background-color: #e0f7fa;
//         transform: translateY(-5px);
//       }
//     `}
//         </style>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//           {" "}
//           {/* تقليل gap */}
//           {/* جولة تمت بنجاح */}
//           <div className="single-counter flex flex-col items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-4xl font-bold text-[#2f5c8a]">
//               {counts.counter1}
//             </h3>{" "}
//             {/* تقليل حجم الخط */}
//             <p className="text-md text-gray-700">جولة تمت بنجاح</p>{" "}
//             {/* تقليل حجم النص */}
//           </div>
//           {/* جولات سنوية مرتبة */}
//           <div className="single-counter flex flex-col items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-4xl font-bold text-[#2f5c8a]">
//               {counts.counter2}
//             </h3>
//             <p className="text-md text-gray-700">جولات سنوية مرتبة</p>
//           </div>
//           {/* عملاء سعداء */}
//           <div className="single-counter flex flex-col items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-4xl font-bold text-[#2f5c8a]">
//               {counts.counter3}
//             </h3>
//             <p className="text-md text-gray-700">عملاء سعداء</p>
//           </div>
//         </div>
//       </div>




//   {/* section 4 */}
//   <div className="bg-gray-100 py-16">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//           {travelData.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, rotate: 1 }}
//               className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 group"
//             >
//               <div className="mb-4 flex justify-center">
//                 <motion.div
//                   className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl p-3"
//                   whileHover={{ rotate: 10 }}
//                 >
//                   <img src={item.icon} alt={item.title} className="w-12 h-12" />
//                 </motion.div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>




//       {/* section 3 */}
//       <section className="relative w-full  h-[550px]  bg-gray-100 overflow-hidden ">
//       <video
//   autoPlay
//   muted
//   loop
//   controls
//   playsInline
//   className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
// >
//   <source src="..components\img\amman-vedio.mp4/amman-vedio.mp4" type="video/mp4" />
//   متصفحك لا يدعم تشغيل الفيديو.
// </video>


//       {/* تراكب شفاف لإضاءة النص */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* محتوى الفيديو */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
//         <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
//           استمتع بالفيديو
//         </h2>
//         <p className="mt-2 text-lg md:text-xl drop-shadow-md">
//           انغمس في تجربة بصرية لا تُنسى.
//         </p>
//         <a
//           href="#"
//           className="mt-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-2xl shadow-lg transition-transform duration-300 hover:scale-110"
//         >
//           ▶
//         </a>
//       </div>

//       {/* صورة خلفية في حالة عدم تشغيل الفيديو */}
//       <img
//         src={placeholderImage}
//         alt="خلفية"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
//       />
//     </section>

    
//       {/* section 5 */}
//       <div className="bg-yellow-50 py-12">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
//             ماذا يقول مستخدمونا؟
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
//               >
//                 <p className="text-gray-700 mb-4">{testimonial.text}</p>
//                 <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-400 mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-gray-600">{testimonial.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;






// ====================================اليوزير بروفايل===========================




// import React, { useState } from 'react';

// const About = () => {
//   const [user, setUser] = useState({
//     name: 'أحمد',
//     email: 'ahmed@example.com',
//     phone: '0791234567',
//     bio: 'محب للسفر واستكشاف الأماكن الجديدة',
//     profileImage: 'https://via.placeholder.com/150',
//   });

//   const [isEditing, setIsEditing] = useState({
//     name: false,
//     email: false,
//     phone: false,
//     bio: false,
//   });

//   const [message, setMessage] = useState('');
//   const [suggestedPlaces, setSuggestedPlaces] = useState([
//     { id: 1, name: 'وادي الهيدان', description: 'وادي رائع للمغامرات والتجديف', image: 'https://via.placeholder.com/200' },
//     { id: 2, name: 'محمية ضانا', description: 'أكبر محمية طبيعية في الأردن، مثالية للمشي الجبلي', image: 'https://via.placeholder.com/200' },
//     { id: 3, name: 'غابات برقش', description: 'غابات ساحرة مثالية للتنزه والتخييم', image: 'https://via.placeholder.com/200' },
//   ]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleEditToggle = (field) => {
//     setIsEditing((prev) => ({
//       ...prev,
//       [field]: !prev[field],
//     }));
//     if (isEditing[field]) {
//       setMessage('تم حفظ التغييرات بنجاح!');
//       setTimeout(() => setMessage(''), 3000);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 my-35">
//       <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full text-center">
//         <h2 className="text-3xl font-bold mb-6 text-[#022C43]">الملف الشخصي</h2>
//         <div className="flex flex-col items-center mb-6">
//           <img src={user.profileImage} alt='' className="rounded-full w-32 h-32 shadow-lg mb-4" />
//           <div className="bg-gray-50 shadow-sm rounded-lg p-4 w-full text-right">
//             <h3 className="text-xl font-semibold mb-2">معلوماتي</h3>
//             {['name', 'email', 'phone', 'bio'].map((field) => (
//               <div key={field} className="mb-4">
//                 {field !== 'bio' ? (
//                   <input
//                     type={field === 'email' ? 'email' : 'text'}
//                     name={field}
//                     value={user[field]}
//                     onChange={handleChange}
//                     placeholder={field}
//                     disabled={!isEditing[field]}
//                     className={`border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-[#FFD700] ${!isEditing[field] ? 'bg-gray-100' : ''}`}
//                   />
//                 ) : (
//                   <textarea
//                     name='bio'
//                     value={user.bio}
//                     onChange={handleChange}
//                     placeholder='نبذة عنك'
//                     disabled={!isEditing.bio}
//                     className={`border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-[#FFD700] h-24 ${!isEditing.bio ? 'bg-gray-100' : ''}`}
//                   />
//                 )}
//                 <button onClick={() => handleEditToggle(field)} className="text-blue-500 ml-2">{isEditing[field] ? 'حفظ' : 'تعديل'}</button>
//               </div>
//             ))}
//             {message && <p className="mt-2 text-green-500">{message}</p>}
//           </div>
//         </div>

//         <h3 className="text-2xl font-bold mb-4 text-[#022C43]">الأماكن المقترحة لك</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {suggestedPlaces.map((place) => (
//             <div key={place.id} className="bg-gray-50 shadow-md rounded-lg p-4 text-center">
//               <img src={place.image} alt={place.name} className="rounded-lg mb-3 w-full h-32 object-cover" />
//               <h4 className="text-lg font-semibold mb-2">{place.name}</h4>
//               <p className="text-gray-600">{place.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



// ====================================اليوزير بروفايل===========================




// =======================================اشاشرات  للايقونات=================

// import React, { useState } from 'react';
// import { Facebook, Twitter, Instagram, Github, Youtube } from 'lucide-react';

// const About = () => {
//   const socialIcons = [
//     { name: 'Facebook', Icon: Facebook, hoverBgClass: 'bg-blue-600' },
//     { name: 'Twitter', Icon: Twitter, hoverBgClass: 'bg-blue-400' },
//     { name: 'Instagram', Icon: Instagram, hoverBgClass: 'bg-pink-600' },
//     { name: 'Github', Icon: Github, hoverBgClass: 'bg-gray-800' },
//     { name: 'YouTube', Icon: Youtube, hoverBgClass: 'bg-red-600' }
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);
  
//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gray-50">
//       <div className="inline-flex">
//         {socialIcons.map((social, index) => (
//           <div 
//             key={index} 
//             className="mx-5 text-center cursor-pointer flex items-center justify-center flex-col relative z-10"
//             onMouseEnter={() => setActiveIndex(index)}
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             {/* Tooltip */}
//             <div 
//               className={`absolute top-0 z-0 py-2 px-4 text-lg font-medium rounded-full shadow-md transition-all duration-300 ${
//                 activeIndex === index ? 'opacity-100 -translate-y-16' : 'opacity-0 translate-y-0 pointer-events-none'
//               } ${activeIndex === index ? social.hoverBgClass : 'bg-white'} ${
//                 activeIndex === index ? 'text-white' : 'text-white'
//               }`}
//             >
//               {social.name}
//               <div 
//                 className={`absolute h-3 w-3 left-1/2 -bottom-1 -translate-x-1/2 rotate-45 ${
//                   activeIndex === index ? social.hoverBgClass : 'bg-white'
//                 }`}
//               ></div>
//             </div>
            
//             {/* Icon Circle */}
//             <div 
//               className={`h-14 w-14 rounded-full relative z-10 shadow-lg flex items-center justify-center transition-all duration-300 ${
//                 activeIndex === index ? `${social.hoverBgClass} text-white` : 'bg-white text-black'
//               }`}
//             >
//               <social.Icon size={24} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;


// =======================================اشاشرات  للايقونات=================



// =======================================صور بتلف=================


// import React, { useState } from 'react';
// import { Facebook, Twitter, Instagram, Github, Youtube } from 'lucide-react';

// const About = () => {
//   const socialIcons = [
//     { name: 'Facebook', Icon: Facebook, hoverBgClass: 'bg-blue-600' },
//     { name: 'Twitter', Icon: Twitter, hoverBgClass: 'bg-blue-400' },
//     { name: 'Instagram', Icon: Instagram, hoverBgClass: 'bg-pink-600' },
//     { name: 'Github', Icon: Github, hoverBgClass: 'bg-gray-800' },
//     { name: 'YouTube', Icon: Youtube, hoverBgClass: 'bg-red-600' }
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);
  
//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gray-50">
//       <div className="inline-flex">
//         {socialIcons.map((social, index) => (
//           <div 
//             key={index} 
//             className="mx-5 text-center cursor-pointer flex items-center justify-center flex-col relative z-10"
//             onMouseEnter={() => setActiveIndex(index)}
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             {/* Tooltip */}
//             <div 
//               className={`absolute top-0 z-0 py-2 px-4 text-lg font-medium rounded-full shadow-md transition-all duration-300 ${
//                 activeIndex === index ? 'opacity-100 -translate-y-16' : 'opacity-0 translate-y-0 pointer-events-none'
//               } ${activeIndex === index ? social.hoverBgClass : 'bg-white'} ${
//                 activeIndex === index ? 'text-white' : 'text-white'
//               }`}
//             >
//               {social.name}
//               <div 
//                 className={`absolute h-3 w-3 left-1/2 -bottom-1 -translate-x-1/2 rotate-45 ${
//                   activeIndex === index ? social.hoverBgClass : 'bg-white'
//                 }`}
//               ></div>
//             </div>
            
//             {/* Icon Circle */}
//             <div 
//               className={`h-14 w-14 rounded-full relative z-10 shadow-lg flex items-center justify-center transition-all duration-300 ${
//                 activeIndex === index ? `${social.hoverBgClass} text-white` : 'bg-white text-black'
//               }`}
//             >
//               <social.Icon size={24} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;


// // ===========================================================================




// "use client"

// import { useState } from "react"
// import { ChevronDown, ChevronUp, MapPin, Ticket, Star, Heart } from "lucide-react"

// export default function About(props) {
//   const {
//     name = "حدائق الخريف",
//     description = "حديقة جميلة ذات أوراق خريفية ملونة، مثالية للتصوير والمشي الهادئ.",
//     city = "فيينا",
//     season = "الخريف",
//     requiresTicket = true,
//     imageUrl = "/placeholder.svg?height=400&width=600",
//     rating = 4.8,
//   } = props

//   const [isExpanded, setIsExpanded] = useState(false)
//   const [isFavorite, setIsFavorite] = useState(false)

//   return (
//     <div className="max-w-md rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rtl my-100 mr-100">
//       <div className="relative h-56 w-full overflow-hidden group">
//       <img
//   src={imageUrl || "/placeholder.svg"}
//   alt={name}
//   className="object-cover transition-transform duration-700 group-hover:scale-110"
// />

//         <div className="absolute inset-0 bg-gradient-to-t from-[#022C43]/70 to-transparent" />

//         {/* شارة الموسم */}
//         <div className="absolute top-4 right-4 flex flex-col gap-2">
//           <span className="bg-[#FFD700] text-[#022C43] px-3 py-1 rounded-md font-bold">{season}</span>

//           {/* شارة التذكرة */}
//           {requiresTicket && (
//             <span className="bg-[#053F5E] text-white px-3 py-1 rounded-md flex items-center">
//               <Ticket size={14} className="ml-1" />
//               تذكرة مطلوبة
//             </span>
//           )}
//         </div>

//         {/* زر المفضلة */}
//         <button
//           onClick={() => setIsFavorite(!isFavorite)}
//           className="absolute top-4 left-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:rotate-6"
//         >
//           <Heart
//             size={20}
//             className={
//               isFavorite
//                 ? "fill-[#FF3B5C] stroke-[#FF3B5C]"
//                 : "stroke-[#115173] fill-transparent hover:stroke-[#FF3B5C]"
//             }
//           />
//         </button>

//         {/* التقييم */}
//         <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-[#022C43]/80 text-white px-2 py-1 rounded-lg">
//           <Star className="fill-[#FFD700] stroke-[#FFD700]" size={16} />
//           <span className="text-sm font-bold">{rating}</span>
//         </div>
//       </div>

//       <div className="p-5 relative">
//         {/* عنصر زخرفي */}
//         <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>

//         <div className="relative z-10">
//           {/* العنوان والمدينة */}
//           <div className="flex justify-between items-start mb-3">
//             <h2 className="text-xl font-bold text-[#022C43]">{name}</h2>
//             <div className="flex items-center gap-1 text-[#115173] bg-[#115173]/10 px-2 py-1 rounded-lg">
//               <span className="text-sm">{city}</span>
//               <MapPin size={16} />
//             </div>
//           </div>

//           {/* الوصف */}
//           <div className="mb-4 relative">
//             <div
//               className={
//                 isExpanded
//                   ? "text-[#444444] text-sm leading-relaxed"
//                   : "text-[#444444] text-sm leading-relaxed line-clamp-2"
//               }
//             >
//               {description}
//             </div>
//             {!isExpanded && (
//               <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent"></div>
//             )}
//           </div>

//           {/* زر عرض المزيد */}
//           <div className="flex items-center justify-end mt-4 border-t border-[#FFD700]/30 pt-3">
//             <button
//               className="text-[#115173] hover:text-[#022C43] hover:bg-[#FFD700]/10 px-3 py-1 rounded-md flex items-center text-sm"
//               onClick={() => setIsExpanded(!isExpanded)}
//             >
//               {isExpanded ? "عرض أقل" : "عرض المزيد"}
//               {isExpanded ? <ChevronUp className="mr-1 h-4 w-4" /> : <ChevronDown className="mr-1 h-4 w-4" />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }












import "bootstrap/dist/css/bootstrap.min.css";
import seasonsImage from "../../components/img/4-seasons.png"; // تأكد من المستوى الصحيح
// import PlaceDetails  from "./components/pages/places/PlaceDetails ";
import { Link } from "react-router-dom";
import favoriteImage from "../../components/img/bookmark.png"; // تأكد من المستوى الصحيح
import { useParams, useNavigate } from "react-router-dom";
// import { ChevronDown, ChevronUp, MapPin, Ticket, Star, Heart } from "lucide-react"
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, ChevronUp, MapPin, Ticket, Star, Heart } from "lucide-react"

const cityData = [
  {
    city: "عمان",
    title: "عمان",
    image: "https://example.com/amman-image.jpg", // ضع هنا رابط الصورة الصحيح
    description:
      "عمان هي مدينة مليئة بالأماكن المثيرة للاستكشاف! من المعالم التاريخية والمواقع الثقافية إلى الحدائق والأسواق النابضة بالحياة.",
  },
  {
    city: "اربد",
    title: "اربد",
    image:
      "https://i.pinimg.com/736x/91/00/dc/9100dc3da99d33ffc884109ee72c5f7c.jpg",
    description:
      "إربد هي مدينة تمتاز بجوها الهادئ وجمالها الطبيعي، حيث تجمع بين التاريخ العريق والطبيعة الخلابة مع أسواقها التقليدية.",
  },
  {
    city: "الزرقاء",
    title: "الزرقاء",
    image:
      "https://scontent.famm13-1.fna.fbcdn.net/v/t1.6435-9/127123488_1644512062387400_6830560409441485191_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wDpUWh3HjNkQ7kNvgESw08n&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=AmImClbKqcPE2QOhTZ_Vz6Z&oh=00_AYBfcumRJD2lGRO0p25d47Mej5KlJVsCkhg5iu-lBjZaWg&oe=67BF7DFF",
    description:
      "الزرقاء مدينة حيوية تتميز بموقعها الصناعي والتجاري الهام، وتضم العديد من الأسواق الشعبية والمقاهي التقليدية إلى جانب أماكن ترفيهية تلبي احتياجات العائلات.",
  },
];

const CityPage = () => {
  const categories = [
    { name: "متاحف", category: "Museums" },
    { name: "الأندية الرياضية", category: "SportClub" },
    { name: "مطاعم", category: "restaurants" },
    { name: "ترفيه وألعاب", category: "entertainment" },
    { name: "أماكن أثرية", category: "historical-sites" },
    { name: "أماكن للتصوير", category: "photo-spots" },
    { name: "ثقافة وفنون", category: "culture-arts" },
  ];
  const user = JSON.parse(localStorage.getItem("user")); // افترض أن المستخدم تم تخزينه هنا بعد تسجيل الدخول
  const [places, setPlaces] = useState([]);
    const [city, setCity] = useState("");
    const [showFavorites, setShowFavorites] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const storedUserId = localStorage.getItem("userId"); 
    console.log("User ID:", storedUserId);
    const userEmail = user?.email || ""; // تصحيح التسمية
    console.log("User Email:", userEmail);
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState("");


    const [userFavorites, setUserFavorites] = useState([]);

    useEffect(() => {
      if (userEmail) {
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${userEmail}`)) || [];
        setUserFavorites(storedFavorites);
      }
    }, [userEmail]);
    



    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const cityParam = params.get("city");
      if (cityParam && cityParam !== city) {
        setCity(cityParam);
        fetchPlaces(cityParam);
      }
    }, [location]);
  
    const fetchPlaces = async (city) => {
      try {
        const response = await axios.get(`http://localhost:9527/places/city/${city}`);
        setPlaces(response.data);
      } catch (error) {
        console.error("❌ Error fetching places:", error);
      }
    };
  
useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");

    if (storedUserId) setUserId(storedUserId);
    if (storedUsername) setUsername(storedUsername);

    console.log("User ID:", storedUserId);
    console.log("Username:", storedUsername);
}, []);

    const addToFavorites = (place) => {
      if (!userId) {
        alert("يرجى تسجيل الدخول لحفظ الأماكن في المفضلة.");
        return;
      }
    
      let userFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
    
      if (!userFavorites.some(fav => fav._id === place._id)) {
        userFavorites.push(place);
        localStorage.setItem(`favorites_${userId}`, JSON.stringify(userFavorites));
        alert(`${place.name} تم إضافته للمفضلة!`);
      } else {
        alert(`${place.name} موجود بالفعل في المفضلة.`);
      }
    };
    
    
  
    const removeFromFavorites = (place) => {
      if (!userId) return;
    
      let userFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
      userFavorites = userFavorites.filter(fav => fav._id !== place._id);
      localStorage.setItem(`favorites_${userId}`, JSON.stringify(userFavorites));
    
      alert(`${place.name} تم إزالته من المفضلة.`);
    };
    
    const [favorites, setFavorites] = useState([]);

useEffect(() => {
  if (userId) {
    const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
    setFavorites(storedFavorites);
  }
}, [userId]);
 


const getDisplayedPlaces = () => {
  return showFavorites ? favorites : places;
};

    
  
    const handleDetails = (place) => {
      console.log("🔹 Navigating to:", `/place-details/${place._id}`);
      navigate(`/place-details/${place._id}`);
    };
    
  
    const [isExpanded, setIsExpanded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)


    const sectionStyle = {
        backgroundImage:
          "url(https://i0.wp.com/familyinjordan.com/wp-content/uploads/2018/07/IMG_20180623_154944.jpg?fit=750%2C563&ssl=1)",
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
         {/* Hero section end */}

        <section className="dorne-welcome-area bg-overlay" style={sectionStyle}>
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12 col-md-10">
                <div className="hero-content text-center text-white">
             
                </div>
    
                <div style={bigCardStyle} className="mt-4">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img
                        src="https://i.pinimg.com/736x/47/d2/c2/47d2c22f9255593d5dbb0f1443369f4f.jpg"
                        alt="صورة الوجهة"
                        className="img-fluid rounded shadow"
                      />
                    </div>
    
                    <div className="col-md-6">
                      <div className="card-body text-white">
                        <h3 className="card-title">عمان</h3>
                        <p className="card-text" style={{ fontSize: "1.25rem", lineHeight: "1.8" }}>
                          عمان هي مدينة مليئة بالأماكن المثيرة للاستكشاف! من المعالم
                          التاريخية والمواقع الثقافية إلى الحدائق المناسبة للعائلات
                          والأسواق النابضة بالحياة، هناك شيء للجميع. سواء كنت تبحث
                          عن مغامرة، استرخاء، أو تجربة طعام فريدة، تقدم عمان العديد
                          من الخيارات لجعل زيارتك لا تنسى.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div style={buttonContainerStyle} className="mt-3">
      
    <div style={{ display: "flex",  gap: "10px" }}>
        {categories.map((item, index) => (
          <Link 
            key={index} 
            to={`/${item.category}`} 
            className="btn btn-primary"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#115173")}
          
          >
            {item.name}
          </Link>
        ))}
      </div>

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
     <div className="container" style={{ marginTop: 100  , width:"90%"}}>
      <h1 className="text-white text-center mb-5" style={styles.sectionTitle}>
        
      </h1>
      <div className="search-favorite d-flex justify-content-between align-items-center mb-4" style={{ position: 'left' }}>
  <div className="favorite-icon" style={{ display: 'flex', alignItems: 'center' }}>
  <a
  href="#"
  onClick={() => {
    const userToken = localStorage.getItem("token");
    localStorage.getItem(`favorites_${userEmail}`)

    if (!userToken) {
      alert("يرجى تسجيل الدخول لحفظ الأماكن في المفضلة.");
      return;
    }
    setShowFavorites(!showFavorites);
  }}
  style={{ marginLeft: 10, cursor: "pointer" }}
>
{showFavorites ? " " : " "}
  <img
    src={favoriteImage}
    alt="4 Seasons"
    style={{ width: 50, height: 50 }}
  />
</a>

<Link to="/seasonPage/ربيع">
    <img
        src={seasonsImage}
        alt="4 Seasons"
        style={{ width: 50, height: 50, cursor: "pointer" }}
    />
</Link>
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
    <div style={{ padding: "20px", position: "relative", minHeight: "100vh", marginTop: "100px", backgroundColor: "#f8f9fa"  }}>
  <h1 style={{ textAlign: "center", color: "#022C43" }}>الأماكن في {city}</h1>

  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
    {getDisplayedPlaces().length > 0 ? (
      getDisplayedPlaces().map((place) => (
        <div
          key={place._id}
          style={{
            width: "300px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            padding: "15px",
            textAlign: "center",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={place.gallery[0]}
            alt={place.name}
            style={{ width: "100%", height: "200px", borderRadius: "10px", objectFit: "cover" }}
          />
          <h3 style={{ color: "#115173" }}>{place.name}</h3>
          <p style={{ color: "#444444" }}>{place.short_description}</p>
          <p><strong style={{ color: "#022C43" }}>التفاصيل:</strong> {place.detailed_description}</p>
          <p><strong style={{ color: "#022C43" }}>أفضل موسم:</strong> {place.best_season}</p>
          <p><strong style={{ color: "#022C43" }}>المدينة:</strong> {place.city}</p>
          <p><strong style={{ color: "#022C43" }}>تواصل:</strong> {place.contact?.phone}</p>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
            <button
              style={{
                padding: "10px",
                backgroundColor: showFavorites ? "#dc3545" : "#FFD700",
                color: "#ffffff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                flexGrow: 1,
                marginRight: "10px",
                transition: "background-color 0.3s",
              }}
              onClick={() => showFavorites ? removeFromFavorites(place) : addToFavorites(place)}
            >
              {showFavorites ? "إزالة من المفضلة" : "أضف للمفضلة"}
            </button>
            <button
              style={{
                padding: "10px",
                backgroundColor: "#115173",
                color: "#ffffff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                flexGrow: 1,
                transition: "background-color 0.3s",
              }}
              onClick={() => handleDetails(place)}
            >
              المزيد
            </button>
          </div>
        </div>
      ))
    ) : (
      <p style={{ textAlign: "center", fontSize: "18px", color: "gray" }}>لا توجد أماكن متاحة.</p>
    )}
  </div>

  {/* زر عرض المفضلة */}
  {/* <button
    onClick={() => setShowFavorites(!showFavorites)}
    style={{
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "15px 30px",
      backgroundColor: showFavorites ? "#dc3545" : "#FFD700",
      color: "#ffffff",
      border: "none",
      borderRadius: "30px",
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      transition: "background-color 0.3s",
    }}
  >
    {showFavorites ? "عرض الكل" : "عرض المفضلة"}
  </button> */}
</div>
    </div>
</>
      );
    };
    
    

export default CityPage;













