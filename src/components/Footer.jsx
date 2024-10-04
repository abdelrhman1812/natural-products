const Footer = () => {
  return (
    <footer className=" text-white-50 footer pt-5 overflow-hidden">
      <div className="container py-5">
        <div className="pb-4 mb-4 top">
          <div className="row g-4">
            <div className="text-center col-lg-3">
              <a href="#">
                <h4 className=" mb-0">Natural Products</h4>
                <p className="text-secondary mb-0">Best Products</p>
              </a>
            </div>

            {/* Input */}
            <div className="col-lg-6">
              <div className="position-relative mx-auto input">
                <input
                  className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                  type="email"
                  placeholder="البريد الالكتروني"
                  required
                />
                <button
                  type="submit"
                  className="btn  border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                >
                  الاشتراك
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="col-lg-3">
              <div className="d-flex justify-content-end pt-3">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="icon">
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span className="icon">
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Natural Products</h4>
              <p className="mb-4">
                متجر متخصص في بيع الزيوت الخام والمستحضرات الطبيعية للعناية
                بالجسم والبشرة والشعر، مصنوعة بأيدي خبراء باستخدام مواد طبيعية
                100%، بجودة عالية وأسعار مناسبة
              </p>
              <button className=" read    ">اقرأ المزيد</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column  gap-2 footer-item">
              <h4 className=" mb-3">روابط سريعة</h4>
              <a className="btn-link text-white-50" href="">
                من نحن
              </a>
              <a className="btn-link text-white-50" href="">
                تواصل معنا
              </a>
              <a className="btn-link text-white-50" href="">
                سياسة الخصوصية
              </a>
              <a className="btn-link text-white-50" href="">
                الشروط والأحكام
              </a>
              <a className="btn-link text-white-50" href="">
                سياسة الإرجاع
              </a>
              <a className="btn-link text-white-50" href="">
                الأسئلة المتكررة والمساعدة
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column gap-2  footer-item">
              <h4 className=" mb-3">الحساب</h4>
              <a className="btn-link text-white-50" href="">
                حسابي
              </a>
              <a className="btn-link text-white-50" href="">
                تفاصيل المتجر
              </a>
              <a className="btn-link text-white-50" href="">
                عربة التسوق
              </a>
              <a className="btn-link text-white-50" href="">
                قائمة الرغبات
              </a>
              <a className="btn-link text-white-50" href="">
                سجل الطلبات
              </a>
              <a className="btn-link text-white-50" href="">
                الطلبات الدولية
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className=" mb-3">تواصل معنا</h4>
              <p>العنوان: 1429 طريق نيتوس، نيويورك 48247</p>
              <p>البريد الإلكتروني: Example@gmail.com</p>
              <p>الهاتف: +0123 4567 8910</p>
              <p>طرق الدفع المقبولة</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <footer>
//   <div className="container-xl">
//     <div className="row">
//       <div className="col-md-4">
//         <h3>Natural Products</h3>
//         <p>
//           متجر متخصص في بيع المواد الأولية والأساسية والمواد الحافظة ومنتجات
//           العناية بالشعر والبشرة والمزيد...
//         </p>
//       </div>
//       <div className="col-md-4">
//         <h3>روابط سريعة</h3>
//         <ul>
//           <li>
//             <a href="#">الرئيسية</a>
//           </li>
//           <li>
//             <a href="#">من نحن</a>
//           </li>
//           <li>
//             <a href="#">منتجاتنا</a>
//           </li>
//           <li>
//             <a href="#">الشروط والاحكام </a>
//           </li>
//           <li>
//             <a href="#"> سياسه الخصوصيه </a>
//           </li>
//         </ul>
//       </div>

//       <div className="col-md-4">
//         <h3>تواصل معنا</h3>
//         <ul>
//           <li>
//             <a href="#" dir="rtl">
//               <FaEnvelope className="ms-2" />
//               <span> Email@Example.com</span>
//             </a>
//           </li>
//           <li>
//             <a href="#" dir="rtl">
//               <FaPhone className="ms-2" />
//               <span>0100803461</span>
//             </a>
//           </li>
//         </ul>
//         <div
//           className="social-icons"
//           style={{
//             padding: "10px 40px",
//             display: "flex",
//             fontSize: "24px",
//             gap: "10px",
//           }}
//         >
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#3b5998" }}
//           >
//             <FaFacebook />
//           </a>
//           <a
//             href="https://wa.me/your-number"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#25D366" }}
//           >
//             <FaWhatsapp />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#C13584" }}
//           >
//             <FaInstagram />
//           </a>
//         </div>
//         <div className="social-icons"></div>
//       </div>
//     </div>
//   </div>
// </footer>
