import PropTypes from 'prop-types';

const ReviewList = ({ reviews }) => {
    return (
        <div>
            <h2>Other Users said:</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.author}</strong> - ({review.rating})
                            <p>
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


ReviewList.propTypes = {
    reviews: PropTypes.array.isRequired,
};
