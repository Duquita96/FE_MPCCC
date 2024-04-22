import { useState } from 'react'
import MainHeader from "./MainHeader";
import Login from "./Login";
import Cart from "./Cart";
import ProductsNavBar from "./ProductsNavBar";
import ServicesNavBar from "./ServicesNavBar";
import MobileNavBar from "./MobileNavBar";
import WelcomeText from "./WelcomeText";
import ProductPreview from "./ProductPreview";
import Footer from "./Footer";

const Homepage = ({windowWidth}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleLogin = () => {
    setShowCart(showCart ? false : null);
    setShowLogin(showLogin ? false : true);
  };
  const toggleCart = () => {
    setShowLogin(showLogin ? false : null);
    setShowCart(showCart ? false : true);
  };
  
  const toggleFunctions = { toggleLogin, toggleCart };

  return (
    <>
      <MainHeader toggleFunctions={toggleFunctions} windowWidth={windowWidth} />
      {showLogin && <Login />}
      {showCart && <Cart />}
      {windowWidth > 768 && <ProductsNavBar />}
      {windowWidth > 768 && <ServicesNavBar />}
      {windowWidth <= 768 && <MobileNavBar toggleFunctions={toggleFunctions} />}
      <WelcomeText />
      <ProductPreview />
      <Footer />
    </>
  );
};

export default Homepage;
