const { StatusCodes } = require("http-status-codes")
const Doctor = require("../Models/Doctor")
const bcrypt = require("bcrypt")

const authLogin = async (req, res, next) => {
    const {email, password} = req.body
    const cehckedDoctor = await Doctor.findOne({email: email})
    if(!cehckedDoctor) {
        return res.status(StatusCodes.BAD_REQUEST).json("Email or password is not correct")
    } 
    checkedPassword = await bcrypt.compare(password, cehckedDoctor.password )
    if(!checkedPassword){
        return res.status(StatusCodes.BAD_REQUEST).json("Password is not correct")
    }

    const token = await cehckedDoctor.createJWT()
    console.log(token)


    next()
}

module.exports = authLogin