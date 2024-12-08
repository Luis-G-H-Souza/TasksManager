const express = require('express')
const app = express()
const knex = require('knex')
const knexfile = require('../knexfile')
const consign = require('consign')

app.db = knex(knexfile.test)

app.use(express.json())

consign({ cwd: 'src', verbose: false })
  .include('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app)

app.get('/', (req, res) => {
  res.status(200).send()
})

module.exports = app
