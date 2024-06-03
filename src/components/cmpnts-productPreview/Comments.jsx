//Comments.jsx
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//css
import '../../style/ReviewForm.css';

function Comments({ productType }) {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();


    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
    };

    useEffect(() => {
        const urls = [
            `http://localhost:8000/api/v1/${productType}/${id}/reviews`
        ];
        const token = localStorage.getItem('token');

        if (!token) {
            console.log('You need to be logged in to post a review.');
            return;
        }
        urls.forEach(url => {
            fetch(url, {
                headers: { 
                    'Content-Type': 'application/json', 
                    'x-auth-token': token
                }
            })
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
            <ReviewForm onAddReview={handleAddReview} productType={productType} />
            <ReviewList reviews={reviews} />
        </div>
    );
}

export default Comments

Comments.propTypes = {
    productType: PropTypes.string,
};
