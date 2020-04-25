var friends = require("../models/friends.js");
var users = require("../models/users.js");

//get all pending friendrequests
const getFriendRequests = (req, res) => {
    if (req.session.user == null){
        res.status(400);
        res.send("not logged in");
    }

    var friendRequests = friends.filter(friend => friend["reciever"] === req.session.user && friend["accepted"] === false);

    res.send(friendRequests);
}

//send a new friend request
const sendFriendRequest = (req, res) => {
    if (req.session.user == null){
        res.status(400);
        res.send("not logged in");
        return;
    }

    if (users.find(user => user["userName"] === req.params.userName) == null){
        res.status(400);
        res.send("user does not exist");
        return;
    }

    //find all if there is already a friend request with the new friend
    var senderFriend = friends.find(friend => friend["sender"] === req.session.user && friend["reciever"] === req.params.userName);
    var recieverFriend = friends.find(friend => friend["reciever"] === req.session.user && friend["sender"] === req.params.userName);

    //if there is already a friend request you have recieved from them
    if (recieverFriend != null){
        if (recieverFriend["accepted"] == true){
            res.status(400);
            res.send("already friends");
            return;
        }

        recieverFriend["accepted"] = true
        res.send("request accepted");

    //if you have already send them a friend request
    } else if (senderFriend != null){
        if (senderFriend["accepted"] == true){
            res.status(400);
            res.send("already friends");
            return;
        } else {
            res.status(400);
            res.send("already sent a friend request");
            return;
        }
    //there is no existing friend request between you and them, send them a request
    } else {
        friends.push({
            "sender":req.session.user,
            "reciever":req.params.userName,
            "accepted":false
        })
        res.send(friends);
    }
}

//find all friends of user userName
function getFriends(userName){
    if (users.find(user => user["userName"] === userName) == null){
        return [];
    }

    var friendList = []

    for (user of users){
        if (friends.find(friend => friend["sender"] === userName && friend["reciever"] === user["userName"] && friend["accepted"] == true) != null){
            friendList.push(user["userName"]);
        } else if (friends.find(friend => friend["sender"] === user["userName"] && friend["reciever"] === userName && friend["accepted"] == true) != null){
            friendList.push(user["userName"]);
        }
    }

    return friendList;
}

module.exports = {
    getFriendRequests,
    sendFriendRequest,
    getFriends
}