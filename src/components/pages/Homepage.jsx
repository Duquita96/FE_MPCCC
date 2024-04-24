import { useContext } from 'react';

import MainHeader from "../MainHeader.jsx";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import ProductsNavBar from "../ProductsNavBar.jsx";
import ServicesNavBar from "../ServicesNavBar.jsx";
import MobileNavBar from "../MobileNavBar.jsx";
import WelcomeText from "../WelcomeText.jsx";
import ProductPreview from "../ProductPreview/ProductPreview.jsx";
import Footer from "../Footer.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';

const Homepage = ({windowWidth}) => {
  
  const {showLogin,showCart} = useContext(HeaderContext)

  return (
    <>
      <MainHeader windowWidth={windowWidth} />
      {showLogin && <Login />}
      {showCart && <Cart />}
      {windowWidth > 768 && <ProductsNavBar />}
      {windowWidth > 768 && <ServicesNavBar />}
      {windowWidth <= 768 && <MobileNavBar  />}
      <WelcomeText />
      <ProductPreview />
      <Footer />
    </>
  );
};

export default Homepage;
