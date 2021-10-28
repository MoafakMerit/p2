
const { StatusCodes } = require("http-status-codes");
const Guest = require("../Models/Guest");
var nodemailer = require('nodemailer');

// Add Guest
const addGuest = async (req, res) => {
    const checkedGuest = await Guest.findOne({ email: req.body.email })
    if (checkedGuest)
    return res.status(StatusCodes.BAD_REQUEST).json(`${req.body.email} is already registered!`);

    const guest = await Guest.create({ ...req.body })
    res.status(StatusCodes.CREATED).json(`${req.body.email} is now registered!`)
    guest.sendEmailSignUp()
}


// Get a Guest

const getAGuest = async (req, res) => {
    const { id: guestID } = req.params
    const guest = await Guest.findOne({ _id: guestID }).select("-password")
    if (!Guest)
    return res.status(StatusCodes.BAD_REQUEST).json(`Guest not found!`);

    res.status(StatusCodes.OK).json(Guest)
    
    
}

// Update Guest
const updateGuest = async (req, res) => {
    const { id } = req.params
    const updatedGuest = await Guest.findByIdAndUpdate({ _id: id }, { new: true })
    res.status(StatusCodes.OK).json(updatedGuest)
}

// Delete Guest
// Search for Guest
// Get all Guest

const getAllGuests = async (req, res) => {
    const allGuests = await Guest.find().select('-password')
    res.status(StatusCodes.OK).json(allGuests)

}

module.exports = { addGuest, getAGuest, getAllGuests, updateGuest }



