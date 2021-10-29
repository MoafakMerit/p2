const { StatusCodes } = require("http-status-codes")
const winston = require('winston')

const middlewareErrorHandler = (err, req, res, next) => {
    if (err)
    winston.error(err.message, err)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({Error: err.message})
}

module.exports = middlewareErrorHandler