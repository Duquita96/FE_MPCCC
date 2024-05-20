import { useContext } from 'react';
import { useParams } from 'react-router-dom';

// Style Import
import "../../style/filter-page/ProductsPage.css";

// Import Components
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import FilterPageCollection from "../cmpnts-filter-page/FilterPageCollection.jsx";
import MobileNavBar from "../../components/cmpnts-homepage-navbars/MobileNavBar.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';
import WidthContext from '../../context/WidthContext.jsx';
import PageWrapper from '../PageWrapper.jsx';
import {ToursTypeContext} from '../../context/TypesContext.jsx';


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