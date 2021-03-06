const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type:String,
        enum: ["man", "woman"]
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

const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient