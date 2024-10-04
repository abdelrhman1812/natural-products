import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SectionTitle from "./SectionTitle";

import Aos from "aos";

const Reviews = () => {
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

  const products = [
    {
      img: "https://zohor.co/wp-content/uploads/2023/11/370282073_887873116050125_540837528442303971_n-768x768.jpg",
      review:
        "تجربتي مع خلطة مانجا كانت رائعة، شعرى أصبح أكثر نعومة ولمعان بعد استخدامه بشكل منتظم.",
      name: "سارة علي",
    },
    {
      img: "https://zohor.co/wp-content/uploads/2021/04/%D8%A3%D8%B1%D8%AC%D8%A7%D9%86-115-%D9%85%D9%84-768x768.jpg",
      review:
        "زيت الأرجان المغربي حقًا مدهش، لقد ساعد على تقليل التجاعيد في شعري بشكل كبير.",
      name: "أحمد محمد",
    },
    {
      img: "https://zohor.co/wp-content/uploads/2021/04/%D8%A8%D8%B5%D9%84-115-%D9%85%D9%84-768x768.jpg",
      review:
        "زيت البصل كان له تأثير ملحوظ على نمو شعري، سأستخدمه مرة أخرى بالتأكيد لتحقيق نتائج أفضل.",
      name: "ليلى حسن",
    },
    {
      img: "https://zohor.co/wp-content/uploads/2021/04/%D8%AE%D8%B1%D9%88%D8%B9-115-%D9%85%D9%84-768x768.jpg",
      review:
        "  زيت الخروع أفضل منتج جربته للشعر، لقد لاحظت فرقًا كبيرًا في صحته وقوته انصح بالتجربه.",
      name: "علي سامي",
    },
    {
      img: "https://zohor.co/wp-content/uploads/2021/04/%D8%B2%D9%8A%D8%AA-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-600x600.jpg",
      review:
        "زيت الزيتون البِكر يضيف لمعانًا رائعًا لشعري، أنصح به بشدة لكل من يرغب في الجمال.",
      name: "منى جمال",
    },
  ];

  return (
    <section className="reviews overflow-hidden py-5">
      <div className="container-xl">
        <SectionTitle title=" آراء العملاء " />
        <div className="row">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div className="col-md-6 p-2" key={index}>
                <div className="review-item active" data-aos="fade-up">
                  <img
                    src={product.img}
                    className="mr-3 w-25 h-25 rounded-circle"
                    alt={product.name}
                  />
                  <div className="testimonial">
                    <p>{product.review}</p>
                    <p className="overview">
                      <b>{product.name}</b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
