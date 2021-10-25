const express = require('express');
const { addPatient, getAllPatients, updatePatient } = require('../controllers/Patient');
const router = express.Router()

router.route('/').post(addPatient).get(getAllPatients)
router.route('/:id').put(updatePatient)

module.exports = router