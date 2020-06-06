const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
	{
		name: String,
		userName: String,
		password: String,
		data: {
			totalDistance: Number,
			energySaved: Number,
			carbonSaved: Number,
			streak: Number,
		},
	},
	{ versionKey: false },
);

const User = mongoose.model('users', userSchema, 'users');
module.exports = User;
