////React libraries and others
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

//Components
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import FilterPageCollection from "../cmpnts-filter-page/FilterPageCollection.jsx";
import MobileNavBar from "../../components/cmpnts-homepage-navbars/MobileNavBar.jsx";
import { HeaderContext } from '../../context/HeaderContextProvider.jsx';
import { WidthContext } from '../../context/WidthContextProvider.jsx';
import PageWrapper from '../PageWrapper.jsx';
import {ToursTypeContext} from '../../context/TypesContext.jsx';

//CSS
import "../../style/ProductsPage.css";

const AllProducts = () => {
  const { productType } = useParams();
  const { showLogin, showCart } = useContext(HeaderContext)
  const { windowWidth } = useContext(WidthContext)
  const { tourType } = useContext(ToursTypeContext);

    return (
      <PageWrapper >
          {showLogin && <Login />}
          {showCart && <Cart />}
          {windowWidth <= 768 && <MobileNavBar />}
          <div className="needflex">
              <FilterPageCollection productType={productType} toursType={tourType}/>
          </div>
        </PageWrapper>
    );
};

export default AllProducts;