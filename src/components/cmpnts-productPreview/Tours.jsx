import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import {StarRating } from './ReviewList.jsx'


export const getTourImgPath = (card) => {
  let imgPath;
  switch (card.toursType) {
    case 'HIKING':
      imgPath = '../src/assets/img/Hiking.jpeg';
      break;
    case 'MUSEUM':
      imgPath = '../src/assets/img/Museum.jpeg';
      break;
    case 'SIGHTSEEING':
      imgPath = '../src/assets/img/SightSeeing.jpeg';
      break;
    default:
      imgPath = card.imgPath;
  }
  return imgPath;
};



const TourM = ({ card }) => { //recibe the object as an argument

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

export default TourM;

TourM.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number, 
  }).isRequired,
};
