/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('tasks', (t) => {
    t.increments('id').primary()
    t.string('title').notNullable()
    t.text('description')
    t
      .specificType('status', "ENUM('todo', 'in-progress', 'done')")
      .notNullable()
      .defaultTo('todo')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('tasks')
}
