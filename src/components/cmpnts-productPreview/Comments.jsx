//Comments.jsx
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//css
import '../../style/ReviewForm.css';

function Comments({productType}) {
    const [reviews, setReviews] = useState([]);
/*     const [productType, setProductType] = useState(''); */
    const { id } = useParams();

    /* PARCHE para Coexistir con el bug de backend */
    let productRoute;
    
    switch (productType) {
        case "book":
            productRoute = 'books';
            break
        case "video_game":
          productRoute = 'video-games';
          break
        case "pc_part":
          productRoute = 'pc-parts';
          break
        default:
            productRoute = 'tours';
      }

    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
        console.log("en Comments Reviews: ", setReviews, "reviews: ", reviews, "review: ", review)
    };

useEffect(() => {
    const urls = [
        `http://localhost:8000/api/v1/${productRoute}/${id}/reviews` //productType cuando se arreegle el bug
/*         `http://localhost:8000/api/v1/tours/${id}/reviews`,
        `http://localhost:8000/api/v1/video-games/${id}/reviews`,
        `http://localhost:8000/api/v1/pc-parts/${id}/reviews`  */
    ];

    urls.forEach(url => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
                
            })
            .then(data => {
                setReviews(prevReviews => [...prevReviews, ...data.data.reviews]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
}, [id]);


    return (
        <div className="review-box">
            <h1 id='comment-title'>Give us a Feedback!</h1>
           {/*  <ReviewForm onAddReview={handleAddReview} productType={'books'}/> */}
            <ReviewForm onAddReview={handleAddReview} productType={productType}/>
            <ReviewList reviews={reviews} />
        </div>
    );
}

export default Comments

Comments.propTypes = {
    productType: PropTypes.string,
  };
  