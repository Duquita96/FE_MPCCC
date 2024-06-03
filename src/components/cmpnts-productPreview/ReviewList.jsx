//ReviewList.jxs
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

export const StarRating = ({ rating }) => {
    return (
        <span>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <FaStar
                            color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'} size="12px"
                        />
                    </label>
                );
            })}
        </span>
    );
};

const ReviewList = ({ reviews }) => {

    return (
        <div id='review-list'>
            <h2 id="list-title">Other Users said:</h2>
            {reviews.length === 0 ? (
                <p id='empty-list'>No reviews yet.</p>
            ) : (
                <ul id='comment-list'>
                    {reviews.map((review, index) => (
                        <li key={index} >
                            <p id='firstCommentLine'>
                                <strong>{review.name}</strong><StarRating rating={review.rating} />
                            </p>
                            <p id='secondCommentLine'>
                                {review.comment}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReviewList;


StarRating.propTypes = {
    rating: PropTypes.number
};

ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        comment: PropTypes.string,
        rating: PropTypes.number.isRequired,
    }))
};