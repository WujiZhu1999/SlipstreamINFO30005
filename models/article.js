const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema(
	{
		articleNum: Number,
		title: String,
		body: String,
		author: String,
		time: String,
		comments: Array,
		edit: Boolean,
	},
	{ versionKey: false },
);

const Article = mongoose.model('article', articleSchema, 'article');
module.exports = Article;

/*
	model for articles
	articleNum -> identifier
	title/body/author -> as name defined
	time: last modify time
	comments -> a list of comments peopel made on this article
	edit -> if this article has been edited again after its introduced
*/
