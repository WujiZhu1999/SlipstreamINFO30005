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
