import PriceSlider from "./PriceSlider.jsx";
import "../../style/ProductsPage/ProductPageFilter.css";


const FilterMenu = () => {
    return (
        <section className="ProductsPage_Filter">
            <h3>Filter</h3>
            <br></br>
            <div>
                <h3>Products</h3>
                <ul>
                    <li>Books</li>
                    <li>GamingParts</li>
                    <li>Tours</li>
                    <li>Games</li>
                </ul>
            </div>

            <div>
                <br></br>
                <PriceSlider />
            </div>

            <div>
                <br></br>
                <h4>Genre</h4>
                <ul>
                    <li>Adventure</li>
                    <li>Horror</li>
                    <li>Romance</li>
                    <li>Thriller</li>
                    <li>Science Fiction</li>
                </ul>
            </div>
            <br></br>
        </section>
    );
};

export default FilterMenu;
