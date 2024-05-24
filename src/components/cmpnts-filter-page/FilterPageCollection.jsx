//react
import Slider from "react-slider";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


//components
import BookM from '../cmpnts-productPreview/Book.jsx';
import VideoGameM from '../cmpnts-productPreview/VideoGames.jsx';
import PcPartM from '../cmpnts-productPreview/PcParts.jsx';
import TourM from '../cmpnts-productPreview/Tours.jsx';
import { ProductPreviewClick } from '../cmpnts-productPreview/ProductPreview-Click.jsx';
import { getTourImgPath } from '../cmpnts-productPreview/Tours.jsx';
import { ToursTypeContext } from '../../context/TypesContext.jsx';
import { useContext } from 'react';

//css
import "../../style/filter-page/ProductsPage.css";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const MIN = 0;
const MAX = 10000;


export const FilterPageCollection = ({ productType, toursType }) => {
  const [filterData, setProductsData] = useState([]);
  const [values, setValues] = useState([MIN, MAX]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [toursTypeFilter, setToursTypeFilter] = useState('');
  const { setTourType } = useContext(ToursTypeContext);

  const navigate = useNavigate();
  const changeFilter = (filterType, toursType = '') => {
    setCurrentFilter(filterType);
    setToursTypeFilter(toursType); // Filter Tour Type
    setTourType(toursType); // Context TourType
    navigate(`/filter-page/${filterType}`);
  };

  const [priceRange, setPriceRange] = useState({
    range1: false,
    range2: false,
    range3: false,
  });

  const handleCheckboxChange = (event) => {
    setPriceRange({
      ...priceRange,
      [event.target.name]: event.target.checked,
    });
  };

  const GoBack = () => {
    setTourType('');
    navigate("/");
  };

  useEffect(() => {
    if (productType) {
      setCurrentFilter(productType);
    }
    if (productType) {
      setToursTypeFilter(toursType);
    }
  }, [productType, toursType]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/v1/books').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/tours').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/video-games').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/pc-parts').then(res => res.json())
    ]).then(([booksData, toursData, videoGamesData, pcPartsData]) => {

      // Combine and randomize the data
      const combinedData = [...booksData.data, ...toursData.data, ...videoGamesData.data, ...pcPartsData.data];
      const randomizedData = combinedData.sort(() => 0.5 - Math.random());
      setProductsData(randomizedData);
    }).catch(err => console.log(err));
  }, []);

  const filteredData = filterData
    /*     .filter(item => item.price >= values[0] && item.price <= values[1]) */
    .filter(item => {

      if (currentFilter === 'all-products') {
        //exclude tours from the filter
        console.log("All Products was clicked, value is: ", currentFilter)
        return item.productType !== 'tours';
      } if (currentFilter === 'all') {
        //include All items
        console.log("All Products and Services was clicked, value is: ", currentFilter)
        return true;
      } else {
        // Specific Filters
        console.log("All tours was clicked, value is: ", currentFilter)
        return item.productType === currentFilter;
      }
    })
    .filter(item => !toursTypeFilter || (item.toursType === toursTypeFilter))
    .filter(item => {
    if (!priceRange.range1 && !priceRange.range2 && !priceRange.range3) {
      return true;
    }
    if (priceRange.range1 && item.price >= 1 && item.price <= 50) {
      return true;
    } else if (priceRange.range2 && item.price >= 51 && item.price <= 100) {
      return true;
    } else if (priceRange.range3 && item.price >= 101 && item.price <= 200) {
      return true;
    }
    return false;
    })
  
  
    /*     .filter(item => {
        if (item.price >= 1 && item.price <= 50) {
          return true;
        } else if (item.price >= 51 && item.price <= 100) {
          return true;
        } else if (item.price >= 101 && item.price <= 200) {
          return true;
        } else if (item.price >= 201 && item.price <= 300) {
          return true;
        } else {
          return item.price >= 301;
        }
      }); */


  return (
    <div id='allProducts-container'>
      <div className="ProductsPage_Filter">
        <button className='goBack-button' id="ButtonFilter-GoBack" onClick={GoBack}>
          <BsFillArrowLeftSquareFill id='arrowIcon' />
        </button>
        <li className="filterPointer" onClick={() => changeFilter('all')}>All Products and Services</li>
        <h3>Filter</h3>
        <br></br>
        <div>
          <h3>Products</h3>
          <ul>
            <li className="filterPointer" onClick={() => changeFilter('all-products')}>All Products</li>
            <li className="filterPointer" onClick={() => changeFilter('books')}>Books</li>
            <li className="filterPointer" onClick={() => changeFilter('pc-parts')}>PC Parts</li>
            <li className="filterPointer" onClick={() => changeFilter('video-games')}>Video Games</li>
          </ul>
        </div>

        <div>
          <br />
          <div className="ProductPagePriceSliderbox">
            <h3 className="PriceH3">Price</h3>
            {/* <div className={"values"}>€{values[0]} - €{values[1]}</div>

            <Slider className={"slider"}
              onChange={setValues}
              value={values}
              min={MIN}
              max={MAX} /> */}
              <label>
          <input
            type="checkbox"
            name="range1"
            checked={priceRange.range1}
            onChange={handleCheckboxChange}
          />
          €1 - €50
        </label>
        <label>
          <input
            type="checkbox"
            name="range2"
            checked={priceRange.range2}
            onChange={handleCheckboxChange}
          />
          €51 - €100
        </label>
        <label>
          <input
            type="checkbox"
            name="range3"
            checked={priceRange.range3}
            onChange={handleCheckboxChange}
          />
          €101 - €200
        </label>
          </div>

        </div>

        <div>
          <br />
          <h4>Services</h4>

          <ul>
            <li className="filterPointer" onClick={() => changeFilter('tours', '')}>All Tours</li>
            <br />
            <li className="filterPointer" onClick={() => changeFilter('tours', 'sightseeing')}>Sightseeing</li>
            <li className="filterPointer" onClick={() => changeFilter('tours', 'hiking')}>Hiking</li>
            <li className="filterPointer" onClick={() => changeFilter('tours', 'museum')}>Museum</li>
          </ul>
        </div>

        <br></br>
      </div>


      <div id="filter-collection">
        {filteredData.map((card) => (
          /* Llena el contenido de las tarjetas "card" que se han filtrado */
          <ProductPreviewClick key={card._id} id={card._id} productType={card.productType}>
            <div className='carrousell pointer'>
              {card.productType === 'books' && <BookM card={card} />}
              {card.productType === 'video-games' && <VideoGameM card={card} />}
              {card.productType === 'pc-parts' && <PcPartM card={card} />}
              {card.productType === 'tours' && <TourM card={card} imgPath={getTourImgPath(card)} hideImg={false} className="toShow" />}

            </div>
          </ProductPreviewClick>
        ))}




      </div>
    </div>
  );
};

export default FilterPageCollection;


FilterPageCollection.propTypes = {
  productType: PropTypes.string,
  toursType: PropTypes.string,
};