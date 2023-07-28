const express = require('express')
const sessionConfig = require('./config/session.config')
const app = express()

const router = require('./routes/routes')

sessionConfig(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

module.exports = app


