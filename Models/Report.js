const mongoose = require('mongoose');
const dayjs = require('dayjs');

const ReportSchema = mongoose.Schema({
    date:{
        type: Date,
        default: dayjs().format(),
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Patient"
    },
    text:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    center:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Center"
    }
})

const Report = mongoose.model('Report', ReportSchema)

module.exports = Report