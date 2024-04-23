import ProductPageFilter from "./ProductPageFilter.jsx";
import ProductPageProducts from "./ProductPageProducts.jsx";
import "../style/ProductPage.css";


const ProductPage = () => {
    return (
        <section className="needflexin">
            <ProductPageFilter/>
            <ProductPageProducts/>
        </section>
    );
};

export default ProductPage;