import CardsCollection from "./CardsCollection.jsx";
import '../../style/ProductsPreview.css'
import ServicesCollection from './ServicesCollection.jsx'

export const ProductsPreview = () => {
    return (
        <div id="products-preview-section">
            <ServicesCollection />
            <CardsCollection />

        </div>
    );
}

export default ProductsPreview;