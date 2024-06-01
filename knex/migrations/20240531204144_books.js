/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("books", (table) =>{
    table.increments("id");
    table.string("title").notNullable();
    table.string("imgsrc").notNullable();
    table.specificType("author", "TEXT []").notNullable();
    table.text("summary");
    table.specificType("genres", "TEXT []").notNullable();
    table.decimal('average_rating', 3, 2).notNullable()
    table.integer("number_of_pages", 3).notNullable();
    table.integer("publication_year", 4).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('books')
};
