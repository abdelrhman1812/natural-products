import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaShoppingBag,
  FaWhatsapp,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import "../index.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [scroll, SetScroll] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        SetScroll(false);
      } else {
        SetScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={` bg-white sticky-top ${scroll ? "sticky" : ""}`}>
      <div className="container-xl top-bar  d-lg-block">
        <div className="d-flex justify-content-between align-items-center">
          <div className="top-link pe-2 d-flex align-items-center gap-2">
            <p>تسجيل دخول</p>
            <button onClick={toggleMenu} className="border-0 bg-transparent">
              <FaBars className="bar-icon d-none" />
            </button>
          </div>
          <div className="top-info ps-2 d-flex gap-3">
            <div className="top-nav-icon">
              <FaFacebookF className="text-white mx-1" />
              <FaInstagram className="text-white mx-1" />
              <FaWhatsapp className="text-white mx-1" />
            </div>
            <span className="text-white">|</span>
            <p>اتصل بنا</p>
            <span className="text-white">|</span>
            <p>حسابي</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="container-xl p-0">
        <nav className="navbar">
          <div className="logo">
            <h1>منتجات طبيعية</h1>
          </div>
          <div
            className={`menu d-flex align-items-center justify-content-center gap-4 mx-auto ${
              showMenu ? "show-menu" : ""
            } `}
          >
            <h1 className="menu-title d-none">منتجات طبيعية</h1>
            <span href="index.html" className="nav-item nav-link active">
              الرئيسية
            </span>
            <span href="shop.html" className="nav-item nav-link">
              من نحن
            </span>
            <span href="shop-detail.html" className="nav-item nav-link">
              المنتجات
            </span>
            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                الفئات
              </span>
              <div className="dropdown-menu m-0 rounded-0">
                <span className="dropdown-item text-center">
                  العناية بالبشرة
                </span>
                <span className="dropdown-item text-center">
                  العناية بالشعر
                </span>
                <span className="dropdown-item text-center">
                  العناية بالجسم
                </span>
                <span className="dropdown-item text-center">زيوت طبيعية</span>
              </div>
            </div>
            <span className="nav-item nav-link">تواصل معنا</span>
          </div>
          {/* search */}
          <div className="d-flex m-3 me-0">
            <input type="text" placeholder="بحث" />
            <a href="#" className="position-relative me-4 my-auto">
              <FaShoppingBag />
              <span
                className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                style={{
                  top: "-5px",
                  left: "15px",
                  height: "20px",
                  minWidth: "20px",
                }}
              >
                3
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
