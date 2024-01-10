
import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';

const Comment = ({ user_name, content, rating, time }) => (
  <div className="comment">
    <div className="user-info">
      <span className="user-name">{user_name}</span>
      <span className="rating">{getStarRatingText(rating)}</span>
      <span className="time">{time}</span>
    </div>
    <p className="comment-content">{content}</p>
  </div>
);
const getStarRatingText = (rating) => {
  return '⭐'.repeat(rating);
};
Comment.propTypes = {
  user_name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};

const CommentsList = ({ comments }) => (
  <div className="comments-list">
    <h2>Reviews</h2>
    {comments.map((comment, index) => (
      <Comment key={index} {...comment} />
    ))}
  </div>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      user_name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentsList;
