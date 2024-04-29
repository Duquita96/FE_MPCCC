import CardM from './Card.jsx';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';
import { useEffect, useState } from 'react'

export const CardsCollection = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/books')
    // this path needs to be changed to /products/<name of the collection>
      .then(res => res.json())
      .then(productsData => setProductsData(productsData.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div id='cards-collection'>
        {productsData.map((card, index) => (
          <ProductPreviewClick key={index} id={card._id} productType = 'book'>
        {/* pasarle la variable de tipo correspondiente (en este caso books)*/}
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

// import CardM from './Card.jsx';
// import { ProductPreviewClick } from './ProductPreview-Click.jsx';
// import PropTypes from 'prop-types';

// export const CardsCollection = ({ booksData }) => {
//   return (
//     <div>
//       <div id='cards-collection'>
//         {booksData && booksData.map((card, index) => (
//           <ProductPreviewClick key={index} id={card._id}>
//             <div className='card-container pointer'>
//               <CardM card={card} /> {/* Pass the object as property */}
//             </div>
//           </ProductPreviewClick>
//         ))}
//       </div>
//     </div>
//   );
// };

// CardsCollection.propTypes = {
//   booksData: PropTypes.array.isRequired,
// };

// export default CardsCollection;

