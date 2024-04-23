import CardM from './Card.jsx';
import { booksData } from '../data/book.js';



export const CardsCollection= () => {
  return (
    <div>
      <div id='cards-collection'>
        {booksData.data.map((card, index) => (
          <div key={index} className='card-container'>
            <CardM card={card} /> {/* Pass the object as property */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCollection;