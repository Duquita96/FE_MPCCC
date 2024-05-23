import { useContext } from "react";
import { WidthContext } from '../context/WidthContextProvider.jsx';
import { FaStar } from "react-icons/fa";
import "../style/heroSection.css";

const HeroSection = () => {
  const { windowWidth } = useContext(WidthContext);

  return (
    <div className="hero-container">
      {windowWidth > 768 && <p className="hero-text">
        "A great selection of products and services at the best value, right
        here for you!
      </p>}
      {windowWidth > 768 && <div className="stars">
        <FaStar className="heroStar" size={12} />
        <FaStar className="heroStar" size={12} />
        <FaStar className="heroStar" size={12} />
        <FaStar className="heroStar" size={12} />
        <FaStar className="heroStar" size={12} />
      </div>}
      <p className="hero-text">
        "Beats the competition in both prices and availability!"
      </p>
      <div className="stars">
        <FaStar className="heroStar" size={12} />
        <FaStar className="heroStar" size={12} />
        <FaStar className="heroStar" size={12} />
        <FaStar className="heroStar" size={12} />
        <FaStar className="heroStar" size={12} />
      </div>
      <p className="hero-text">Come shop at MarketPlace, our users love it!</p>
    </div>
  );
};

export default HeroSection;
