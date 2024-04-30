import { useContext } from 'react';

import MainHeader from "../MainHeader.jsx";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import ProductsNavBar from "../ProductsNavBar.jsx";
import ToursNavBar from "../ToursNavBar.jsx";
import MobileNavBar from "../MobileNavBar.jsx";
import WelcomeText from "../WelcomeText.jsx";
import ProductsPreview from "../cmpnts-productPreview//ProductsPreview.jsx";
import Footer from "../Footer.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';
import WidthContext from '../../context/WidthContext.jsx';

/** Contains all the components related to the homepage */
const Homepage = () => {
  
  const {showLogin,showCart} = useContext(HeaderContext)
  const {windowWidth} = useContext(WidthContext)

  return (
    <>
      <MainHeader windowWidth={windowWidth} />
      {showLogin && <Login />}
      {showCart && <Cart />}
      {windowWidth > 768 && <ProductsNavBar />}
      {windowWidth > 768 && <ToursNavBar />}
      {windowWidth <= 768 && <MobileNavBar  />}
      <WelcomeText />
      <ProductsPreview />
      <Footer />
    </>
  );
};

export default Homepage;
