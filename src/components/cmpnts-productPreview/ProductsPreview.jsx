import BooksCollection from "./BooksCollection.jsx";
import '../../style/ProductsPreview.css'
import ToursCollection from './ToursCollection.jsx'
import PcPartsCollection from './PcPartsCollection.jsx';
import VideoGamesCollection from './VideoGamesCollection.jsx'
/* import {Link} from 'react-router-dom'; */


export const ProductsPreview = () => {

    return (
        <div id="products-preview-section">
            <ToursCollection />
            <BooksCollection />
            <PcPartsCollection/>
            <VideoGamesCollection/>


        </div>
    );
}

export default ProductsPreview;

