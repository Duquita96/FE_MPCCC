import { useContext } from 'react';
import MainHeader from "../MainHeader.jsx";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import ProductsNavBar from "../ProductsNavBar.jsx";
import ToursNavBar from "../ToursNavBar.jsx";
import MobileNavBar from "../MobileNavBar.jsx";
import ProductsPreview from "../cmpnts-productPreview/ProductsPreview.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';
import WidthContext from '../../context/WidthContext.jsx';
import HeroSection from '../HeroSection.jsx';
import TestFooter from '../TestFooter.jsx';

/** Contains all the components related to the homepage */
const Homepage = () => {

  const { showLogin, showCart } = useContext(HeaderContext)
  const { windowWidth } = useContext(WidthContext)

  return (
    <>
      <MainHeader windowWidth={windowWidth} />
      {showLogin && <Login />}
      {showCart && <Cart />}
      {windowWidth > 768 && <ProductsNavBar />}
      {windowWidth > 768 && <ToursNavBar />}
      {windowWidth <= 768 && <MobileNavBar  />}
      <HeroSection />
      {/* <WelcomeText /> */}
      <ProductsPreview />
      {/* <Footer /> */}
      <TestFooter />
    </>
  );
};

export default Homepage;
