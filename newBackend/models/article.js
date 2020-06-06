const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema(
	{
		articleNum: Number,
		title: String,
		body: String,
		author: String,
		comments: Array,
	},
	{ versionKey: false },
);

const Article = mongoose.model('article', articleSchema, 'article');
module.exports = Article;
