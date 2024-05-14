import CardM from './Card.jsx';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';
import { useEffect, useState } from 'react';

export const CardsCollection = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/books')
      .then(res => res.json())
      .then(data => {
        const randomizedData = data.data.sort(() => 0.5 - Math.random()); // Randomize the data
        setProductsData(randomizedData);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <div id='cards-collection'>
        {productsData.map((card, index) => (
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

export default CardsCollection;
