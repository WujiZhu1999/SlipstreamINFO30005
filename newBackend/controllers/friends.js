var friends = require("../models/friends.js");
var users = require("../models/users.js");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Friend = mongoose.model("friends");

const getFriends = async (req, res) =>{
	try{
		const _friends = await Friend.find({
			"receiver": req.session.user,
			"status": "ACCEPTED"
		});
		var _list = [];
		for(i in _friends){
			_list.push(_friends[i]["sender"]);
		}
		const _friends_detail = await User.find({
			"userName":{ $in: _list}
		});
		return res.send(_friends_detail);
	}catch(err){
		res.status(400);
		return res.send("Database Failure when getting friends ");
	}
}

const getFriendRequests = async (req, res) => {
	try{
		const _request = await Friend.find({
			"receiver": req.session.user,
			"status": "PENDING"
		});
		return res.send(_request);
	}catch(err){
		return res.send("Database Failure when fetching all friends request");
	}
}
const sendFriendRequest = async (req, res) => {
	try{
		if(!req.body.receiver){
			return res.send("Missing receiver.");
		}
		if(req.body.receiver === req.session.user){
			return res.send("Can't be friend to yourself");
		}
		const _sender = await User.findOne({"userName":req.session.user});
		if(!_sender){
			return res.send("Can't get your personal profile.");
		}
		const _receiver = await User.findOne({"userName":req.body.receiver});
		if(!_receiver){
			return res.send("No such user, make sure your search name is correct.")
		}
		
		const _had = await Friend.findOne({
			"sender": _sender["userName"],
			"receiver": _receiver["userName"]
		});
		if(_had){
			if(_had["status"]=="PENDING"){
				return res.send("Request Send already.");
			}else if(_had["status"]=="ACCEPTED"){
				return res.send("FRIENDS already");
			}
		}
		const _newFriend = await Friend.create({
			"sender": _sender["userName"],
			"receiver": _receiver["userName"],
			"status": "PENDING"
		});
		return res.send(_newFriend);
	}catch(err){
		res.status(400);
		return res.send("Database Failure when sending friend request");
	}
}

const dealFriendRequest = async (req, res) => {
	try{
		if(!req.body.sender || !req.body.choice){
			return res.send("sender/choice not provided");
		}
		var _request = await Friend.findOne({
			"sender":req.body.sender,
			"receiver":req.session.user,
			"status":"PENDING"
		});
		if(!_request){
			return res.send("No such request");
		}else if(req.body.choice != "ACCEPTED"  && req.body.choice != "REJECTED"){
			return res.send("INVALID dealing.")
		}else{
			const _update = await Friend.findOneAndUpdate({
			"sender":req.body.sender,
			"receiver":req.session.user,
			"status":"PENDING"
			},
			{
				"status":req.body.choice
			});
			return res.send(_update);
		}
	}catch(err){
		res.status(400);
		return res.send("Database Failure when dealing friend request");
	}
}

const deleteFriendRequest = async (req, res) => {
	try{
		var _friend = await Friend.findOne({
			"sender":req.session.user,
			"receiver":req.params.friend,
			"status":"ACCEPTED"
		});

		if(!_friend){
			return res.send("Not friend at all.");
		}
		const _result = await Friend.findOneAndUpdate({
			"sender":req.session.user,
			"receiver":req.params.friend,
			"status":"ACCEPTED"
		},
			{
				"status":"DELETED"
			}
		);
		return res.send(_result);
	}catch(err){
		res.status(400);
		return res.send("Database Failure when deleting friend request");
	}
}
module.exports = {
    sendFriendRequest,
    dealFriendRequest,
    deleteFriendRequest,
    getFriendRequests,
    getFriends

}