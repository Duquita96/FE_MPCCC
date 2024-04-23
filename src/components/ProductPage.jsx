
// Style Import
import "../style/ProductPage/ProductPage.css";

// Import Components
import ProductPageFilter from "./ProductPage/ProductPageFilter.jsx";
import ProductPageProducts from "./ProductPage/ProductPageProducts.jsx";
import Footer from "../components/Footer.jsx";

const ProductPage = () => {
    return (
        <section>
            <div className="needflex">
                <ProductPageFilter />
                <ProductPageProducts />
            </div>
            <Footer />
        </section>
    );
};

export default ProductPage;