const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken')
require("dotenv")

const DoctorSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    department:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
})


DoctorSchema.pre('save', async function (next) {
        this.password = await bcrypt.hash(this.password, 10);
        next()
    }
)

DoctorSchema.methods.createJWT = function() {
    return jwt.sign({id:this.id, name: this.name}, process.env.jwt_secret)
}

const Doctor = mongoose.model("doctors", DoctorSchema)

module.exports = Doctor