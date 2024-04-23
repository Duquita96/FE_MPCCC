import { useState } from "react";
import PriceSlider from "./PriceSlider.jsx";
const ProductPageFilter = () => {

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
                <h4>Preise</h4>
                <ul>
                    <li>0 - 10</li>
                    <li>10- 50</li>
                    <li>50 - 100</li>
                    <li>100 - 500</li>
                    <li>500 - 1000</li>
                </ul>
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
            <PriceSlider />
        </section>
    );
};

export default ProductPageFilter;
