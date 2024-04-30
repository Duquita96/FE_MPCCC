import { useContext } from 'react';

import MainHeader from "../MainHeader.jsx";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import ProductsNavBar from "../ProductsNavBar.jsx";
import ServicesNavBar from "../ServicesNavBar.jsx";
import MobileNavBar from "../MobileNavBar.jsx";
import WelcomeText from "../WelcomeText.jsx";
import ProductsPreview from "../cmpnts-productPreview/ProductsPreview.jsx";
import Footer from "../Footer.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';
import WidthContext from '../../context/WidthContext.jsx';

const Homepage = () => {

  const { showLogin, showCart } = useContext(HeaderContext)
  const { windowWidth } = useContext(WidthContext)

  return (
    <>
      <MainHeader windowWidth={windowWidth} />
      {showLogin && <Login />}
      {showCart && <Cart />}
      {windowWidth > 768 && <ProductsNavBar />}
      {windowWidth > 768 && <ServicesNavBar />}
      {windowWidth <= 768 && <MobileNavBar />}
      <WelcomeText />
      <ProductsPreview />
      <Footer />
    </>
  );
};

export default Homepage;
