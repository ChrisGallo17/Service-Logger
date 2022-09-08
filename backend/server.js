const express = require('express')
const colors = require('colors')
const {errorHandler} = require("./middleware/errorMiddleware")
// const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// connectDB()

const app = express()

app.use('/api/cars', require('./routes/getRoutes'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(errorHandler)


app.listen(5000, () => console.log(`Server started on port ${port}`))