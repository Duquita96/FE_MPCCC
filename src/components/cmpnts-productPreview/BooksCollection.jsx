import { useEffect, useState } from 'react';
import GenericCard from './GenericCard'; // Asegúrate de que la ruta sea correcta
import { ProductPreviewClick } from './ProductPreview-Click.jsx';

export const BooksCollection = () => {
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
      <div id='books-collection' className="cards-container">
        {productsData.map((card, index) => (
          <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
            <div className='carrousell pointer'>
              <GenericCard card={card} productType="books" /> {/* Utiliza GenericCard aquí */}
            </div>
          </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default BooksCollection;
