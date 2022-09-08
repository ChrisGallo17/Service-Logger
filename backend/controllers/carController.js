const asyncHandler = require("express-async-handler")
// @desc    Get car
// @route   GET /api/cars
// @access  Private
const getCar = asyncHandler(async (req, res) => {
  res.status(200).json({message: "Got a car"})
})

// @desc    Set car
// @route   POST /api/cars
// @access  Private
const setCar = asyncHandler(async (req, res) => {
  if (!req.body.text){
    res.status(400)
    throw new Error("Please add a text field")
  }
  res.status(200).json({message: "Created a car"})
})

// @desc    Update car
// @route   PUT /api/cars/:id
// @access  Private
const updateCar = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update car ${req.params.id}`})
})

// @desc    Delete car
// @route   DELETE /api/cars/:id
// @access  Private
const deleteCar = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete car ${req.params.id}`})
})

module.exports = {
  getCar, setCar, updateCar, deleteCar
}