/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary(); 
    table.string("username").notNullable().unique(); 
    table.string("password").notNullable();
    table.string("password_confirm").notNullable();
    table.specificType("tbr_list", "TEXT[]").notNullable().defaultTo('{}'); // Set default to an empty array
    table.specificType("read_list", "TEXT[]").notNullable().defaultTo('{}'); // Set default to an empty array
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
