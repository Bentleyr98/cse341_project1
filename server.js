const express = require('express')
const app = express()
const port = 8080
require('mongodb').MongoClient;
const mongodb = require('./database/db');
const bodyParser = require('body-parser');
// app.set('view engine', 'ejs');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

app.use(bodyParser.json())
.use(express.urlencoded({ extended: true }))
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})

app.use("/", require("./routes/"));


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
}});