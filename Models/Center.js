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
        postalcode: Number,
        street: String,
        city: String,
        country: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    telnr:{
        type: Number,
        required: true
    }
})


const Center = mongoose.model("centers", CenterSchema)

module.exports = Center