const express = require ("express")
const { usersController } = require("../controller/users")
const { schoolsController } = require("../controller/schools")
const { studentsController } = require("../controller/students")
const { teachersController } = require("../controller/teachers")

const router = express.Router()

router.get('/users', usersController)
router.get('/schools', schoolsController)
router.get('/students', studentsController)
router.get('/teachers', teachersController)


module.exports = router