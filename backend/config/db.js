const config = require("../knexfile.js");
const knex = require("knex")(config);

knex.migrate.latest([config]); //No recommended in production
module.exports = knex;
