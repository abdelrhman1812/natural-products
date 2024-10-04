import BestSeller from "../../components/BestSeller";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/NavBar";
import NewAdded from "../../components/NewAdded";
import Reviews from "../../components/Reviews";
import TrendToday from "../../components/TrendToday";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      {/* <WhyUs /> */}
      <Categories />
      <NewAdded />
      <TrendToday />
      <BestSeller />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
