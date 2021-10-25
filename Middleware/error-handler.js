const { StatusCodes } = require("http-status-codes")

const middlewareErrorHandler = (err, req, res, next) => {
    if(err)
    res.status(StatusCodes.NOT_ACCEPTABLE).json({Error: err.message})
}

module.exports = middlewareErrorHandler