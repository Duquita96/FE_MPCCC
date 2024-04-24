import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const ServiceM = ({ card }) => { //recibe the object as an argument
  
  return (
    <div>
      <Card>
        <Card.Body id="serviceBody">
          <Card.Title>{card.name} {card.price}</Card.Title>
          <Card.Text>Duration: {card.duration}h</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceM;

ServiceM.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};