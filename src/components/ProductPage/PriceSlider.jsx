// Import Dependencies
import Slider from "react-slider";
import { useState } from "react";

// Import Style
import "../../style/ProductPage/PriceSlider.css";

const MIN = 0;
const MAX = 1000;

const PriceSlider = () => {
    const [values, setValues] = useState([MIN, MAX]);
    // console.log('values ', values);
    return (
        <div className="PriceSlider" >
            <div className="ProductPagePriceSliderbox">
                <h3 className="PriceH3">Price</h3>
                <div className={"values"}>€{values[0]} - €{values[1]}</div>

                <Slider className={"slider"}
                onChange={setValues}
                value={values}
                min = {MIN}
                max = {MAX}/>
            </div>
        </div>
    );
};

export default PriceSlider;