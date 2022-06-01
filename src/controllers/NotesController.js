const knex = require('../database/knex');
const AppError = require('../utils/AppError');

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const { user_id } = request.params;
    
    if(rating > 5 || rating < 1) {
      throw new AppError("A nota pode variar de 1 até o 5.")
    }
    
    const note_id = await knex('notes').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => ({
      note_id,
      user_id,
      name
    })
    )

    await knex('tags').insert(tagsInsert)

    return response.json()
  }
}

module.exports = NotesController