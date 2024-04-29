import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const ToursM = ({ card }) => { //recibe the object as an argument
  
  return (
    <div>
      <Card>
        <Card.Body id="serviceBody">
          <Card.Title>{card.name} </Card.Title>
          {/* <Card.Text>{card.price} Duration: {card.duration}h</Card.Text> */}
          <Card.Text>{card.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToursM;

ToursM.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
/*     duration: PropTypes.number.isRequired, */
  }).isRequired,
};