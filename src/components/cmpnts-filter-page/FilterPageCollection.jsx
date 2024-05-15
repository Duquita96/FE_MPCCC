// import CardM from '../cmpnts-productPreview/Card.jsx';

// import { ProductPreviewClick } from '../cmpnts-productPreview/ProductPreview-Click.jsx';
// import { useEffect, useState } from 'react';

// export const FilterPageCollection = () => {
//     const [filterData, setProductsData] = useState([]);



//     useEffect(() => {
//       // Fetch books data
//       fetch('http://localhost:8000/api/v1/books')
//         .then(res => res.json())
//         .then(booksData => {
//           // Fetch tours data
//           fetch('http://localhost:8000/api/v1/tours')
//             .then(res => res.json())
//             .then(toursData => {
//               // Combine and randomize the data
//               const combinedData = [...booksData.data, ...toursData.data];
//               const randomizedData = combinedData.sort(() => 0.5 - Math.random());
//               setProductsData(randomizedData);
//             })
//             .catch(err => console.log(err));
//         })
//         .catch(err => console.log(err));
//     }, []);

//     return (
//       <div>
//         <div id="filter-collection">
//           {filterData.map((card, index) => (
//             <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
//               <div className='card-container pointer'>
//                 <CardM card={card} />
//               </div>
//             </ProductPreviewClick>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default FilterPageCollection;

import BookM from '../cmpnts-productPreview/Book.jsx';
import { ProductPreviewClick } from '../cmpnts-productPreview/ProductPreview-Click.jsx';
import { useEffect, useState } from 'react';
import Slider from "react-slider";
import "../../style/filter-page/ProductsPage.css";

const MIN = 0;
const MAX = 1000;

export const FilterPageCollection = () => {
  const [filterData, setProductsData] = useState([]);
  const [values, setValues] = useState([MIN, MAX]);

  useEffect(() => {
    // Fetch books data
    fetch('http://localhost:8000/api/v1/books')
      .then(res => res.json())
      .then(booksData => {
        // Fetch tours data
        fetch('http://localhost:8000/api/v1/tours')
          .then(res => res.json())
          .then(toursData => {
            // Combine and randomize the data
            const combinedData = [...booksData.data, ...toursData.data];
            const randomizedData = combinedData.sort(() => 0.5 - Math.random());
            setProductsData(randomizedData);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  // Filter data based on price range
  const filteredData = filterData.filter(item => item.price >= values[0] && item.price <= values[1]);

  return (
    <div id='allProducts-container'>
      <div className="ProductsPage_Filter">
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
          <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
            <div className='card-container pointer'>
              <BookM card={card} />
            </div>
          </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default FilterPageCollection;
