import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';


export const getImgPath = (card) => `../src/assets/img/${card.imgSrc}`;

const CardM = ({ card }) => { //recibe the object as an argument

  const imgPath = getImgPath(card);

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imgPath} alt={card.name} id="cardImgSrc" />
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
