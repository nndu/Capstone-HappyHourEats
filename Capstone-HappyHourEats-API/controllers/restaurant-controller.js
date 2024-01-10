const knex = require("knex")(require("../knexfile"));

// GET /restaurants
const index = async (req, res) => {
  try {
    const data = await knex("restaurants");
    res.status(200).json(data);
  } catch (err) {
    res.status(404).send(`Error retrieving Restaurants: ${err}`);
  }
};

const getMenus = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const data = await knex('menus')
      .select('menus.*', 'restaurants.name as restaurant_name')
      .join('restaurants', 'menus.restaurant_id', 'restaurants.id')
      .where('menus.restaurant_id', restaurantId)
      .catch((error) => {
        console.error(error);
      });

    res.status(200).json(data);
  } catch (err) {
    res.status(404).send(`Error retrieving menu: ${err}`);
  }
};

// Create Comment
const postComment = async (req, res) => {
  const { userName, content, rating } = req.body;
  const { id } = req.params;

  try {
    const newComment = {
      restaurant_id: id,
      user_name: userName,
      rating: rating,
      content: content
    };

    const result = await knex('comments').insert(newComment);

    res.status(201).json({ comment_id: result[0] });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get Comments for a Restaurant
const getComments = async (req, res) => {
  const restaurant_id = req.params.id;

  try {
    const comments = await knex('comments')
      .select('*')
      .where('comments.restaurant_id', restaurant_id);

    res.status(200).json(comments);
  } catch (error) {
    console.error('Error retrieving comments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  index,
  getMenus,
  postComment,
  getComments
};