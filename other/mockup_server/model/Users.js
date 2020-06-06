const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uSchema = new Schema(
	{
		nickname: String, //昵称
		userName: String, //账号
		password: String, //密码
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

module.exports = mongoose.model('users', uSchema);
