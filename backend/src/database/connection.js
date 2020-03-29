const knex = require("knex");
const configuration = require("../../knexfile");

// Criando conexao
const connection = knex(configuration.development);

module.exports = connection;