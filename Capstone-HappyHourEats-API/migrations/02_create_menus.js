/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("menus", function (table) {
        table.uuid("id").primary();
        table.uuid("restaurant_id").notNullable();
        table.string("image_url").notNullable();
        table.string("title").notNullable();
        table.decimal("price", 8, 2).notNullable();
        table.decimal("special_price", 8, 2).notNullable();
        table.string("tag");

        table.foreign("restaurant_id").references("id").inTable("restaurants").onDelete("CASCADE");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("menus");
};  