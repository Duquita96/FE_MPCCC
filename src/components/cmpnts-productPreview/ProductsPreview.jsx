import CardsCollection from "./CardsCollection.jsx";
import '../../style/ProductsPreview.css'
import ToursCollection from './ToursCollection.jsx'


export const ProductsPreview = () => {

    return (
        <div id="products-preview-section">
            <ToursCollection />
            <CardsCollection />

        </div>
    );
}

export default ProductsPreview;

