//Comments.jsx
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//css
import '../../style/ReviewForm.css';

function Comments() {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
    };
    /* 
        fetch(`http://localhost:8000/api/v1/books/${id}/reviews`)
        fetch(`http://localhost:8000/api/v1/tours/${id}/reviews`) 
        fetch(`http://localhost:8000/api/v1/video-games/${id}/reviews`) 
        fetch(`http://localhost:8000/api/v1/pc-parts/${id}/reviews`)  */

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/books/${id}/reviews`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setReviews(data.data.reviews);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);


    return (
        <div className="review-box">
            <h1 id='comment-title'>Give us a Feed Back!</h1>
            <ReviewForm onAddReview={handleAddReview} />
            <ReviewList reviews={reviews} />
        </div>
    );
}

export default Comments