import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import {StarRating } from './ReviewList.jsx'


export const getPcPartsImgPath = (card) => `../src/assets/img/${card.imgSrc}`;

const PcPartM = ({ card }) => { //recibe the object as an argument

  const imgPath = getPcPartsImgPath(card);

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imgPath} alt={card.name} id="cardImgSrc" />
        <Card.Body id="cardBody">
          <Card.Title>{card.name} {card.price}</Card.Title>
          <StarRating rating={card.rating} />
        </Card.Body>
      </Card>
    </div>
  );

};

export default PcPartM;


PcPartM.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number, 
  }).isRequired,
};
