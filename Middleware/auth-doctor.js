const { StatusCodes } = require("http-status-codes")
const Doctor = require("../Models/Doctor")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const authDoctor = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(StatusCodes.UNAUTHORIZED).json("Not auth!")
    }

    token = authHeader.split(" ")[1]

    checkToken =  jwt.verify(token, process.env.jwt_secret)
     if(!checkToken){
        return res.status(StatusCodes.UNAUTHORIZED).json("Not auth!")
     }


    next()
}

module.exports = authDoctor