//React libraries and others
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//Components
import GenericCard from './GenericCard.jsx';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';

export const GenericCollection = ({ productType, apiEndpoint, hideImg }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(apiEndpoint)
      .then(res => res.json())
      .then(data => {
        const randomSix = data.data.sort(() => 0.5 - Math.random()).slice(0, 6); // Take six random elements
        setProductData(randomSix);
      })
      .catch(err => console.log(err))
  }, [apiEndpoint]);

  return (
    <div>
        
      <div id={productType === 'tours' ? "service-collection" : "products-collection"} className="cards-container">
        {productData.map((card, index) => (
          <ProductPreviewClick key={index} id={card._id} productType={card.productType}>   
             <div className={productType === 'tours' ? 'service-container pointer' : 'carrousell pointer'}>
              <GenericCard card={card} productType={productType} hideImg={hideImg}/>
            </div>
          </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default GenericCollection;


GenericCollection.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  productType: PropTypes.oneOf(['books', 'pc-parts', 'video-games', 'tours']).isRequired, // insert the productType
  toursType: PropTypes.oneOf(['sightseeing', 'museum', 'hiking']),
  hideImg: PropTypes.bool,
};