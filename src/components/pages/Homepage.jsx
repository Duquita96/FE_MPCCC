import { useContext } from 'react';
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import ProductsNavBar from "../cmpnts-homepage-navbars/ProductsNavBar.jsx";
import ToursNavBar from "../cmpnts-homepage-navbars/ToursNavBar.jsx";
import MobileNavBar from "../cmpnts-homepage-navbars/MobileNavBar.jsx";
import ProductsPreview from "../cmpnts-productPreview/ProductsPreview.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';
import WidthContext from '../../context/WidthContext.jsx';
import HeroSection from '../HeroSection.jsx';
import PageWrapper from '../PageWrapper.jsx';


/** Contains all the components related to the homepage */
const Homepage = () => {

  const { showLogin, showCart } = useContext(HeaderContext)
  const { windowWidth } = useContext(WidthContext)

  return (
      <PageWrapper >
        {showLogin && <Login />}
        {showCart && <Cart />}
        {windowWidth > 768 && <ProductsNavBar />}
        {windowWidth > 768 && <ToursNavBar />}
        {windowWidth <= 768 && <MobileNavBar  />}
        <HeroSection />
        <ProductsPreview />
      </PageWrapper>
  );
};

export default Homepage;
