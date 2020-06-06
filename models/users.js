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

/*
	name -> nickname
	userName -> identifier
	password -> password
	data-> about the personal record
		-> totalDistance: totalDistance based on meters for historical rides
		-> energySaved: energy saved in carbon dioxide grams
		-> streak: total counting for finished routes(enable multiple counting for same route)
*/
