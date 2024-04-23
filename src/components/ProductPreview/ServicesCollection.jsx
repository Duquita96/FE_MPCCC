import ServiceM from '../ProductPreview/Service.jsx';
import { toursData } from '../data/service.js';
import { useEffect, useState } from 'react';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';



export const ServicesCollection= () => {
  const [randomData, setRandomData] = useState([]);

  // Shuffle data
  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // change the actual element for the new one
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  useEffect(() => {
    setRandomData(shuffle(toursData.data).slice(0, 6)); // Shuffle the data and take the first one
  }, []);

  return (
    <div>
      <div id='service-collection'>
        {randomData.map((card, index) => (
          <ProductPreviewClick key={index} id={card.id}>
          <div className='service-container'>
            <ServiceM card={card} /> {/* Pass the object as property */}
          </div>
        </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default ServicesCollection;