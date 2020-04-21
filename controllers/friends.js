var friends = require("../models/friends.js");
var users = require("../models/users.js");

const getFriendRequests = (req, res) => {
    if (req.session.user == null){
        res.status(400);
        res.send("not logged in");
    }

    var friendRequests = friends.filter(friend => friend["reciever"] === req.session.user && friend["accepted"] === false);

    res.send(friendRequests);
}

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


    var senderFriend = friends.find(friend => friend["sender"] === req.session.user && friend["reciever"] === req.params.userName);
    var recieverFriend = friends.find(friend => friend["reciever"] === req.session.user && friend["sender"] === req.params.userName);

    if (recieverFriend != null){
        if (recieverFriend["accepted"] == true){
            res.status(400);
            res.send("already friends");
            return;
        }

        recieverFriend["accepted"] = true
        res.send("request accepted");
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
    } else {
        friends.push({
            "sender":req.session.user,
            "reciever":req.params.userName,
            "accepted":false
        })
        res.send(friends);
    }
}

module.exports = {
    getFriendRequests,
    sendFriendRequest
}