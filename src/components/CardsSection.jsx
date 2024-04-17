import CardsModel from "./CardsModel";
import '../style/CardsSectionStyle.css'

export const CardsSection = () => {
    return (
        <div id="cards-section"/*  className='box-style' */>
            <CardsModel />
        </div>
    );
}

export default CardsSection;