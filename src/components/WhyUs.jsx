import { FaAward, FaCoins, FaStudiovinari, FaTruck } from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className="why-us py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="item">
              <FaTruck />
              <h4>الشحن</h4>
              <p>شركات شحن متنوعة مع توفر الشحن الدولي</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="item">
              <FaCoins />
              <h4>الدفع</h4>
              <p>طرق دفع متنوعة مع إمكانية التقسيط </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="item">
              <FaAward />
              <h4>الجودة</h4>
              <p>جميع منتجاتنا مختارة ومصنعة بعناية وجودة فائقة</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="item">
              <FaStudiovinari />
              <h4>السرعة</h4>
              <p>سرعة في تنفيذ الطلبات وتسليمها لشركات الشحن</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
