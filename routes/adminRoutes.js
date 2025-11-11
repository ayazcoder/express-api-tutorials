const express = require ("express")
const { usersController } = require("../controller/users")
const { schoolsController } = require("../controller/schools")
const { studentsController } = require("../controller/students")
const { teachersController } = require("../controller/teachers")
const { updateUserController, deleteUserController, getUserById } = require("../controller/signup")

const router = express.Router()

router.get('/users', usersController)
router.put('/users/:id', updateUserController)
router.delete('/users/:id', deleteUserController)
router.get('/users/:id', getUserById)

router.get('/schools', schoolsController)
router.get('/students', studentsController)
router.get('/teachers', teachersController)


module.exports = router