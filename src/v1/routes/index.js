const express = require('express')
const app = express()

const shortnerRoute = require('./urlshortnerRoute')
app.use('/urlShortner',shortnerRoute)

module.exports = app;