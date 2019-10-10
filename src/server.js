const express = require('express')

let app = express()

// Running Server Details.
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at %s:%s Port', host, port)
})

exports.getData = function (req, res) {
  console.log('result')
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('Hello')
  res.end()
  console.log('chemin complet')
})

app.post('/thank', function (req, res) {
  var reply = ''
  reply += 'Your name is' + req.body.user_name
  reply += 'Your E-mail id is' + req.body.user_mail
  res.send(reply)
})
