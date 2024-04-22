import CardsCollection from "./CardsCollection";
import '../style/CardsSectionStyle.css'
import ServicesCollection from '../components/ServicesCollection.jsx'

export const ProductPreview = () => {
    return (
        <div id="cards-section">
            <ServicesCollection />
            <CardsCollection />

        </div>
    );
}

export default ProductPreview;