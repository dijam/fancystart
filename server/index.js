'use strict'

var express, app

express = require('express')
app = express()

app.use(express.static(__dirname + '/../public/'))

app.get('/', function (req, res) {
  res.render('index.html')
})

var server = app.listen(3000, function () {
  var host, port

  host = server.address().address
  port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
