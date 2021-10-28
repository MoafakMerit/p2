const express = require('express');
const { addGuest, getAllGuests } = require('../controllers/Guest');
const router = express.Router()

router.route('/signup').post(addGuest)
//router.route('/:id').get().put()

module.exports = router