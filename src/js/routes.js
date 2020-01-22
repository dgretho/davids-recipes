const express = require('express');

const router = express.Router();

const Recipe = require('./recipe')

router.get('/', (req, res) => {
    Recipe.find()
        .then((recipes) => {
            res.render('home', { title: `David's recipes`, recipes })
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); })
})

module.exports = router