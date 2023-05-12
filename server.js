const express = require('express')
const app = express()
const port = 8080
require('mongodb').MongoClient;
const mongodb = require('./database/db');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./tests/swagger.json');


app.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');
  next();
})
.use(express.urlencoded({ extended: true }))


app.use("/", require("./routes/"));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
}});