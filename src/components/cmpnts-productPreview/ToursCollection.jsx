import TourM from './Tours.jsx';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';
import { useEffect, useState } from 'react';

export const ToursCollection = () => {
  const [toursData, setToursData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/tours')
      .then(res => res.json())
      .then(data => {
        const randomSix = data.data.sort(() => 0.5 - Math.random()).slice(0, 6); // Take six random elements
        setToursData(randomSix);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <div id='service-collection'>
        {toursData.map((card, index) => (
          <ProductPreviewClick key={index} id={card._id} productType='tour'>
            <div className='service-container pointer'>
              <TourM card={card} /> {/* Pass the object as property */}
            </div>
          </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default ToursCollection;
