import CardsCollection from "./CardsCollection";
import '../style/CardsSectionStyle.css'

export const ProductPreview = () => {
    return (
        <div id="cards-section"/*  className='box-style' */>
            <CardsCollection />
        </div>
    );
}

export default ProductPreview;