const express = require('express')
const app = express()
const port = 8080
require('mongodb').MongoClient;
const mongodb = require('./database/db');

app.use("/", require("./routes/"))

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
}});