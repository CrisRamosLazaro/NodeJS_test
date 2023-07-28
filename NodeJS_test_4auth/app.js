require('dotenv').config()

require("./db")

const express = require('express')
const app = express()

const sessionConfig = require('./config/session.config')
const appConfig = require('./config/index')

sessionConfig(app)
appConfig(app)

const router = require('./routes/routes')


app.use(router)

module.exports = app


