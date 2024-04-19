import Card from 'react-bootstrap/Card';

const CardM = ({ card }) => { // Recibe el objeto card como argumento
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