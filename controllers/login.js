const { StatusCodes } = require("http-status-codes")
const Doctor = require("../Models/Doctor")
const bcrypt = require("bcrypt")
const User = require("../Models/User")
const { readFileSync, writeFileSync } = require('fs')

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json("You must insert email and password")
    }
    const checkedDoctor = await Doctor.findOne({ email: email })
    if (checkedDoctor) {
        checkedPassword = await bcrypt.compare(password, checkedDoctor.password)
        if (checkedPassword) {
            const token = await checkedDoctor.createJWT()
            res.status(StatusCodes.OK).json(`logged in with token ${token}!`)
            return writeFileSync('./sys/t.txt', `${token}`)
        }
    }
    const checkedUser = await User.findOne({ email: email })
    if (checkedUser) {
        checkedPassword = await bcrypt.compare(password, checkedUser.password)
        if (checkedPassword) {
            const token = await checkedUser.createJWT()
            res.status(StatusCodes.OK).json(`logged in with token ${token}!`)
            return writeFileSync('./sys/t.txt', `${token}`)
        }
    }
    return res.status(StatusCodes.BAD_REQUEST).json("Email or password is not correct")



}

module.exports = login