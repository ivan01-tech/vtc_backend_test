const express = require('express')
const { registerController } = require('../controllers/registerController.js')


const registerRoute = express.Router()

registerRoute.post("/", registerController)

module.exports = registerRoute
