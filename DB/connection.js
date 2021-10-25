const mongoose = require('mongoose')
require('dotenv').config()

const conn = (url) => {
    mongoose.connect(url)
}

module.exports = conn