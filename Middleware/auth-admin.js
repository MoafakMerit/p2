const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const authAdmin = async (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        return res.status(StatusCodes.UNAUTHORIZED).json("You do not have the permisson to continue this!")
    }
    decodedToken = jwt.verify(token, process.env.jwt_secret)
    if(!req.user.admin) {
    return res.status(StatusCodes.UNAUTHORIZED).json("You do not have the permisson to continue this!")
    }
    

    next()
}

module.exports = authAdmin