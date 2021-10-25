const express = require('express');
const { addDoctor } = require('../controllers/Doctor');
const router = express.Router()

router.route('/').post(addDoctor)

module.exports = router