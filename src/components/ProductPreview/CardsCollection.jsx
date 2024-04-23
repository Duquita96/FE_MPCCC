import CardM from './Card.jsx';
import { booksData } from '../data/book.js';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';



export const CardsCollection = () => {

  return (
    <div>
      <div id='cards-collection'>
        {booksData.data.map((card, index) => (
          <ProductPreviewClick key={index} id={card.id}>
            <div className='card-container'>
              <CardM card={card} /> {/* Pass the object as property */}
            </div>
          </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default CardsCollection;