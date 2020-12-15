const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/3000', { useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'nose_modules')))

const port = 3000
app.listen(port, function () {
    console.log(`Here we go in port ${port}`)
})