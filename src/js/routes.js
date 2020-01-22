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

router.get('/recipe/:recipeName', (req, res) => {
    Recipe.findOne({ shortName: req.params.recipeName})
        .then((recipe) => {
            res.render('recipe', { title: recipe.name, recipe })
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); })
})

module.exports = router