import Slider from "react-slider";
import { useState } from "react";
import "../style/PriceSlider.css";

const MIN = 0;
const MAX = 10000;

const PriceSlider = () => {
    const [values, setValues] = useState([MIN, MAX]);
    console.log('values ', values);
    return (
        <div className="PriceSlider" >
            <div className="box">
                <h3>Price <span>Range</span></h3>
                <div className={"values"}>€{values[0]} - €{values[1]}</div>
                <small>
                    Current Range: {values[1] - values[0]};
                </small>

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