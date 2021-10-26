const express = require('express');
const logout = require('../controllers/logout');
const router = express.Router()

router.route('/').post(logout)

module.exports = router