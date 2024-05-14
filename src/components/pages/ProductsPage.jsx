import { useContext } from 'react';
import { useState } from 'react'

// Style Import
import "../../style/ProductsPage/ProductsPage.css";

// Import Components
import MainHeader from "../MainHeader.jsx";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import MobileNavBar from "../../components/cmpnts-homepage-navbars/MobileNavBar.jsx";
import ProductPageFilter from "../ProductsPage/ProductsPageFilter.jsx";
import ProductPageProducts from "../ProductsPage/ProductsPageCards.jsx";
import Footer from "../Footer.jsx";
import WidthContext from '../../context/WidthContext.jsx';


const ProductPage = () => {

    const {windowWidth} = useContext(WidthContext)

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
        <section>
            <MainHeader toggleFunctions={toggleFunctions} windowWidth={windowWidth} />
            {showLogin && <Login />}
            {showCart && <Cart />}
            {windowWidth <= 768 && <MobileNavBar toggleFunctions={toggleFunctions} />}
            <div className="needflex">
                <ProductPageFilter />
                <ProductPageProducts />
            </div>
            <Footer />
        </section>
    );
};

export default ProductPage;