const express = require("express")
const logger = require("morgan")
const cookieParser = require("cookie-parser")

const path = require("path")

module.exports = (server) => {
  server.use(logger("dev"))

  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))
  server.use(cookieParser())
}
