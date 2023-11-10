const express = require("express")
const rootRoute = express.Router()


rootRoute.get("/", function (req, res) {
	res.end("welcome vtc test")
})

module.exports = rootRoute