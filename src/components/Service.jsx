import Card from 'react-bootstrap/Card';

const ServiceM = ({ card }) => { //recibe the object as an argument
  
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={`../src/assets/img/${card.imgSrc}`} alt={card.name} id="cardImgSrc" />
        <Card.Body id="ServiceBody">
          <Card.Title>{card.name} {card.price}</Card.Title>
          <Card.Text>{card.duration}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceM;