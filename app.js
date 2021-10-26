const express = require('express');
const app = express()
const connectToDb = require('./DB/connection');
const notFound = require('./Middleware/notFound');
const loginRout = require('./Routes/login');
const doctorRout = require('./Routes/Doctor');
const patientRout = require('./Routes/Patient');
const userRout = require('./Routes/User')
const logoutRout = require('./Routes/logout')
const path = require('path');
const middlewareErrorHandler = require('./Middleware/error-handler');
const port = process.env.Port || 5000
require('dotenv').config()
require('express-async-errors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/login', loginRout)
app.use('/logout', logoutRout)
app.use('/api/v1/users', userRout)
app.use('/api/v1/doctors', doctorRout)
app.use('/api/v1/patients', patientRout)


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



