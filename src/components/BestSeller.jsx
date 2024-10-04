import { FaCartArrowDown } from "react-icons/fa";
import Slider from "react-slick/lib/slider";
import { bestSellers } from "../assets/data/products";
import SectionTitle from "./SectionTitle";
const BestSeller = () => {
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

  //   useEffect(() => {
  //     Aos.init({});
  //   }, []);

  return (
    <section className="new-added overflow-hidden">
      <div className="container-xl p-0">
        <SectionTitle title="الاكثر مبيعا" />
        <div className="row">
          <Slider {...settings}>
            {bestSellers.map((item, index) => (
              <div key={index} className="col-md-6 p-2 ">
                <div className="item">
                  <figure className="overflow-hidden">
                    <img src={item.img} alt="" className="w-100" />
                  </figure>
                  <h3> {item.title}</h3>
                  <p>ريال {item.price}</p>
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

export default BestSeller;
