/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("restaurants", function (table) {
        table.uuid("id").primary();
        table.string("name").notNullable();
        table.string("address").notNullable();
        table.float("latitude").notNullable();
        table.float("longitude").notNullable();
        table.string("cuisine").notNullable();
        table.string("priceRange").notNullable();
        table.string("start").notNullable();
        table.string("end").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("restaurants");
};