const mongoose = require('mongoose');
const dayjs = require('dayjs');
nodemailer = require('nodemailer')
const config = require('config');

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
    },
    nextVisit:{
        type: Date,
    }
})


ReportSchema.methods.sendEmailReminder = async function(patientEmail){       
var transporter = nodemailer.createTransport({
  host: config.get('mail.host'),
  port: config.get('mail.port'),
  secure: true,
  auth: {
    user: "moafak.merit@gmail.com",
    pass: config.get('mail.password')
  }
});

var mailOptions = {
  from: "moafak.merit@gmail.com",
  to: patientEmail,
  subject: 'Health Center Reminder',
  text: 'This is a reminder!'
};

 return transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}


const Report = mongoose.model('Report', ReportSchema)

module.exports = Report