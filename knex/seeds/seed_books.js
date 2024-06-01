/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const  data = require('../../Data/data.js')
exports.seed = async function(knex) {
  await knex('books').del()

  await knex('books').insert(data);
};
