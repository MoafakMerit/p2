const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {readFileSync} = require('fs')

const authAdmin = async (req, res, next) => {
        isAdmin = req.user.admin
        if(!isAdmin)
            return res.status(StatusCodes.UNAUTHORIZED).json("You do not have the permisson to continue this!")
            next()
    } 

module.exports = authAdmin