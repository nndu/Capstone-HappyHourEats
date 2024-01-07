/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("events", function (table) {
        table.uuid("id").primary();
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.boolean("birthday").notNullable();
        table.integer("hours_left").nullable().defaultTo(null);
        table.string("image_url").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("events");
};