/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del();
  await knex('comments').insert([{
    "user_name": "John Doe",
    "content": "Great experience!",
    "rating": 5,
    "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr"
  },
  {
    "user_name": "Jane Doe",
    "content": "Could be better, but not bad.",
    "rating": 3,
    "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr"
  },
  {
    "user_name": "Alice Smith",
    "content": "Excellent service!",
    "rating": 4,
    "restaurant_id": "1a234567-89b1-4cde-8fg0-hij1klmnopqr"
  },
  {
    "user_name": "Bob Johnson",
    "content": "Average food quality.",
    "rating": 2,
    "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr"
  },
  {
    "user_name": "Eva White",
    "content": "Outstanding!",
    "rating": 5,
    "restaurant_id": "2b345678-91c2-3def-8gh0-ijkl2mnopqr"
  }
]);
};