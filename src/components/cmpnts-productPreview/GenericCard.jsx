//React libraries and others
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

//Components
import { StarRating } from './ReviewList.jsx';

export const getImagePath = card => `../src/assets/img/${card.imgSrc}`;

export function truncateName(name) {
  return name.length > 20 ? name.substring(0, 17) + '...' : name;
}

// Generic Component to render the cards
const GenericCard = ({ card, productType, hideImg = false }) => {
  const cardName = truncateName(card.name);
  const imgPath = getImagePath(card);
  const imgClass = hideImg ? 'hidden' : 'toShow';
  return (
    <div>
      <Card>
        <div className='imgBoxContainer'>
          <Card.Img
            variant='top'
            src={imgPath}
            id='cardImgSrc'
            className={imgClass}
          />
        </div>
        <Card.Body id={productType === 'tours' ? 'serviceBody' : 'cardBody'}>
          <Card.Title id='card-title' className='cardNmePrice'>
            {cardName}
          </Card.Title>
        </Card.Body>
        <div className='cardPrice'>
          <div>
            <StarRating rating={card.ratingAvg} className='starsReview' />
            {/* <Card.Text className='rating'>({card.reviews.length})</Card.Text> */}
          </div>

          <span className='card-price'>{card.price}Є</span>
        </div>
      </Card>
    </div>
  );
};

export default GenericCard;

GenericCard.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    ratingAvg: PropTypes.number,
    reviews: PropTypes.array,
    length: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  productType: PropTypes.oneOf(['books', 'pc-parts', 'video-games', 'tours'])
    .isRequired, // insert the productType
  toursType: PropTypes.oneOf(['sightseeing', 'museum', 'hiking']),
  hideImg: PropTypes.bool,
};
