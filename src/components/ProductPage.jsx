import ProductPageFilter from "../components/ProductPage/ProductPageFilter.jsx";
import ProductPageProducts from "../components/ProductPage/ProductPageProducts.jsx";
// import MainHeader from "./MainHeader.jsx";
import Footer from "../components/Footer.jsx";
import "../style/ProductPage/ProductPage.css";


const ProductPage = () => {
    return (
        <section className="needflex">
            <ProductPageFilter />
            <ProductPageProducts />
            <Footer />
        </section>
    );
};

export default ProductPage;