const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {readFileSync} = require('fs')

const authAdmin = async (req, res, next) => {
    const token = readFileSync('./sys/t.txt','utf8')
    if(!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json("You do not have the permisson to continue this!")
    }
    decodedToken = jwt.verify(token, process.env.jwt_secret)
    if(!{admin: true} in decodedToken) {
    return res.status(StatusCodes.UNAUTHORIZED).json("You do not have the permisson to continue this!")
    }
    

    next()
}

module.exports = authAdmin