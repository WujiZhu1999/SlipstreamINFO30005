const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//评论
const uSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'users' }, //发布用户
		article: { type: Schema.Types.ObjectId, ref: 'article' },
		content: String, //内容
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

module.exports = mongoose.model('Comment', uSchema);
