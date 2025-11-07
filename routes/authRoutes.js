const express = require('express')
const { loginController } = require('../controller/login')
const { signupController } = require('../controller/signup')

const router = express.Router()

router.get('/login', loginController)
router.get('/signup', signupController)

module.exports = router