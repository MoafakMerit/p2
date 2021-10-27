const express = require('express');
const login = require('../controllers/login');
const router = express.Router()
const auth= require('../Middleware/auth')

router.route('/').post(login)

module.exports = router