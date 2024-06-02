import { useContext } from 'react';
import Login from '../Login.jsx';
import Cart from '../Cart.jsx';
import ProductsNavBar from '../cmpnts-homepage-navbars/ProductsNavBar.jsx';
import MobileNavBar from '../cmpnts-homepage-navbars/MobileNavBar.jsx';
import ProductsPreview from '../cmpnts-productPreview/ProductsPreview.jsx';
import { HeaderContext } from '../../context/HeaderContextProvider.jsx';
import { WidthContext } from '../../context/WidthContextProvider.jsx';
import HeroSection from '../HeroSection.jsx';
import PageWrapper from '../PageWrapper.jsx';
// import { useResources } from '../../hooks/useResources.js';

/** Contains all the components related to the homepage */
const Homepage = () => {
  const { showLogin, showCart } = useContext(HeaderContext);
  const { windowWidth } = useContext(WidthContext);

  // const { data } = useResources('/resources/list');
  // console.log(data.data);

  return (
    <PageWrapper>
      {showLogin && <Login />}
      {showCart && <Cart />}
      {windowWidth > 768 && <ProductsNavBar />}
      {windowWidth <= 768 && <MobileNavBar />}
      <HeroSection />
      {windowWidth <= 768 && <ProductsNavBar />}
      <ProductsPreview />
    </PageWrapper>
  );
};

export default Homepage;
