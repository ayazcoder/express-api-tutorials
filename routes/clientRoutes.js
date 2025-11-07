const express = require('express')
const { addController } = require('../controller/add')
const router = express.Router()

router.post('/add', addController)

module.exports = router