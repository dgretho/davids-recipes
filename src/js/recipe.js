const mongoose = require('mongoose')

module.exports = mongoose.model('recipe', new mongoose.Schema({
    name: {
        type: String
    },
    shortName: {
        type: String
    },
    description: {
        type: String
    },
    steps: {
        type: [String]
    },
}))