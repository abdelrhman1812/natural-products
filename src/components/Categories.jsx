import Aos from "aos";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bashra from "../assets/bashra.jpg";
import body from "../assets/body.jpg";
import hair from "../assets/hair.jpg";
import oil from "../assets/oil.jpg";
import SectionTitle from "./SectionTitle";

const Categories = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className="categories overflow-hidden py-5">
      <div className="container-xl">
        <SectionTitle title="التصنيفات" />
        <div className="row">
          <Slider {...settings}>
            <div className="col-md-6 p-2">
              <div className="item" data-aos="zoom-out">
                <figure>
                  <img src={oil} alt="" className="w-100" />
                </figure>
                <h3>
                  <span>Natural Oils</span>
                  زيوت طبيعية
                </h3>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="item" data-aos="zoom-out">
                <figure>
                  <img src={hair} alt="" className="w-100" />
                </figure>
                <h3>
                  <span>Hair Care</span>
                  العناية بالشعر
                </h3>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="item " data-aos="zoom-out">
                <figure>
                  <img src={body} alt="" className="w-100" />
                </figure>
                <h3>
                  <span>Body Care</span>
                  العناية بالجسم{" "}
                </h3>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="item " data-aos="zoom-out">
                <figure>
                  <img src={bashra} alt="" className="w-100" />
                </figure>
                <h3>
                  <span>Skin Care</span>
                  العناية بالبشرة
                </h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Categories;
