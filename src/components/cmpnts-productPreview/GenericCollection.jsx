//React libraries and others
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//Components
import GenericCard from './GenericCard.jsx';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';

export const GenericCollection = ({ productType, hideImg }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/v1/books').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/video-games').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/pc-parts').then(res => res.json()),
    ])
      .then(([booksData, videoGamesData, pcPartsData]) => {
        // Combine and randomize the data
        const combinedData = [
          ...booksData.data,
          ...videoGamesData.data,
          ...pcPartsData.data,
        ];
        const randomizedData = combinedData.sort(() => 0.5 - Math.random());
        setProductsData(randomizedData);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div>

      <div id={productType === 'tours' ? "service-collection" : "products-collection"} className="cards-container">
        {productsData.map((card, index) => (
          <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
            <div className={productType === 'tours' ? 'service-container pointer' : 'carrousell pointer'}>
              {['books', 'video-games', 'pc-parts',].includes(
                card.productType
              ) && (
                  <GenericCard
                    card={card}
                    productType={card.productType}
                    hideImg={hideImg} />

                )}
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