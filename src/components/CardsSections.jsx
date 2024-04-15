import React from 'react';
import Card from 'react-bootstrap/Card';
import '../style/CardsSectionStyle.css'

const CardsSection = () => {
  const cardsData = [
    {
      name: 'Card 1',
      price: '$19.99',
      description: 'This is the first card.',
      imageSrc: '../src/img/book.jpg', // Ruta de la imagen
    },
    {
      name: 'Card 2',
      price: '$29.99',
      description: 'This is the second card.',
      imageSrc: '../src/img/book.jpg', // Ruta de la imagen
    },
    {
      name: 'Card 3',
      price: '$39.99',
      description: 'This is the third card.',
      imageSrc: '../src/img/book.jpg', // Ruta de la imagen
    },
    {
      name: 'Card 4',
      price: '$49.99',
      description: 'This is the fourth card.',
      imageSrc: '../src/img/book.jpg', // Ruta de la imagen
    },
    {
      name: 'Card 5',
      price: '$59.99',
      description: 'This is the fifth card.',
      imageSrc: '../src/img/book.jpg', // Ruta de la imagen
    },
    {
      name: 'Card 6',
      price: '$69.99',
      description: 'This is the sixth card.',
      imageSrc: '../src/img/book.jpg', // Ruta de la imagen
    },
  ];


  return (
    <div className="cards-section">
      <div className="card-row">
        {cardsData.slice(0, 3).map((card, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.imageSrc} alt={card.name} />
            <Card.Body>
              <Card.Title>{card.name}{card.price}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="card-row">
        {cardsData.slice(3, 6).map((card, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.imageSrc} alt={card.name} />
            <Card.Body>
              <Card.Title>{card.name}{card.price}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;