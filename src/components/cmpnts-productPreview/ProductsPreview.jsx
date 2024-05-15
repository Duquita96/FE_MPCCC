import BooksCollection from "./BooksCollection.jsx";
import '../../style/ProductsPreview.css'
import ToursCollection from './ToursCollection.jsx'


export const ProductsPreview = () => {

    return (
        <div id="products-preview-section">
            <ToursCollection />
            <BooksCollection />

        </div>
    );
}

export default ProductsPreview;

