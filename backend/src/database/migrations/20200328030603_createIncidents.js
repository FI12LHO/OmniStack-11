exports.up = function(knex) {
    return knex.schema.createTable("incidents", (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.decimal("value").notNullable();
      // Chave estrangeira
      table.string("ongId").notNullable();
      table.foreign("ongId").references("id").inTable("ongs");
    });
  };
  
  exports.down = function(knex) {
      //Caso de erro
      return knex.schema.dropTable("incidents");
  };
  