const { StatusCodes } = require('http-status-codes')

const logout = async (req, res) => {
    return res.header('x-auth-token', '').status(StatusCodes.OK).json("logged out!")
}

module.exports = logout