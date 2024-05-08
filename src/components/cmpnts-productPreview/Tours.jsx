import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import {StarRating } from './ReviewList.jsx'

const ToursM = ({ card }) => { //recibe the object as an argument

  return (
    <div>
      <Card>
        <Card.Body id="serviceBody">
          <Card.Title>{card.name} </Card.Title>
          <Card.Text>{card.price}</Card.Text>
          <StarRating rating={card.rating} />
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
    rating: PropTypes.number, 
  }).isRequired,
};
