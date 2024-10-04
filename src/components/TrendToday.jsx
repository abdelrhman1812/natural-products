import { FaCartArrowDown } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { oils } from "../assets/data/products";
import SectionTitle from "./SectionTitle";
const TrendToday = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  // useEffect(() => {
  //   Aos.init({});
  // }, []);
  return (
    <section className="trend overflow-hidden py-5">
      <div className="container-xl p-0">
        <SectionTitle title="الأكثر تداولا اليوم" />
        <h2></h2>
        <div className="row">
          <Slider {...settings}>
            {oils.map((oil, index) => (
              <div key={index} className="col-md-6 p-2 ">
                <div className="item" data-aos="fade-up">
                  <figure className="overflow-hidden">
                    <img src={oil.img} alt="" className="w-100" />
                  </figure>
                  <h3> {oil.title}</h3>
                  <p>ريال {oil.price}</p>
                  <button className="add-to-cart">
                    <FaCartArrowDown />
                    <span className="d-none d-md-block">اضف الى السلة</span>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrendToday;
