import CardsCollection from "./CardsCollection";
import '../../style/ProductsPreview.css'
import ServicesCollection from './ServicesCollection.jsx'

export const ProductPreview = () => {
    return (
        <div id="products-preview-section">
            <ServicesCollection />
            <CardsCollection />

        </div>
    );
}

export default ProductPreview;