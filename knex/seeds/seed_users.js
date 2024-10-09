/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const data = require('../../Data/user.js');

exports.seed = async function(knex) {
  // Deletes ALL existing entries in the 'users' table
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert(data);
};
