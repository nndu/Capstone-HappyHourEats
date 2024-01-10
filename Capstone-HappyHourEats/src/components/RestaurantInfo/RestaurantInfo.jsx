// RestaurantInfo.js
import React, { useState } from 'react';
import axios from 'axios';
import './RestaurantInfo.scss';

const RestaurantInfo = ({ restaurantId, onAddComment }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [userReview, setUserReview] = useState('');

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = async () => {
    // Create a new comment object
    const newComment = {
      userName: userName,
      content: userReview,
      rating: selectedRating,
      time: new Date().toISOString(), 
    };

    // Send a POST request to the server to add the comment
    try {
      await axios.post(`http://localhost:8080/restaurants/${restaurantId}/comments`, newComment);
      onAddComment(); // Update the local state with the new comment
      // Reset form values
      setUserName('');
      setUserReview('');
      setSelectedRating(0);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="user-review">
      <h2>Add your review</h2>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={`star ${rating <= selectedRating ? 'selected' : ''}`}
            onClick={() => handleStarClick(rating)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Review:</label>
        <textarea
          value={userReview}
          onChange={(e) => setUserReview(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default RestaurantInfo;
