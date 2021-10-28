const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken')
require("dotenv")

const CenterSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    adress:{
        required: true,
        postalcode: Number,
        street: String,
        city: String,
        country: String
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    telnr:{
        type: Number,
        require: true
    }
})


const Center = mongoose.model("centers", CenterSchema)

module.exports = Center