const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken')
require("dotenv")

const UserSchema = mongoose.Schema({
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
    admin: {
        type: Boolean,
        default: false
    }
})


UserSchema.pre('save', async function (next) {
        this.password = await bcrypt.hash(this.password, 10);
        next()
    }
)

UserSchema.methods.createJWT = function() {
    return jwt.sign({id:this.id, admin: this.admin}, process.env.jwt_secret, {expiresIn:"30d"})
}

const User = mongoose.model("User", UserSchema)

module.exports = User