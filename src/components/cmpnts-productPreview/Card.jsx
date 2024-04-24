import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';


const CardM = ({ card }) => { //recibe the object as an argument
  
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={`../src/assets/img/${card.imgSrc}`} alt={card.title} id="cardImgSrc" />
        <Card.Body id="cardBody">
          <Card.Title>{card.title} {card.price}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );

};

export default CardM;

CardM.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
