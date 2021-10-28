const express = require('express');
const { getAllCenter, addCenter } = require('../controllers/Center');
const auth = require('../Middleware/auth');
const authAdmin = require('../Middleware/auth-admin');
const router = express.Router()

router.route('/').post([auth,authAdmin], addCenter).get(getAllCenter)
//router.route('/:id').get()

module.exports = router