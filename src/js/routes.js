const express = require('express');

const router = express.Router();

const Recipe = require('./recipe')
const Category = require('./category')

router.get('/', (req, res) => {
    Category.find()
        .then((categories) => {
            res.render('home', { title: `David's recipes`, categories })
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); })
})

router.get('/category/:categoryName', (req, res) => {
    let query = req.params.categoryName === 'all' ? {} : { categories: req.params.categoryName }

    Recipe.find(query)
        .then((recipes) => {
            res.render('category', { title: `David's recipes`, recipes })
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