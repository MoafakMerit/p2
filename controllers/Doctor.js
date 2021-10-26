
const { StatusCodes } = require("http-status-codes")
const Doctor = require("../Models/Doctor")
// Add doctor
const addDoctor = async (req, res) => {
    const checkedDoctor = await Doctor.findOne({ email: req.body.email })
    if (checkedDoctor)
        return res.status(StatusCodes.BAD_REQUEST).json(`${req.body.email} is already registered!`);

    const doctor = await Doctor.create({ ...req.body })
    res.status(StatusCodes.CREATED).json(`${req.body.name} is now registered!`)
}

// Get a doctor

const getAdoctor = async (req, res) => {
    const { id: doctorID } = req.params
    const doctor = await Doctor.findOne({ _id: doctorID }).select("-password")
    if (!doctor)
        return res.status(StatusCodes.BAD_REQUEST).json(`Doctor not found!`);

    res.status(StatusCodes.OK).json(doctor)
}

// Update doctor
// Delete doctor
// Search for doctor
// Get all doctors

module.exports = { addDoctor, getAdoctor }