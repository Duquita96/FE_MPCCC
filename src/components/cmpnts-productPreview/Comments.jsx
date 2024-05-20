//Comments.jsx
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//css
import '../../style/ReviewForm.css';

function Comments() {
    const [reviews, setReviews] = useState([]);
/*     const [productType, setProductType] = useState(''); */
    const { id } = useParams();

    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
    };

useEffect(() => {
    const urls = [
        `http://localhost:8000/api/v1/books/${id}/reviews`,
        `http://localhost:8000/api/v1/tours/${id}/reviews`,
        `http://localhost:8000/api/v1/video-games/${id}/reviews`,
        `http://localhost:8000/api/v1/pc-parts/${id}/reviews` 
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
            <ReviewForm onAddReview={handleAddReview} productType={'books'}/>
            <ReviewList reviews={reviews} />
        </div>
    );
}

export default Comments