module.exports = (app) => {
  app.route('/tasks')
    .post(app.routes.tasks.crete)
    .get(app.routes.tasks.find)

  app.route('/tasks/:id'
    .get(app.routes.tasks.getId)
    .put(app.routes.tasks.update)
    .delete(app.routes.tasks.exclude)
  )
}
