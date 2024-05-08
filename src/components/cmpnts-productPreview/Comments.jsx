//Comments.jsx
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { useEffect, useState } from 'react';
//css
import '../../style/ReviewForm.css';

function Comments() {
    const [reviews, setReviews] = useState([]);
    const [comments, setComments] = useState([]);

    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
    };

    // Cargar los comentarios desde el servidor cuando el componente se monta
    useEffect(() => {
        fetch('/api/v1/tours')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // Verificar si la respuesta es JSON
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json();
                } else {
                    throw new Error('Unexpected response format');
                }
            })
            .then(data => setComments(data))
            .catch((error) => {
                console.error('Error:', error);
            });

    }, []);

    return (
        <div className="review-box">
            <h1 id='comment-title'>Give us a Feed Back!</h1>
            <ReviewForm onAddReview={handleAddReview} />
            <ReviewList reviews={reviews} />
        </div>
    );
}

export default Comments

ReviewForm.propTypes = {
    onAddReview: PropTypes.func.isRequired,
};
