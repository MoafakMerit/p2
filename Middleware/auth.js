const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const Doctor = require("../Models/Doctor")
const bcrypt = require("bcrypt")
const User = require("../Models/User")
require('dotenv').config()



const auth = async (req, res, next) => {
   const { email, password } = req.body
    if (!email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json("Please insert email and password")
    }
    const checkedDoctor = await Doctor.findOne({ email: email })
    if (checkedDoctor) {
        checkedPassword = await bcrypt.compare(password, checkedDoctor.password)
        if (checkedPassword) {
            const token = await checkedDoctor.createJWT()
            res.header('x-auth-token',token).status(StatusCodes.OK)
         
        }
        next()
    }

    const checkedUser = await User.findOne({ email: email })
    if (!checkedUser) 
    return res.status(StatusCodes.BAD_REQUEST).json("Email or password is not correct")


    checkedPassword = await bcrypt.compare(password, checkedUser.password)
    if (!checkedPassword) 
    return res.status(StatusCodes.BAD_REQUEST).json("Email or password is not correct")

     const token = await checkedUser.createJWT()
     res.setHeader('Authoraization',token).status(StatusCodes.OK)


    try {
        const decodedToken = jwt.verify(token, process.env.jwt_secret)
    req.user = decodedToken 
     next()
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json("Token not valid!")
    }

    }

    

module.exports = auth