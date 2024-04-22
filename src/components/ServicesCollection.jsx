import ServiceM from './Service.jsx';
import { toursData } from './data/service.js';
import { useEffect, useState } from 'react';



export const ServicesCollection= () => {
  const [randomData, setRandomData] = useState([]);

  // Función para mezclar los datos
  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // Mientras queden elementos para mezclar...
    while (0 !== currentIndex) {

      // Selecciona un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E intercambia con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  useEffect(() => {
    setRandomData(shuffle(toursData.data).slice(0, 6)); // Mezcla los datos y toma los primeros 5
  }, []);

  return (
    <div>
      <div id='service-collection'>
        {randomData.map((card, index) => (
          <div key={index} className='service-container'>
          <ServiceM card={card} /> {/* Pass the object as property */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCollection;