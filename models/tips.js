const mongoose = require('mongoose');
const tipsSchema = new mongoose.Schema(
	{
		tipNum: Number,
		title: String,
		body: String,
	},
	{ versionKey: false },
);

const Tips = mongoose.model('tips', tipsSchema, 'tips');
module.exports = Tips;

/*
	A tip system which give user safety tips
	tipNum -> identifier
	title -> tip title
	body -> tip Body
*/
