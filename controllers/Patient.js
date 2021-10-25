
const { StatusCodes } = require("http-status-codes")
const Patient = require("../Models/Patient")

// Add patient

const addPatient = async (req, res) => {
    const checkedPatient = await Patient.findOne({email: req.body.email})
    if(checkedPatient)
    return res.status(StatusCodes.BAD_REQUEST).json(`Patient:${req.body.name} is already exists!`)

    const patient = await Patient.create({...req.body})
    res.status(StatusCodes.CREATED).json(patient)
}

// Update patient
const updatePatient = async (req,res) => {
    const {id} = req.params
    const {email, visits} = req.body
    console.log(id)
    const updatedPatient = await Patient.findByIdAndUpdate({_id: id}, {updatedBy:email, visits:visits}, {new:true})
    res.status(StatusCodes.OK).json(updatedPatient)
}

// Delete patient
// Search for patient
// Get all Patients

const getAllPatients = async (req, res) => {
    const allPatients = await Patient.find()
    res.status(StatusCodes.OK).json(allPatients)
}

module.exports = {addPatient, updatePatient ,getAllPatients}