const mongoose = require('mongoose');
const User = mongoose.model('users');
const Friend = mongoose.model('friends');
//Finds all current friends of the currently logged in user
async function friends(req) {
	try {
		var friends = [];
		var found_friends = await Friend.find({
			receiver: req.session.user,
			status: 'ACCEPTED',
		});

		for (friend of found_friends) {
			friends.push(friend.sender);
		}

		found_friends = await Friend.find({
			sender: req.session.user,
			status: 'ACCEPTED',
		});

		for (friend of found_friends) {
			friends.push(friend.receiver);
		}

		return friends;
	} catch (err) {
		return 'Database Failure when getting friends';
	}
}

//Finds all the current  request of the currenlty logged in user
async function requests(req) {
	try {
		var requestList = [];
		var found_requests = await Friend.find({
			receiver: req.session.user,
			status: 'PENDING',
		});

		for (request of found_requests) {
			requestList.push(request.sender);
		}
		console.log(requestList);
		return requestList;
	} catch (err) {
		return 'Database Failure when getting friend requests';
	}
}

//Gets all the current friends and friend requests of the current user
const getFriends = async (req, res) => {
	res.render('friends/friends', {
		title: 'Friends',
		active: 'Friends',
		userName: req.session.user,
		friends: await friends(req),
		requests: await requests(req),
	});
};

//Sends a friend request to another user
const sendFriendRequest = async (req, res) => {
	try {
		//checks if there is valid and all the nessesarying information
		if (!req.body.receiver) {
			res.status(400);
			return res.render('error', {
				error: 'Missing receiver',
				redirect: '/Friends',
			});
		}
		if (req.body.receiver === req.session.user) {
			res.status(400);
			return res.render('error', {
				error: "Can't be friends with yourself",
				redirect: '/Friends',
			});
		}
		const found_me = await User.findOne({ userName: req.session.user });
		if (!found_me) {
			res.status(400);
			return res.render('error', {
				error: "Server Error: Can't get your personal profile",
				redirect: '/Friends',
			});
		}
		const found_them = await User.findOne({ userName: req.body.receiver });
		if (!found_them) {
			res.status(400);
			return res.render('error', {
				error: 'No such user, make sure their username is spelled correctly',
				redirect: '/Friends',
			});
		}

		//checks whether a friend request has laready been sent
		var request = await Friend.findOne({
			sender: req.session.user,
			receiver: req.body.receiver,
		});

		if (!request) {
			request = await Friend.findOne({
				receiver: req.session.user,
				sender: req.body.receiver,
			});

			if (!request) {
				//creates new friend request that is pending
				await Friend.create({
					sender: req.session.user,
					receiver: req.body.receiver,
					status: 'PENDING',
				});
				console.log('create new request');
				return res.redirect('/Friends');
			} else {
				// accepts a friend request if already requested
				if (request.status == 'PENDING') {
					console.log('accept request');
					console.log(
						await Friend.findOneAndUpdate(
							{ sender: req.body.receiver, receiver: req.session.user },
							{ status: 'ACCEPTED' },
						),
					);
					return res.redirect('/Friends');
				} else {
					return res.render('error', {
						error: 'You are already friends',
						redirect: '/Friends',
					});
				}
			}
		}

		return res.render('error', {
			error: 'you have already sent a request',
			redirect: '/Friends',
		});
	} catch (err) {
		return res.render('error', {
			error: 'Server Error: Failed to send friend request',
			redirect: '/Friends',
		});
	}
};

//Deletes a friend request
const deleteFriendRequest = async (req, res) => {
	try {
		//finds a current friend relationship
		var found_friend = await Friend.findOne({
			sender: req.session.user,
			receiver: req.body.friend,
			status: 'ACCEPTED',
		});

		if (!found_friend) {
			found_friend = await Friend.findOne({
				sender: req.body.friend,
				receiver: req.session.user,
				status: 'ACCEPTED',
			});

			if (!found_friend) {
				res.status(400);
				return res.render('error', {
					error: 'You are already not friends',
					redirect: '/Friends',
				});
			}
		}

		//deletes relationship
		await Friend.deleteOne({
			sender: found_friend.sender,
			receiver: found_friend.receiver,
		});

		return res.redirect('/Friends');
	} catch (err) {
		res.status(400);
		return res.render('error', {
			error: 'Server Error: Failed to delete friend request',
			redirect: '/Friends',
		});
	}
};

//Reject a friend request
const rejectFriendRequest = async (req, res) => {
	try {
		if (!req.body.sender) {
			return res.render('error', {
				error: 'Sender was not specified',
				redirect: '/Friends',
			});
		}

		var found_request = await Friend.findOne({
			sender: req.body.sender,
			receiver: req.session.user,
			status: 'PENDING',
		});
		if (!found_request) {
			res.status(400);
			return res.render('error', {
				error: 'No such request',
				redirect: '/Friends',
			});
		} else {
			//deletes freind request
			await Friend.deleteOne({
				sender: req.body.sender,
				receiver: req.session.user,
			});

			return res.redirect('/Friends');
		}
	} catch (err) {
		res.status(400);
		return res.render('error', {
			error: 'Server Side: Failed to reject friend request',
			redirect: '/Friends',
		});
	}
};

module.exports = {
	getFriends,
	sendFriendRequest,
	getFriends,
	rejectFriendRequest,
	deleteFriendRequest,
};
