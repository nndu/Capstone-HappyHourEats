
import React, { useState , useEffect} from 'react';
import RestaurantInfo from '../RestaurantInfo/RestaurantInfo.jsx';
import CommentList from '../CommentList/CommentList.jsx';
import axios from "axios";

const Review = (props) => {
  const [comments, setComments] = useState([]);

  const restaurantId = props.restaurantId;

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/restaurants/${restaurantId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [restaurantId]);

  const handleAddComment = async () => {
    try {
      fetchComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <RestaurantInfo restaurantId={restaurantId} onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default Review;