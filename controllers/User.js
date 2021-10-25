
const { StatusCodes } = require("http-status-codes")
const User = require("../Models/User")
// Add user
const addUser = async (req, res) => {
    const checkeduser = await User.findOne({email: req.body.email})
    if(checkeduser)
    return res.status(StatusCodes.BAD_REQUEST).json(`${req.body.email} is already registered!`);
    
    const user = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json(`${req.body.email} is now registered!` )
}

// Get a user

const getAuser = async (req, res) => {
    const {id: userID} = req.params
    const user = await Doctor.findOne({_id: userID}).select("-password")
    if(!user)
    return res.status(StatusCodes.BAD_REQUEST).json(`User not found!`);
    
    res.status(StatusCodes.OK).json(user)
}

// Update user
const updateUser = async (req, res) => {
    const {id} = req.params
    const updatedUser = await User.findByIdAndUpdate({_id:id}, {admin: req.body.admin}, {new:true})
    res.status(StatusCodes.OK).json(updatedUser)
}

// Delete user
// Search for user
// Get all user

const getAllUsers = async (req, res) => {
    const allUsers = await User.find().select('-password')
    res.status(StatusCodes.OK).json(allUsers)

}

module.exports = {addUser, getAuser, getAllUsers, updateUser}