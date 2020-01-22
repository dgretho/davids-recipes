const mongoose = require('mongoose')

module.exports = mongoose.model('recipe', new mongoose.Schema({
    name: {
        type: String
    },
    steps: {
        type: [String]
    },
}))