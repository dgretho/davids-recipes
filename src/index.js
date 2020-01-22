const express = require('express')
const app = express()

const mongoose = require('mongoose')

require('dotenv').config()
const path = require('path')

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

const Recipe = mongoose.model('recipe', new mongoose.Schema({
    name: {
        type: String
    },
    steps: {
        type: [String]
    },
}))

app.get('/', (req, res) => {
    Recipe.find()
        .then((recipes) => {
            res.render('home', { title: `David's recipes`, recipes })
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); })
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static('public'));

const server = app.listen(process.env.PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`)
});

