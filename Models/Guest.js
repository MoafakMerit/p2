const mongoose = require('mongoose');
const config = require('config');
const nodemailer = require('nodemailer');

const GuestSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: Number,
        required: true,
    },
    gender:{
        type:String,
        enum: ["man", "woman"]
    }
})

GuestSchema.methods.sendEmailSignUp = async function(){       
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
  to: this.email,
  subject: 'Health Center Singup',
  text: 'You signed up successfully!'
};

 return transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}


const Guest = mongoose.model('guests', GuestSchema)

module.exports = Guest