const express = require('express');
const { addUser, getAuser, getAllUsers, updateUser } = require('../controllers/User');
const router = express.Router()

router.route('/').post(addUser).get(getAllUsers)
router.route('/:id').get(getAuser).put(updateUser)

module.exports = router