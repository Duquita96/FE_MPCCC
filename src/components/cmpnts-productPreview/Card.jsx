import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import {StarRating } from './ReviewList.jsx'


export const getImgPath = (card) => `../src/assets/img/${card.imgSrc}`;

const CardM = ({ card }) => { //recibe the object as an argument

  const imgPath = getImgPath(card);

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imgPath} alt={card.name} id="cardImgSrc" />
        <Card.Body id="cardBody">
          <Card.Title>{card.name} {card.price}</Card.Title>
          <StarRating rating={card.rating} />
       {/*    {console.log("card.review", card.review)} */}
        </Card.Body>
      </Card>
    </div>
  );

};

export default CardM;


CardM.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number, 
  }).isRequired,
};
