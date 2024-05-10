// import "../../style/filter-page/ProductPageProducts.css";
// /* import CardsCollection from "../cmpnts-productPreview/CardsCollection"; */
// import CardM from '../cmpnts-productPreview/Card.jsx';




// const FilterPageCollection = () => {
//     return (
//         <div>

//             <div className="ProductCards">
//                 {/* <CardsCollection /> */}

//                 {/*             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div>
//             <div className="boxes"></div> */}
//             </div>
//         </div>
//     );
// };

// export default FilterPageCollection;



import CardM from '../cmpnts-productPreview/Card.jsx';
/* import ToursM from '../cmpnts-productPreview/Tours.jsx'; */
import { ProductPreviewClick } from '../cmpnts-productPreview/ProductPreview-Click.jsx';
import { useEffect, useState } from 'react';

export const FilterPageCollection = () => {
    const [filterData, setProductsData] = useState([]);
  
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
  
    return (
      <div>
        <div id="filter-collection">
          {filterData.map((card, index) => (
            <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
              <div className='card-container pointer'>
                <CardM card={card} /> {/* Pass the object as property */}
              </div>
            </ProductPreviewClick>
          ))}
        </div>
      </div>
    );
  };
  
  export default FilterPageCollection;