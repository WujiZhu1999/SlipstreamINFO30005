const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//帖子
const uSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'users' }, //发布用户
		title: String, //标题
		content: String, //内容
		agreeNum: {
			type: Number,
			default: 0,
		}, //点赞
		commentNum: {
			type: Number,
			default: 0,
		}, //评论
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

module.exports = mongoose.model('article', uSchema);
