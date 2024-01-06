const knex = require("knex")(require("../knexfile"));

// GET /restaurants
const index = async (req, res) => {
  try {
    const data = await knex("events");
    res.status(200).json(data);
  } catch (err) {
    res.status(404).send(`Error retrieving Events: ${err}`);
  }
};

module.exports = {
    index
};