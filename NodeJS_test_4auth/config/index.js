const express = require("express")
const logger = require("morgan")
const cookieParser = require("cookie-parser")

const path = require("path")

module.exports = (app) => {
  app.use(logger("dev"))
  app.use(cookieParser())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
}
