module.exports = (app) => {
  app.route('/task')
    .post(app.routes.tasks.create)
  // .get(app.routes.tasks.find)

//  app.route('/tasks/:id'
  //  .get(app.routes.tasks.getId)
  //  .put(app.routes.tasks.update)
  //  .delete(app.routes.tasks.exclude)
  // )
}
