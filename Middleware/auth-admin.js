const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

const authAdmin = async (req, res, next) => {
         if(req.user.admin)
         next()    

} 

module.exports = authAdmin