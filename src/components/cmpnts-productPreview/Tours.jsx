import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { StarRating } from './ReviewList.jsx'


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



const TourM = ({ card, imgPath, hideImg }) => { //recibe the object as an argument

  //let a = true;

  function truncateName(name) {
    return name.length > 20 ? name.substring(0, 15) + '...' : name;
  }

  const cardName = truncateName(card.name);
  return (
    
      <Card>
        <div className='imgBoxContainer'>
          <Card.Img variant="top" src={imgPath} id="cardImgSrc" className={hideImg ? "hidden" : "toShow"}/>
        </div>
        <Card.Body id="serviceBody">
          <Card.Title id='card-title'>{cardName} </Card.Title>
          <Card.Text>{card.price}</Card.Text>
          <StarRating rating={card.rating} />
        </Card.Body>
      </Card>
   
  );
};

export default TourM;

TourM.propTypes = {
  card: PropTypes.shape({
    imgPath: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    a: PropTypes.bool,
  }).isRequired,
};
