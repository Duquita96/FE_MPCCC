import { useState } from 'react';

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
        onAddReview(newReview);
        setAuthor('');
        setComment('');
        setRating(0);
    };

    return (
        <form id="review-form" onSubmit={handleSubmit}>
            <div id='firstformbox'>

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
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        id='ratingForm'
                        className='input-group'
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
            />


        </form>
    );
};

export default ReviewForm;