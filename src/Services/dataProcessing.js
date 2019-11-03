const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const _ = require('lodash')

const app = express()

app.use(fileUpload({
  createParentPath: true
}))

app.use(cors())
app.use(bodyParser.json)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))

async function uploadFile (req, res) {
  console.log('debut de lupload')
  try {
    if (!req.photo) {
      res.send(
        { status: false,
          message: 'No files uploaded'
        })
      console.log('no files')
    } else {
      let photo = req.photo
      photo.mv('./uploads/' + req.name)

      res.send({
        status: true,
        message: 'File is uploaded',
        data: {
          name: req.name,
          size: photo.size
        }
      })
      console.log('Files sended')
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.newPost = async function (req, res) {
  return uploadFile(req, res)
}
