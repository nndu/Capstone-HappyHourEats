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

module.exports = {
  index,
  getMenus
};