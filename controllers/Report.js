
const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")
const Report = require("../Models/Report")

// Add Report

const addReport = async (req, res) => {
    const report = await Report.create({ ...req.body })
    res.status(StatusCodes.CREATED).json(report)
}

// Update Report
const updateReport = async (req, res) => {
    const { id } = req.params
    const { text } = req.body
    const updatedReport = await Report.findByIdAndUpdate({ _id: id }, { text: text }, { new: true })
    res.status(StatusCodes.OK).json(updatedReport)
}

// Delete Report
const deleteReport = async (req, res) => {
    const { id } = req.params
    const deletedReport = await Report.findByIdAndDelete({ _id: id })
    if (!deletedReport)
        return res.status(StatusCodes.BAD_REQUEST).json("Report not found or maby has been deleted")
    res.status(StatusCodes.OK).json(`Report has been deleted!`)
}


// Search for Report

const searchReport = async (req, res) => {
    const { name } = req.query
    queryObject = {}

    const report = await Report.findOne({ name: name })
    if (!report) {
        return res.status(StatusCodes.BAD_REQUEST).json(`${name} not found!`)
    }
    res.status(StatusCodes.OK).json({ report })
}


// Get all Reports

const getAllReports = async (req, res) => {
    const allReports = await Report.find()
    res.status(StatusCodes.OK).json(allReports)
}

const getAreport = async (req, res) => {
    const report = await Report.findOne({_id:req.params.id}).select('date text createdBy -_id').populate('patient', 'name -_id').populate('center', 'name -_id').populate('createdBy', 'name -_id')
    res.status(StatusCodes.OK).json(report)
}

module.exports = { addReport, updateReport, getAllReports, deleteReport, searchReport, getAreport }