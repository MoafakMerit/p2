
const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")
const Patient = require("../Models/Patient")

// Add patient

const addPatient = async (req, res) => {
    const checkedPatient = await Patient.findOne({ email: req.body.email })
    if (checkedPatient)
        return res.status(StatusCodes.BAD_REQUEST).json(`Patient:${req.body.name} is already exists!`)

    const patient = await Patient.create({ ...req.body })
    res.status(StatusCodes.CREATED).json(patient)
}

// Update patient
const updatePatient = async (req, res) => {
    const doctorID = req.user.id
    const { id } = req.params
    const { visits } = req.body
    const updatedPatient = await Patient.findByIdAndUpdate({ _id: id }, { updatedBy: doctorID, visits: visits }, { new: true })
    res.status(StatusCodes.OK).json(updatedPatient)
}

// Delete patient
const deletePatient = async (req, res) => {
    const { id } = req.params
    const deletedPatient = await Patient.findByIdAndDelete({ _id: id })
    if (!deletedPatient)
        return res.status(StatusCodes.BAD_REQUEST).json("Patient not found or maby has been deleted")
    res.status(StatusCodes.OK).json(`Patient: ${deletedPatient.name} has been deleted!`)
}


// Search for patient

const searchPatient = async (req, res) => {
    const { name } = req.query
    const patient = await Patient.findOne({ name: name })
    if (!patient) {
        return res.status(StatusCodes.BAD_REQUEST).json(`${name} not found!`)
    }
    res.status(StatusCodes.OK).json({ patient })
}


// Get all Patients

const getAllPatients = async (req, res) => {
    const allPatients = await Patient.find()
    res.status(StatusCodes.OK).json(allPatients)
}

module.exports = { addPatient, updatePatient, getAllPatients, deletePatient, searchPatient }