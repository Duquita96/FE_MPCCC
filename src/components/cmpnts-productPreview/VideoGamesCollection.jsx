/* import VideoGamesM from './VideoGames.jsx'; */
import GenericCard from './GenericCard'; 
import { ProductPreviewClick } from './ProductPreview-Click.jsx';
import { useEffect, useState } from 'react';

export const VideoGamesCollection = () => {
  const [videoGamesData, setVideoGamesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/video-games')
      .then(res => res.json())
      .then(data => {
        const randomSix = data.data.sort(() => 0.5 - Math.random()).slice(0, 6); // Take six random elements
        setVideoGamesData(randomSix);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <div id="videoGames-collection" className="cards-container">
      {videoGamesData.map((card, index) => (
          <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
            <div className='carrousell pointer'>
              <GenericCard card={card} productType="video-games" /> {/* Utiliza GenericCard aquí */}
            </div>
          </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default VideoGamesCollection;
