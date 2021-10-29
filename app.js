require('express-async-errors')
require('dotenv').config()
const express = require('express');
const app = express()
const winston = require('winston')
const connectToDb = require('./DB/connection');
const notFound = require('./Middleware/notFound');
const loginRout = require('./Routes/login');
const doctorRout = require('./Routes/Doctor');
const patientRout = require('./Routes/Patient');
const userRout = require('./Routes/User')
const logoutRout = require('./Routes/logout')
const centerRout = require('./Routes/Center')
const guestRout = require('./Routes/Guest')
const reportRout = require('./Routes/Report')
const path = require('path');
const middlewareErrorHandler = require('./Middleware/error-handler');
const port = process.env.Port || 5000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

process.on('uncaughtException', (ex) =>{
    console.log("somthing faild in startup")
    winston.error(ex.message, ex);
    process.exit(1)
} )

winston.add(new winston.transports.File({filename: 'Errorlog.log'}))


process.on('unhandledRejection', (ex) =>{
    throw ex;
} )



app.use('/login', loginRout)
app.use('/logout', logoutRout)
app.use('/api/v1/users', userRout)
app.use('/api/v1/doctors', doctorRout)
app.use('/api/v1/patients', patientRout)
app.use('/api/v1/centers', centerRout)
app.use('/api/v1/guests', guestRout)
app.use('/api/v1/reports', reportRout)
app.use(notFound)
app.use(middlewareErrorHandler)


const start = () => {
    try {
        connectToDb(process.env.Mongo_URI);
        app.listen(port, console.log(`app is listening on ${port}`))
    } catch (error) {
        process.exit(1)
    }
}
start()



