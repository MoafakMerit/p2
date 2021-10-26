
const {readFile, readFileSync} = require('fs')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const auth = async (req, res, next) => {
    token = readFileSync('./sys/t.txt', 'utf8')

    if(!token){
     return res.status(StatusCodes.BAD_REQUEST).json("No token!")
    }
    try {
        decodeToken = jwt.verify(token, process.env.jwt_secret)
        req.user = decodeToken
        next()
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({mes:'Not valid token!', err:error})
    }
}

module.exports = auth