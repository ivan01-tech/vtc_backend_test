const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
	email: {
		type: String,
		require: false,
	},
	password: {
		type: String,
		require: true
	},
	phone: { type: String, require: true },

})

module.exports = mongoose.models.User || mongoose.model("User", UserModel)