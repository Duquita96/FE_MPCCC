//ReviewForm.jsx
import { useState } from 'react';
/* import PropTypes from 'prop-types'; */

//css
import '../../style/ReviewForm.css';

const ReviewForm = ({ onAddReview }) => {
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            author,
            comment,
            rating
        };
/*         onAddReview(newReview);
        setAuthor('');
        setComment('');
        setRating(0); */

        fetch('/api/v1/tours', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            if (data) {
                return JSON.parse(data);
            } else {
                return {};
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    
    };

    return (
        <form id="review-form" onSubmit={handleSubmit}>
            <div id='firstFormBox'>

                <div id='userNameRating'>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
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

/* ReviewForm.propTypes = {
    onAddReview: PropTypes.array.isRequired,
}; */