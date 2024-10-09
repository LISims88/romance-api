/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) =>{
      table.increments("id");
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.string("password_confirm").notNullable();
      table.specificType("tbr_list", "TEXT []").notNullable();
      table.specificType("read_list", "TEXT []").notNullable();
    })
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  };