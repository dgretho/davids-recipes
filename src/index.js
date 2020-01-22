const express = require('express')
const app = express()

const mongoose = require('mongoose')

require('dotenv').config()
const path = require('path')

const routes = require('./js/routes');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static('public'))
app.use('/', routes)

const server = app.listen(process.env.PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`)
});

