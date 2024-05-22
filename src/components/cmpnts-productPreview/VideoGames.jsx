import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import {StarRating } from './ReviewList.jsx'


export const getVideoGamesImgPath = (card) => `../src/assets/img/${card.imgSrc}`;

const VideoGamesM = ({ card }) => { //recibe the object as an argument

  function truncateName(name) {
    return name.length > 20 ? name.substring(0, 18) + '...' : name;
  }

  const cardName = truncateName(card.name);

  const imgPath = getVideoGamesImgPath(card);

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imgPath} alt={card.name} id="cardImgSrc" />
        <Card.Body id="cardBody">
          <Card.Title>{cardName} {card.price}</Card.Title>
          <StarRating rating={card.ratings} />
       {/*    {console.log("card.review", card.review)} */}
        </Card.Body>
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
  }).isRequired,
};
