const express = require('express')
const dbEntry = require('./Services/DbConnexion')
const tokenGenerator = require('rand-token').uid
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const cors = require('cors')
const uuid = require('uuid/v4')

let app = express()

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(morgan('dev'))

app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))
app.use(session(
  { genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  secret: 'TopSecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
  }
))

app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}))

app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded())

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
  res.setHeader('Content-Type', 'text/json')
  var token = tokenGenerator(16)
  dbEntry.lookForToken(token)
  res.send({ token: token, newTok: token })
  res.end()
  console.log('chemin complet')
})

app.post('/newUser', async function (req, res) {
  console.log(req.body)
  var token = getAToken()
  console.log(token)
  const isAivaible = await dbEntry.UsernamaAvaible(req.body.name)
  console.log(isAivaible)
  if (isAivaible) {
    if (dbEntry.createProfile(req.body.name, req.body.mail, req.body.password, token)) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/text')
      res.send('OK')
      res.end()
    } else {
      res.send('UserName Already Exist')
    }
  }
})

app.post('/newCaption', async function (req, res) {
  console.log(req.body)
  var token = getAToken()
  console.log(token)
  const isAivaible = await dbEntry.UsernamaAvaible(req.body.name)
  console.log(isAivaible)
  if (isAivaible) {
    if (dbEntry.createProfile(req.body.name, req.body.mail, req.body.password, token)) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/text')
      res.send('OK')
      res.end()
    } else {
      res.send('UserName Already Exist')
    }
  }
})

app.post('/newAlbum', async function (req, res) {
  console.log(req.body)
  var token = getAToken()
  console.log(token)
  const isAivaible = await dbEntry.UsernamaAvaible(req.body.name)
  console.log(isAivaible)
  if (isAivaible) {
    if (dbEntry.createProfile(req.body.name, req.body.mail, req.body.password, token)) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/text')
      res.send('OK')
      res.end()
    } else {
      res.send('UserName Already Exist')
    }
  }
})

app.post('/newPost', async function (req, res) {
  console.log(req.body)
  var token = getAToken()
  console.log(token)
  const isAivaible = await dbEntry.UsernamaAvaible(req.body.name)
  console.log(isAivaible)
  if (isAivaible) {
    if (dbEntry.createProfile(req.body.name, req.body.mail, req.body.password, token)) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/text')
      res.send('OK')
      res.end()
    } else {
      res.send('UserName Already Exist')
    }
  }
})

app.post('/connexion', async function (req, res) {
  console.log(req.body)
  var token = getAToken()
  console.log(token)
  if (!req.session.userId) {
    const query = await dbEntry.connection(req.body.name, req.body.password)
    console.log('cest la ' + query)
    if (query) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/text')
      res.send({ message: 'OK', token: token })
      res.end()
      req.session.name = req.body.name
      req.session.user_id = token
      console.log('envoi fait')
    } else {
      res.statusCode = 201
      res.setHeader('Content-Type', 'text/text')
      res.send({ message: 'No username or password', token: token, status: '2' })
      res.end()
      console.log('envoi fait')
    }
  }
  console.log(req.session)
})
app.post('/deco', function (req, res) {
  console.log(req.session)
  console.log(req.session.user_id)
  // if (!req.session.user_id) {
  //   res.status(401)
  //   res.json({
  //     message: 'you are already disconected'
  //   })
  // } else {
  var user = { Username: '', password: '' }
  req.session.user_id = 0
  req.session.username = ''
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/text')
  res.send('OK')
  res.end()
  user.Username = ''
  user.password = ''
})

function getAToken () {
  var token = tokenGenerator(16)
  return token
}

app.post('/thank', function (req, res) {
  var reply = ''
  reply += 'Your name is' + req.body.user_name
  reply += 'Your E-mail id is' + req.body.user_mail
  res.send(reply)
})
