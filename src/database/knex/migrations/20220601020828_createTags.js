
exports.up = knex => knex.schema.createTable('tags', table => {
  table.increments('id')
  table.text('name')
  table.integer('user_id').references('id').inTable('users')
  table.integer('note_id').references('id').inTable('notes')

  table.timestamp('created_at').default(knex.fn.now())
  table.timestamp('updated_at').default(knex.fn.now())
})

exports.down =  knex => knex.schema.dropTable('tags')
