const config = require("../knexfile");

const knex = require("knes")(config);

module.exports = knex;
