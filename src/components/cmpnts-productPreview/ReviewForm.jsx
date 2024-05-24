//React libraries and others
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

//CSS
import '../../style/ReviewForm.css';

const ReviewForm = ({ onAddReview, productType }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, comment, rating };

        fetch(`http://localhost:8000/api/v1/${productType}/${id}/reviews`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview),
        })

            .then(response => response.json())
            .then(data => {
                onAddReview(data); // Update the Status of the Component
                // Clean the Form
                setName('');
                setComment('');
                setRating(0);
                window.location.reload();
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <form id="review-form" onSubmit={handleSubmit}>
            <div id='firstFormBox'>

                <div id='userNameRating'>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id='userNameForm'
                        className='input-group'
                    />
                    <input
                        type="number"
                        placeholder="Rating (1-5)"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value ? parseInt(e.target.value) : '')}
                        id='ratingForm'
                        className='input-group'
                        required
                    />
                </div>

                <button type="submit" id='submitButton'>Submit Review</button>
            </div>

            <textarea
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                id='commentForm'
                className='input-group'
                required
            />


        </form>
    );
};

export default ReviewForm;


ReviewForm.propTypes = {
    onAddReview: PropTypes.func.isRequired,
    productType: PropTypes.string,
};
