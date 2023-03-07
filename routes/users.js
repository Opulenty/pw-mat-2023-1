const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.post('/', controller.create)
router.get('/', controller.retrieve)
<<<<<<< HEAD
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
=======

module.exports = router
>>>>>>> 650ee2f4e47e1910ca3c742cd6075db8316edd75
