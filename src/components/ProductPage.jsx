import { useState } from 'react'

// Style Import
import "../style/ProductPage/ProductPage.css";

// Import Components
import MainHeader from "./MainHeader";
import Login from "./Login";
import Cart from "./Cart";
import MobileNavBar from "./MobileNavBar";
import ProductPageFilter from "./ProductPage/ProductPageFilter.jsx";
import ProductPageProducts from "./ProductPage/ProductPageProducts.jsx";
import Footer from "../components/Footer.jsx";


const ProductPage = ({windowWidth}) => {

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