import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <textarea 
        placeholder="Write your review..." 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Rating (1-5)" 
        min="1" 
        max="5" 
        value={rating} 
        onChange={(e) => setRating(parseInt(e.target.value))} 
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;