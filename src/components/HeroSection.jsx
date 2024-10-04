import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";

export default function HeroSection() {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="hero overflow-hidden position-relative">
      <Slider {...settings}>
        <div className="main-1">
          <img src={image1} className="w-100" alt="Natural oils" />
        </div>
        <div className="main-3">
          <img src={image2} className="w-100" alt="Natural products" />
        </div>
      </Slider>

      <div className="hero-text position-absolute top-50 start-50 translate-middle text-center ">
        <h1 className="display-4">منتجات طبيعية للعناية بالبشرة والشعر</h1>
        <p className="lead mt-3">
          نقدم لك أفضل الزيوت الطبيعية والمستحضرات التجميلية للعناية بجمالك
          وصحتك باستخدام مواد طبيعية 100%.
        </p>
        <button className="btn btn-primary mt-4">تسوق الآن</button>
      </div>
    </section>
  );
}
