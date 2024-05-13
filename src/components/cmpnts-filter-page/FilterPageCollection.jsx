import CardM from '../cmpnts-productPreview/Card.jsx';
import { ProductPreviewClick } from '../cmpnts-productPreview/ProductPreview-Click.jsx';
import { useEffect, useState } from 'react';

export const FilterPageCollection = () => {
    const [filterData, setProductsData] = useState([]);
  
    useEffect(() => {
      // Fetch books data
      fetch('http://localhost:8000/api/v1/books')
        .then(res => res.json())
        .then(booksData => {
          // Add productType to each book
          const books = booksData.data.map(book => ({ ...book, productType: 'book' }));
    
          // Fetch tours data
          fetch('http://localhost:8000/api/v1/tours')
            .then(res => res.json())
            .then(toursData => {
              // Add productType to each tour
              const tours = toursData.data.map(tour => ({ ...tour, productType: 'tour' }));
    
              // Combine and randomize the data
              const combinedData = [...books, ...tours];
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
                <CardM card={card} />
              </div>
            </ProductPreviewClick>
          ))}
        </div>
      </div>
    );
  };
  
  export default FilterPageCollection;