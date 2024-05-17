//ReviewForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

//css
import '../../style/ReviewForm.css';

const ReviewForm = ({ onAddReview }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);


        const handleSubmit = (e) => {
            e.preventDefault();
            const newReview = { name, comment, rating };

        
        fetch('/api/v1/books/:id/reviews', {
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
        })
        .catch((error) => console.error('Error:', error));
    console.log("esto es el el fetch de Patch")
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
};
