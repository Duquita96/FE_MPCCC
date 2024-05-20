//react
import Slider from "react-slider";
import { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


//components
import BookM from '../cmpnts-productPreview/Book.jsx';
import VideoGameM from '../cmpnts-productPreview/VideoGames.jsx';
import PcPartM from '../cmpnts-productPreview/PcParts.jsx';
import TourM from '../cmpnts-productPreview/Tours.jsx';
import { ProductPreviewClick } from '../cmpnts-productPreview/ProductPreview-Click.jsx';
import { getTourImgPath } from '../cmpnts-productPreview/Tours.jsx';

//css
import "../../style/filter-page/ProductsPage.css";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const MIN = 0;
const MAX = 10000;


export const FilterPageCollection = ({ productType }) => {
  const [filterData, setProductsData] = useState([]);
  const [values, setValues] = useState([MIN, MAX]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [toursTypeFilter, setToursTypeFilter] = useState('');
  console.log('in export FilterPageCollection: currentFilter', currentFilter, 'toursTypeFilter: ', toursTypeFilter);

  const navigate = useNavigate();
  const changeFilter = (filterType, toursType = '') => {
    setCurrentFilter(filterType);
    setToursTypeFilter(toursType);
    navigate(`/filter-page/${filterType}`);
    console.log('in Change Filter: filterType: ', filterType, 'toursType: ', toursType);
  };

  const GoBack = () => {
    navigate(-1);
};

  useEffect(() => {
    if (productType) {
      setCurrentFilter(productType);
    }
  }, [productType]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/v1/books').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/tours').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/video-games').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/pc-parts').then(res => res.json())
    ]).then(([booksData, toursData, videoGamesData, pcPartsData]) => {

      console.log('Books:', booksData);
      console.log('Tours:', toursData);
      console.log('Video Games:', videoGamesData);
      console.log('PC Parts:', pcPartsData);

      // Combine and randomize the data
      const combinedData = [...booksData.data, ...toursData.data, ...videoGamesData.data, ...pcPartsData.data];
      const randomizedData = combinedData.sort(() => 0.5 - Math.random());
      setProductsData(randomizedData);
    }).catch(err => console.log(err));
  }, []);

  const filteredData = filterData
    .filter(item => item.price >= values[0] && item.price <= values[1])
    .filter(item => {
      if (currentFilter === 'all-products') {
        // Exclude 'tours' from filter 'all-products'
        return item.productType !== 'tours' && item.productType !== 'TOURS';
      } else if (currentFilter === 'all') {
        // Include all the products and services
        return true;
      } else {
        // Specific Filters
        return item.productType.toUpperCase() === currentFilter.toUpperCase();
      }
    })
    .filter(item => !toursTypeFilter || (item.toursType && item.toursType.toUpperCase() === toursTypeFilter.toUpperCase()));


  return (
    <div id='allProducts-container'>
      <div className="ProductsPage_Filter">
{/*       <NavLink to={'/'} className="filter-GoBackButton">Go back</NavLink> */}
      <button className='goBack-button'  id="ButtonFilter-GoBack" onClick={GoBack}>
                        <BsFillArrowLeftSquareFill id='arrowIcon' />
                    </button>
        <li className="filterPointer" onClick={() => changeFilter('all')}>All Products and Services</li>
        <h3>Filter</h3>
        <br></br>
        <div>
          <h3>Products</h3>
          <ul>
            <li className="filterPointer" onClick={() => changeFilter('all-products')}>All Products</li>
            <li className="filterPointer" onClick={() => changeFilter('book')}>Books</li>
            <li className="filterPointer" onClick={() => changeFilter('pc_part')}>PC Parts</li>
            {/*    <li className="filterPointer" onClick={() => changeFilter('tours')}>Tours</li> */}
            <li className="filterPointer" onClick={() => changeFilter('video_game')}>Video Games</li>
          </ul>
        </div>

        <div>
          <br />
          <div className="ProductPagePriceSliderbox">
            <h3 className="PriceH3">Price</h3>
            <div className={"values"}>€{values[0]} - €{values[1]}</div>

            <Slider className={"slider"}
              onChange={setValues}
              value={values}
              min={MIN}
              max={MAX} />
          </div>

        </div>

        <div>
          <br />
          <h4>Services</h4>

          <ul>
            <li className="filterPointer" onClick={() => changeFilter('tours')}>All Tours</li>
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
            <div className='card-container pointer'>
              {card.productType.toLowerCase() === 'book' && <BookM card={card} />}
              {card.productType.toLowerCase() === 'video_game' && <VideoGameM card={card} />}
              {card.productType.toLowerCase() === 'pc_part' && <PcPartM card={card} />}
              {card.productType.toLowerCase() === 'tours' && <TourM card={card} imgPath={getTourImgPath(card)} hideImg={false} className="toShow" />}

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
};