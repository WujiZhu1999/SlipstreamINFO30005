const mongoose = require('mongoose');
const friendSchema = new mongoose.Schema(
	{
		sender: String,
		receiver: String,
		status: {
			type: String,
			enum: ['PENDING', 'ACCEPTED', 'REJECTED', 'DELETED'],
			default: 'PENDING',
		},
	},
	{ versionKey: false },
);

const Friends = mongoose.model('friends', friendSchema, 'friends');
module.exports = Friends;

/*
	friends model with a sender/receiver who are sendning friend request/finish firend request. Whichever role you are
	in this relationship, you are mutually friends anyway.
*/
