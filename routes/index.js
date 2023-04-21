const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Chris Bentley')
  })

module.exports = routes;