
const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")
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

    token = req.headers.authorization
    decodedToken = jwt.verify(token, process.env.jwt_secret)

    doctorID = decodedToken.id
    const {id} = req.params
    const {visits} = req.body
    const updatedPatient = await Patient.findByIdAndUpdate({_id: id}, {updatedBy:doctorID, visits:visits}, {new:true})
    res.status(StatusCodes.OK).json(updatedPatient)
}

// Delete patient
const deletePatient = async (req, res) => {
    const {id} = req.params
    const deletedPatient = await Patient.findByIdAndDelete({_id:id})
    res.status(StatusCodes.OK).json(`Patient: ${deletedPatient.name} has been deleted!`)
}


// Search for patient
// Get all Patients

const getAllPatients = async (req, res) => {
    const allPatients = await Patient.find()
    res.status(StatusCodes.OK).json(allPatients)
}

module.exports = {addPatient, updatePatient ,getAllPatients ,deletePatient}