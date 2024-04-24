import { useState } from 'react'
import MainHeader from "../MainHeader.jsx";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import ProductsNavBar from "../ProductsNavBar.jsx";
import ServicesNavBar from "../ServicesNavBar.jsx";
import MobileNavBar from "../MobileNavBar.jsx";
import WelcomeText from "../WelcomeText.jsx";
import ProductPreview from "../ProductPreview/ProductPreview.jsx";
import Footer from "../Footer.jsx";

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
