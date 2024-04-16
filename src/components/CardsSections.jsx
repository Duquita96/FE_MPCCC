//import React from 'react';
import Card from 'react-bootstrap/Card';
import '../style/CardsSectionStyle.css'
/* import the date from BackEnd */

export const CardsSection = () => {
  /* insert in cardsData the data from the data base and change the params if it is needed */
  const cardsData = [
    {
      name: 'Card 1',
      price: '$19.99',
      description: 'This is the first card.',
      imageSrc: 'book.jpg', //Name+extension of the image
    },
    {
      name: 'Card 2',
      price: '$29.99',
      description: 'This is the second card.',
      imageSrc: 'book.jpg', // Name+extension of the image
    },
    {
      name: 'Card 3',
      price: '$39.99',
      description: 'This is the third card.',
      imageSrc: 'book.jpg', // Name+extension of the image
    },
    {
      name: 'Card 1',
      price: '$19.99',
      description: 'This is the first card.',
      imageSrc: 'book.jpg', //Name+extension of the image
    },
    {
      name: 'Card 2',
      price: '$29.99',
      description: 'This is the second card.',
      imageSrc: 'book.jpg', // Name+extension of the image
    },
    {
      name: 'Card 3',
      price: '$39.99',
      description: 'This is the third card.',
      imageSrc: 'book.jpg', // Name+extension of the image
    },
    {
      name: 'Card 1',
      price: '$19.99',
      description: 'This is the first card.',
      imageSrc: 'book.jpg', //Name+extension of the image
    },
    {
      name: 'Card 2',
      price: '$29.99',
      description: 'This is the second card.',
      imageSrc: 'book.jpg', // Name+extension of the image
    },
    {
      name: 'Card 3',
      price: '$39.99',
      description: 'This is the third card.',
      imageSrc: 'book.jpg', // Name+extension of the image
    }
  ];

  return (
    <div id="cards-section" className='box-style'>
      <div className="row box-style">
        {cardsData.map((card, index) => (
          <div key={index} >
            <Card>
              <Card.Img variant="top" src={`../src/assets/img/${card.imageSrc}`} alt={card.name} />
              <Card.Body>
                <Card.Title>{card.name} {card.price}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;


