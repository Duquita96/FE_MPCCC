import Card from 'react-bootstrap/Card';

const ServiceM = ({ card }) => { //recibe the object as an argument
  
  return (
    <div>
      <Card>
        <Card.Body id="ServiceBody">
          <Card.Title>{card.name} {card.price}</Card.Title>
          <Card.Text>Duration: {card.duration}h</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceM;