// migrations/04_create_comments.js
exports.up = function (knex) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('comment_id').unsigned().notNullable().primary();
    table.uuid("restaurant_id").notNullable();
    table.string('user_name').notNullable();
    table.text('content').notNullable();
    table.integer('rating').notNullable();
    table.timestamp('time').defaultTo(knex.fn.now());
    
    table.foreign("restaurant_id").references("id").inTable("restaurants").onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('comments');
};
