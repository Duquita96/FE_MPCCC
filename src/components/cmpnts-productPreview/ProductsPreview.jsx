import CardsCollection from "./CardsCollection.jsx";
import '../../style/ProductsPreview.css'
import ToursCollection from './ToursCollection.jsx'
/* import {Link} from 'react-router-dom'; */


export const ProductsPreview = () => {

    return (
        <div id="products-preview-section">
            <ToursCollection />
            <CardsCollection />
            <button>
{/*   <Link to="/filter-page">View More</Link> */}
</button>
        </div>
    );
}

export default ProductsPreview;

