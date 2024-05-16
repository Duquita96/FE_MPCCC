import { useEffect, useState } from 'react';
import BookM from '../cmpnts-productPreview/Book.jsx';
import VideoGameM from '../cmpnts-productPreview/VideoGames.jsx'; // Asegúrate de tener este componente
import PcPartM from '../cmpnts-productPreview/PcParts.jsx'; // Asegúrate de tener este componente
import TourM from '../cmpnts-productPreview/Tours.jsx'; // Asegúrate de tener este componente
import { ProductPreviewClick } from '../cmpnts-productPreview/ProductPreview-Click.jsx';
import { getTourImgPath } from '../cmpnts-productPreview/Tours.jsx';
import Slider from "react-slider";
import "../../style/filter-page/ProductsPage.css";

const MIN = 0;
const MAX = 1000;

export const FilterPageCollection = () => {
  const [filterData, setProductsData] = useState([]);
  const [values, setValues] = useState([MIN, MAX]);
  const [currentFilter, setCurrentFilter] = useState('all');


  // Función para cambiar el filtro actual
  const changeFilter = (filterType) => {
    setCurrentFilter(filterType);
  };

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

      // Combina y aleatoriza los datos
      const combinedData = [...booksData.data, ...toursData.data, ...videoGamesData.data, ...pcPartsData.data];
      const randomizedData = combinedData.sort(() => 0.5 - Math.random());
      setProductsData(randomizedData);
    }).catch(err => console.log(err));
  }, []);

   // Filtra los datos basados en el rango de precios y el tipo de producto
   const filteredData = filterData
   .filter(item => item.price >= values[0] && item.price <= values[1])
   .filter(item => currentFilter === 'all' || item.productType.toUpperCase() === currentFilter.toUpperCase());

  return (
    <div id='allProducts-container'>
      <div className="ProductsPage_Filter">
        <h3>Filter</h3>
        <br></br>
        <div>
          <h3>Products</h3>
          <ul>
            <li className="filterPointer"onClick={() => changeFilter('all')}>All</li>
            <li className="filterPointer"onClick={() => changeFilter('book')}>Books</li>
            <li className="filterPointer"onClick={() => changeFilter('pc_part')}>PC Parts</li>
            <li className="filterPointer"onClick={() => changeFilter('tours')}>Tours</li>
            <li className="filterPointer"onClick={() => changeFilter('video_game')}>Video Games</li>
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
      </div>


      <div id="filter-collection">
{filteredData.map((card, index) => (
  <ProductPreviewClick key={card._id} id={card._id} productType={card.productType}>
    <div className='card-container pointer'>
      {card.productType === 'book'|| card.productType === 'BOOK' && <BookM card={card} />}
      {card.productType === 'video_game' || card.productType === 'VIDEO_GAME' && <VideoGameM card={card} />}
      {card.productType === 'pc_part' || card.productType === 'PC_PART' && <PcPartM card={card} />}
      {card.productType === 'tours' && <TourM card={card} imgPath={getTourImgPath(card)} hideImg={false} className="toShow"/>}
    </div>
  </ProductPreviewClick>
))}




      </div>
    </div>
  );
};

export default FilterPageCollection;
