import { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
//css
import '../../style/ReviewForm.css';

function Comments() {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="review-box">
      <h1>Give us a Feed Back!</h1>
      <ReviewForm onAddReview={handleAddReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default Comments