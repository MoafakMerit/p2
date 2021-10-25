const express = require('express');
const app = express()
const connectToDb= require('./DB/connection');
const authDoctor = require('./Middleware/auth-doctor');
const authLogin = require('./Middleware/auth-login');
const notFound = require('./Middleware/notFound');
const doctorRout = require('./Routes/Doctor')
const patientRout = require('./Routes/Patient')
const port = process.env.Port || 5000
require('dotenv').config()
require('express-async-errors')

app.use(express.json())

app.use('/api/v1/doctors', doctorRout)
app.use('/api/v1/patients',authDoctor ,authLogin ,patientRout)


app.use(notFound)

const start =  () => {
    try {
        connectToDb(process.env.Mongo_URI);
        app.listen(port, console.log(`app is listening on ${port}`))
    } catch (error) {
        process.exit(1)
    }
}
start()





