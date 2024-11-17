module.exports = (app) => {
  const save = async (task) => {
    try {
      if (!task.title) {
        return { error: 'Title cannot be empty' }
      }
      if (task.description.length > 255) {
        return { error: 'Description must have a maximum of 255 characters' }
      }
      if (task.status !== 'todo' && task.status !== 'in-progress' && task.status !== 'done') {
        return { error: 'Status accepts only pre-defined values ("todo", "in-progress", "done").' }
      }
      const insertTask = await app.db('tasks').insert(task)
      const id = insertTask[0]
      const newTask = app.db('tasks').where({ id }).first()
      return newTask
    } catch (error) {
      return error
    }
  }
  return { save }
}
