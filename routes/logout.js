const express = require("express")
const  logoutController  = require("../controllers/authController")

const logoutRouter = express.Router()

logoutRouter.get("/", logoutController.logout)

module.exports = logoutRouter
