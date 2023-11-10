const express = require('express')
const  authController  = require('../controllers/authController')


const authRoute = express.Router()

authRoute.post("/", authController.login)
authRoute.post("/logout", authController.logout)

module.exports = authRoute
