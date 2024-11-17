const app = require('express')()
const knex = require('knex')
const knexfile = require('./knexfile')

app.db = knex(knexfile.test)

app.use(app.json())

app.get('/', (req, res) => {
  res.status(200).send()
})

module.exports = app
