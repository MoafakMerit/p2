
const { StatusCodes } = require("http-status-codes")
const Center = require("../Models/Center")
// Add Center
const addCenter = async (req, res) => {
    const checkedCenter = await Center.findOne({ email: req.body.email })
    if (checkedCenter)
        return res.status(StatusCodes.BAD_REQUEST).json(`${req.body.email} is already registered!`);

    const center = await Center.create({ ...req.body })
    res.status(StatusCodes.CREATED).json(`${center.name} is now registered!`)
}

// Get a Center

const getACenter = async (req, res) => {
    const { id: CenterID } = req.params
    const center = await Center.findOne({ _id: CenterID })
    if (!center)
        return res.status(StatusCodes.BAD_REQUEST).json(`Center not found!`);

    res.status(StatusCodes.OK).json(Center)
}

// Update Center
// Delete Center
// Search for Center


// Get all Centers
const getAllCenter = async (req, res) => {
    const allCenter = await Center.find()
    res.status(StatusCodes.OK).json(allCenter)
}

module.exports = { addCenter, getACenter , getAllCenter}