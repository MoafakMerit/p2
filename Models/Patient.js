const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    age:{
        type: Number,
        required: true
    },
    visits: {
        type: Number,
        default: 1
    },
    updatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }
})

const Patient = mongoose.model('patients', PatientSchema)

module.exports = Patient