const express = require("express");
const mongoose = require('./src/databaseConnection/mongoose')
const http = require("http");
const dotenv = require('dotenv')
dotenv.config()

const app = express()

//mongodb Connection
mongoose.connect()
require('mongoose').set('debug',false)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes
app.use('/api/v1',require('./src/v1/routes/index'))

//server connection
const port = process.env.PORT
const server = http.createServer(app)

server.listen(port,(err)=>{
    console.log(`${process.env.APP} is running on port ${port}`)
})


