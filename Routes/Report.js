const express = require('express');
const { addReport, getAreport, getAllReports, updateReport } = require('../controllers/Report');
const router = express.Router()

router.route('/').post(addReport)
router.route('/all').get(getAllReports)
router.route('/:id').get(getAreport).put(updateReport)


module.exports = router