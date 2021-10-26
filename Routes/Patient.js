const express = require('express');
const { addPatient, getAllPatients, updatePatient, deletePatient } = require('../controllers/Patient');
const authAdmin = require('../Middleware/auth-admin');
const router = express.Router()

router.route('/').post(addPatient).get(authAdmin, getAllPatients)
router.route('/:id').put(updatePatient).delete(authAdmin, deletePatient)

module.exports = router