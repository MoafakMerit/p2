const express = require('express');
const { addDoctor, getAdoctor } = require('../controllers/Doctor');
const router = express.Router()

router.route('/').post(addDoctor)
router.route('/:id').get(getAdoctor)

module.exports = router