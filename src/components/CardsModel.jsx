//import React from 'react';
import Card from 'react-bootstrap/Card';
import '../style/CardsSectionStyle.css'
import { booksData } from './data/book.js'


export const CardModel = () => {


  return (
    <div>
      <div id='cards_model'>
        {booksData.data.map((card, index) => (
          <div key={index} className='card-container'>
            <Card> {/*  id='card_model'> */}
              <Card.Img variant="top" src={`../src/assets/img/${card.imgSrc}`} alt={card.title} id="cardImgSrc" />
              <Card.Body id="cardBody">
                <Card.Title>{card.title} {card.price}</Card.Title>
              </Card.Body>
            </Card>

          </div>

        ))}
      </div>

    </div>


  );
};

export default CardModel;
