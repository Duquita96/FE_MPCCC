import VideoGamesM from './VideoGames.jsx';
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
      <div id='cards-collection'>
      <ul id="cards-container">
        {videoGamesData.map((card, index) => (
          <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
            <div className='card-container pointer'>
              <VideoGamesM card={card} /> {/* Pass the object as property */}
            </div>
          </ProductPreviewClick>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoGamesCollection;
