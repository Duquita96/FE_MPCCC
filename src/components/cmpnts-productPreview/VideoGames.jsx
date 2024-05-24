/* import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { StarRating } from './ReviewList.jsx'
import { truncateName } from './Book.jsx';


export const getVideoGamesImgPath = (card) => `../src/assets/img/${card.imgSrc}`;

const VideoGamesM = ({ card }) => { //recibe the object as an argument

  const cardName = truncateName(card.name);

  const imgPath = getVideoGamesImgPath(card);

  return (
    <div>
      <Card>
        <div className='imgBoxContainer'>
          <Card.Img variant="top" src={imgPath} alt={card.name} id="cardImgSrc" />
        </div>
        <Card.Body id="cardBody">
          <Card.Title className='cardNmePrice'>&ldquo;{cardName}&rdquo; <span>{card.price}Є</span></Card.Title>
        </Card.Body>
        <StarRating rating={card.ratingAvg} className="PPstars" />
      </Card>
    </div>
  );

};

export default VideoGamesM;


VideoGamesM.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ratings: PropTypes.number,
    ratingAvg: PropTypes.number,
  }).isRequired,
};
 */