// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: "postgresql",
    connection: {
      host: process.env.DB_URL,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_DATABASE || "lydiasims",
      user: process.env.DB_USER || "lydiasims",
      password: process.env.DB_PASSWORD || "MiloA",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/knex/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
      tableName: "knex_seeds",
    },
  },
  production: {
  client: "pg",
    connection: {
      connectionString: process.env.DB_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10, 
    },
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },
};
