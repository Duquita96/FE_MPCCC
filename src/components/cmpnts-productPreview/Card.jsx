import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';


const CardM = ({ card }) => { //recibe the object as an argument
  
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={`../src/assets/img/${card.imgSrc}`} alt={card.name} id="cardImgSrc" />
        <Card.Body id="cardBody">
          <Card.Title>{card.name} {card.price}</Card.Title>
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
  }).isRequired,
};
