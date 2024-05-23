import PcPartsM from './PcParts.jsx';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';
import { useEffect, useState } from 'react';

export const PcPartsCollection = () => {
  const [pcPartsData, setPcPartsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/pc-parts')
      .then(res => res.json())
      .then(data => {
        const randomSix = data.data.sort(() => 0.5 - Math.random()).slice(0, 6); // Take six random elements
        setPcPartsData(randomSix);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <div id="pcParts-collection" className="cards-container">
        {pcPartsData.map((card, index) => (
          <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
            <div className='carrousell pointer'>
              <PcPartsM card={card} /> {/* Pass the object as property */}
            </div>
          </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default PcPartsCollection;
