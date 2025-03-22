import React from "react";
import { Link } from "react-router-dom";

const PlogDetails = () => {
  const callouts = [
    {
      "articles": [
        {
          "name": "مقال 1",
          "date": "1 يناير 2023",
          "imageSrc": "https://i.pinimg.com/736x/4b/a8/61/4ba861312c84b4087009e5aae8b6ceed.jpg",
          "description": "اكتشاف وجهة جديدة: الحديقة اليابانية في عمّان",
          "href": "/article-1"
        },
        {
          "name": "مقال 2",
          "date": "2 يناير 2023",
          "imageSrc": "https://www.family.abbott/content/dam/an/familyabbott/jo-ar/abbott-family/FAM_Jordan%20homepage%20banner.jpg",
          "description": "استكشاف قلعة عجلون: تاريخ وحكايات من العصور الوسطى",
          "href": "/article-2"
        },
        {
          "name": "مقال 3",
          "date": "4 يناير 2023",
          "imageSrc": "https://assets.nn.najah.edu/CACHE/images/uploads/weblog/2017/03/31/faae1cb1ec/0331491da6b91d195b61fb927589d05c.jpg",
          "description": "أهمية الترويح عن النفس: قضاء وقت ممتع مع أطفالك",
          "href": "/article-3"
        },
        {
          "name": "مقال 4",
          "date": "5 يناير 2023",
          "imageSrc": "https://assets.nn.najah.edu/CACHE/images/uploads/weblog/2017/03/31/faae1cb1ec/0331491da6b91d195b61fb927589d05c.jpg",
          "description": "متحف ألف مخترع ومخترع: أفضل وجهة تعليمية للأطفال في الأردن",
          "href": "/article-4"
        }
      ],
      "hero": {
        "imageSrc": "https://i.pinimg.com/736x/7a/39/c9/7a39c98897363a0625c40c57d8522bc7.jpg",
        "title": "مدونتنا",
        "content": "اكتشف مقالات شيقة وملهمة حول أفضل الوجهات، التجارب الفريدة، والنصائح المفيدة لكل محب للسفر والاستكشاف."
      },
      "comments": [
        {
          "author": "إيميلي بلانت",
          "date": "4 ديسمبر 2017",
          "comment": "مقال رائع!"
        }
      ],
      "images": [
        "https://i.pinimg.com/736x/25/81/2b/25812ba4f53180e9443e76361c9bbef9.jpg",
        "https://i.pinimg.com/736x/ab/ac/78/abac785eebadf5e4cd7f07c86907d97c.jpg",
        "https://i.pinimg.com/736x/c6/7a/44/c67a44f9c5cd7f070cfab43648215d49.jpg",
        "https://i.pinimg.com/736x/1e/77/7d/1e777d63c1a5a2d9c5f943ddb07aef92.jpg",
        "https://i.pinimg.com/736x/5f/16/82/5f1682acb6c4d19dcaa142e61e49ca54.jpg",
        "https://i.pinimg.com/736x/c4/7e/18/c47e18518150b4cd1b9401bf11d6ab65.jpg"
      ],
      "commentForm": {
        "placeholder": "اكتب تعليقك",
        "namePlaceholder": "الاسم",
        "emailPlaceholder": "البريد الإلكتروني"
      }
    }
    
  ];

  return (
    <div className="container mx-auto p-5" style={{ direction: 'rtl' }}>
      {/* Bradcam Area */}
    {/* Hero Section */}
    <div
  className="relative h-[400px] flex items-center justify-center bg-cover bg-center rounded-lg shadow-lg"
  style={{ backgroundImage: "url('https://i.pinimg.com/736x/7a/39/c9/7a39c98897363a0625c40c57d8522bc7.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg"></div>
  <div className="relative z-10 text-center text-white px-6 max-w-2xl">
  <h3 className="text-4xl font-extrabold mb-4 drop-shadow-lg">مدونتنا</h3>
  <p className="text-lg text-gray-200 leading-relaxed">
    اكتشف مقالات شيقة وملهمة حول أفضل الوجهات، التجارب الفريدة، والنصائح المفيدة لكل محب للسفر والاستكشاف.
    نقدم لكم محتوى ثري يجمع بين المعرفة والتجربة، لتكونوا على اطلاع دائم بأجمل الأماكن وأحدث الاتجاهات.
  </p>
</div>

</div>
      {/* Blog Area */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
         {/* الشريط الجانبي (Sidebar) */}
                <div className="col-lg-4">
                  <div className="bg-white shadow-sm rounded p-4 mb-4">
                    <h5 className="font-bold mb-3" style={{ color: '#000', textAlign: 'right' }}>المقالات الأخيرة</h5>
                    <ul className="list-unstyled">
                      {callouts.map((post, index) => (
                        <li className="d-flex align-items-center mb-3" key={index}>
                          <img
                            className="img-fluid"
                            src={post.imageSrc}
                            alt="مقال حديث"
                            style={{ width: "30%" }}
                          />
                          <div className="ms-3">
                            <Link to={post.href} style={{ color: '#000', textDecoration: 'none' }}>
                              {post.discription}
                            </Link>
                            <small className="d-block text-muted">{post.date}</small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
        
                  <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h5 className="font-bold mb-4" style={{ color: '#000', textAlign: 'right' }}>سحابة الكلمات الدلالية</h5>
            <div className="d-flex flex-wrap">
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#مشاريع</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#تكنولوجيا</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#سفر</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#مطاعم</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#أسلوب الحياة</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#تصميم</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#رسم</span>
            </div>
          </div>
        
          <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h5 className="font-bold mb-3" style={{ color: '#000', textAlign: 'right' }}>صور من إنستغرام</h5>
            <div className="d-flex flex-wrap">
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/25/81/2b/25812ba4f53180e9443e76361c9bbef9.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/ab/ac/78/abac785eebadf5e4cd7f07c86907d97c.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/c6/7a/44/c67a44f9c5cd7f070cfab43648215d49.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/1e/77/7d/1e777d63c1a5a2d9c5f943ddb07aef92.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/5f/16/82/5f1682acb6c4d19dcaa142e61e49ca54.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/c4/7e/18/c47e18518150b4cd1b9401bf11d6ab65.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
            </div>
          </div>

        
                  <div className="bg-white shadow-sm rounded p-4 mb-4">
                    <h5 className="font-bold" style={{ textAlign: 'right', color: '#000' }}>اشترك في نشرتنا الإخبارية</h5>
                    <form>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="أدخل بريدك الإلكتروني" required />
                      </div>
                      <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FFD700' }}>
                        اشترك
                      </button>
                    </form>
                  </div>
                </div>

        {/* Main Content */}
        <div className="lg:w-3/4 p-4">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <img className="w-full rounded-lg mb-4" src="https://scontent.famm11-1.fna.fbcdn.net/v/t1.6435-9/116871463_159959212277905_4429607142102652363_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=d75gZGtVNSgQ7kNvgFc7yce&_nc_oc=AdiSeUoOHPLTiws2P72Fz3ydVhdVCqwkFwk3alI5x-ylI-R0Q2N3kH1mZbNCoPbtLJUuCKWGpo176-EMN5sfArlx&_nc_zt=23&_nc_ht=scontent.famm11-1.fna&_nc_gid=AD30qoJKIuXKLxJQf9pY02b&oh=00_AYBkSplC4LJ6uj65fM8nPM_sSIPgdso98qEW30YhCZYj8g&oe=67D079A9" alt="صورة المقال" />
            <h2 className="text-3xl font-bold text-blue-900">اكتشاف وجهة جديدة: الحديقة اليابانية في عمّان</h2>
            <ul className="flex space-x-4 text-gray-600 mt-2">
              <li><i className="fa fa-user"></i> سياحة، استكشاف</li>
              <li><i className="fa fa-comments"></i> 03 تعليقات</li>
            </ul>
            <p>هل سمعت من قبل عن الحديقة "اليابانية"؟ ...</p>
                <p className="text-lg text-gray-700 mb-4">
                  اكتشفوا روعة الحديقة اليابانية في عمّان، وجهة ساحرة تمزج بين الهدوء والطبيعة الخلابة. استمتعوا بتصميمها المستوحى من الثقافة اليابانية وتجاربها التي تناسب جميع الأعمار.
               </p>
                <div  className="bg-gray-100 border-l-4 border-blue-900 p-4 my-6">
                  <div class="quotes">
                     "الأردن ليس فقط البتراء والبحر الميت، بل هو أيضًا موطن لحدائق غنّاء وساحرة، مثل حدائق الحسين وحدائق الملك عبد الله، حيث الطبيعة الخلابة والهدوء الذي يبعث على الاسترخاء."

                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed" >الحديقة اليابانية في الأردن: واحة من الجمال والهدوء
                  تُعد الحديقة اليابانية في الأردن واحدة من الوجهات الفريدة التي تجمع بين روعة الطبيعة وسحر التصميم الياباني التقليدي. تقع هذه الحديقة الجميلة في قلب العاصمة عمّان، وهي مستوحاة من التراث الثقافي الياباني، حيث تم تصميمها بعناية لتعكس مفهوم الانسجام مع الطبيعة والجمال البسيط. تضم الحديقة مجموعة مذهلة من الممرات الحجرية، والجسور الخشبية التي تعبر فوق برك المياه الصافية، بالإضافة إلى الأشجار والنباتات اليابانية المزروعة بعناية فائقة لتوفير أجواء هادئة. كما تحتوي الحديقة على شلالات صغيرة وحدائق زن التقليدية، التي تساعد الزائرين على التأمل والاسترخاء بعيدًا عن صخب الحياة اليومية. تعتبر الحديقة اليابانية مكانًا مثاليًا للأفراد والعائلات الذين يبحثون عن ملاذ هادئ للاستمتاع بالطبيعة والتقاط الصور التذكارية المميزة.
                  
                  إلى جانب جمالها الطبيعي، تُعد الحديقة اليابانية مركزًا ثقافيًا يعزز التبادل الثقافي بين الأردن واليابان. تقدم الحديقة فعاليات متنوعة تشمل العروض الثقافية اليابانية مثل حفلات الشاي التقليدية، وورش العمل الفنية، ومعارض الفن الياباني. كما تُستخدم الحديقة كمكان لإقامة المناسبات الخاصة، مما يجعلها وجهة مميزة للاحتفالات. تساهم هذه الحديقة في نشر الثقافة اليابانية وتعزيز الروابط بين الشعبين، بالإضافة إلى كونها مكانًا تعليميًا يعرّف الزوار على الفلسفة اليابانية في تصميم الحدائق، التي تركز على خلق بيئة تعكس التوازن والسكينة. زيارة الحديقة اليابانية في الأردن ليست مجرد تجربة ترفيهية، بل هي رحلة إلى عالم من الجمال والهدوء الذي يلامس الروح.</p>
           

            
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold">05 تعليقات</h4>
            <div className="flex items-start mt-4">
              <img className="w-12 h-12 rounded-full" src="https://i.pinimg.com/736x/f6/ee/13/f6ee1311d121ea0cef159ff502d21720.jpg" alt="صورة المعلق" />
              <div className="ml-4">
                <h5 className="font-bold">إيميلي بلانت</h5>
                <p className="text-sm text-gray-500">4 ديسمبر 2017</p>
                <p className="text-gray-700">مقال رائع!</p>
                <a href="#" className="text-blue-600 hover:underline text-sm">رد</a>
              </div>
            </div>
          </div>

          {/* Comment Form */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold">اترك تعليقًا</h4>
            <form className="mt-4">
              <textarea className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900" placeholder="اكتب تعليقك"></textarea>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input className="p-3 border rounded-md" type="text" placeholder="الاسم" />
                <input className="p-3 border rounded-md" type="email" placeholder="البريد الإلكتروني" />
              </div>
              <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">إرسال</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlogDetails;