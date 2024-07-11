const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const { protect } = require('../middlewares/auth')

router.get('/profile',protect , userController.profile)
router.put('/profile', protect, userController.updateProfile)

module.exports = router