const express = require('express')
const router = express.Router()
const { getCar, setCar, updateCar, deleteCar } = require('../controllers/carController')

router.route('/').get(getCar).post(setCar)
router.route('/:id').put(updateCar).delete(deleteCar)

module.exports = router