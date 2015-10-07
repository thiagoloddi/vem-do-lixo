// Init node modules
http = require('http')
express = require('express')
nodemailer = require('nodemailer')
bodyParse = require('body-parser')
wellknown = require('nodemailer-wellknown')
mongoose = require('mongoose')
gmailConfig = wellknown('Gmail')
strftime = require('strftime')
fs = require('fs')
u = require('underscore')
joi = require('joi')

app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({
  extended: true
}))

app.engine('.ejs', require('ejs').__express)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/../views')

var port = process.env.PORT ? process.env.PORT : 3000
http.createServer(app).listen(port, null, null, function(){
  console.log('Listening to port ' + port)
})

app.use(express.static(__dirname + '/../views'))