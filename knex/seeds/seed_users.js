/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const  data = require('../../Data/users.js')
exports.seed = async function(knex) {
  await knex('users').del()

  await knex('users').insert(data);
};
