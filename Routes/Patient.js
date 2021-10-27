const express = require('express');
const { addPatient, getAllPatients, updatePatient, deletePatient, searchPatient } = require('../controllers/Patient');
const auth = require('../Middleware/auth');
const authAdmin = require('../Middleware/auth-admin');
const router = express.Router()

router.route('/').post([auth,authAdmin],addPatient).get(auth, searchPatient)
router.route('/all').get([auth,authAdmin], getAllPatients)
router.route('/:id').put(auth, updatePatient).delete([auth,authAdmin], deletePatient)

module.exports = router