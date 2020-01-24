const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    shortName: {
        type: String
    }
})

module.exports = mongoose.model('category', categorySchema, 'categories')