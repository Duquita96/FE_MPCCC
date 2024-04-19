import CardM from './Card.jsx'; // Importa el componente CardM
import { booksData } from './data/book.js';



export const CardsCollection= () => {
  return (
    <div>
      <div id='cards-collection'>
        {booksData.data.map((card, index) => (
          <div key={index} className='card-container'>
            <CardM card={card} /> {/* Pasa el objeto card como propiedad */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCollection;