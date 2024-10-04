import { FaCartArrowDown } from "react-icons/fa";
import Slider from "react-slick/lib/slider";
import { bestSellers } from "../assets/data/products";
import SectionTitle from "./SectionTitle";

const BestSeller = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "50px",
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="new-added overflow-hidden">
      <div className="container-xl">
        <SectionTitle title="الاكثر مبيعا" />
        <div className="row">
          <Slider {...settings}>
            {bestSellers.map((item, index) => (
              <div key={index} className="col-md-6 p-2">
                <div className="item">
                  <figure className="overflow-hidden">
                    <img src={item.img} alt="" className="w-100" />
                  </figure>
                  <h3> {item.title}</h3>
                  <p>ريال {item.price}</p>
                  <button className="add-to-cart">
                    <FaCartArrowDown />
                    اضف الي السلة
                  </button>{" "}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
