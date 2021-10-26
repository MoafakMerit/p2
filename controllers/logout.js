const {writeFileSync} = require('fs')
const { StatusCodes } = require('http-status-codes')

const logout = async (req, res) => {
    writeFileSync('./sys/t.txt', "")
    return res.status(StatusCodes.OK).json("logged out!")
}

module.exports = logout