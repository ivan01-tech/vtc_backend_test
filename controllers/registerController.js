const fspromises = require("node:fs/promises")
const path = require('node:path')
const bcript = require("bcrypt")
const usersSchema = require("../models/userModels.js");


const registerController = async function (req, res,) {
	const { email, password } = req.body
	if (!email || !password) return res.status(500).json({ "message": "server required email and password" })

	// ckeck for duplication
	const dupliated = usersSchema.find(password)
	if (dupliated) return res.status(409).json({ "message": "duplicated user on database" })// 409 for duplication

	// TODO must hash password
	const hashPassword = await bcript.hash(password, 10)

	console.log("hashPassword : ", hashPassword)

	const newUser = { "email": email, "password": hashPassword }
	console.log(newUser)
	try {

		usersSchema.updateOne()

		res.status(201).json({ "message": `new user created ${email}` })

	} catch (err) {

		console.log(err)
		res.status(500).json({ "message": `"can't create new user: ${err.message}` })

	}
}
module.exports = { registerController }