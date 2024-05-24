import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { StarRating } from './ReviewList.jsx';

export const getImagePath = (card) => `../src/assets/img/${card.imgSrc}`;

export function truncateName(name) {
  return name.length > 40 ? name.substring(0, 18) + '...' : name;
}

// Componente genérico para manejar diferentes tipos de tarjetas
const GenericCard = ({ card, productType }) => {
  const cardName = truncateName(card.name);
  const imgPath = getImagePath(card, productType);

  return (
    <div>
      <Card>
        <div className='imgBoxContainer'>
          <Card.Img variant="top" src={imgPath} alt={card.name} id="cardImgSrc" />
        </div>
        <Card.Body id="cardBody">
          <Card.Title className='cardNmePrice'>“{cardName}” <span>{card.price}Є</span></Card.Title>
        </Card.Body>
        <StarRating rating={card.ratingAvg} className="PPstars" />
      </Card>
    </div>
  );
};

export default GenericCard;

GenericCard.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    ratingAvg: PropTypes.number,
  }).isRequired,
  productType: PropTypes.oneOf(['books', 'pc-parts', 'video-games']).isRequired, // Añade aquí más tipos si es necesario
};
