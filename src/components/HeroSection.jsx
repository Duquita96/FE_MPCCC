import { useContext } from 'react';
import WidthContext from '../context/WidthContext.jsx';
import "../style/heroSection.css";

const HeroSection = () => {

  const { windowWidth } = useContext(WidthContext)

  return (
    <div className="hero-container">
      {windowWidth > 768 && <p className="hero-text">
        "A great selection of products and services at the best value, right here for you!" *****  
      </p>}
      <p className="hero-text">
        "Beats the competition in both prices and availability!" *****  
      </p>
      <p className="hero-text">
        Come shop at MarketPlace, our users love it!
      </p>


    </div>
  );
};

export default HeroSection;
