const mongoose = require("mongoose");
const User = mongoose.model("users");
const Friend = mongoose.model("friends");

const getFriends = async (req, res) =>{
    try{
        var _friends = await Friend.find({
            "receiver": req.session.user,
            "status": "ACCEPTED"
        });

        _friends += await Friend.find({
            "sender": req.session.user,
            "status": "ACCEPTED"
        });

        const _requests = await Friend.find({
            "reciever": req.session.user,
            "status": "PENDING"
        });

        var _Friendlist = [];
        for(user of _friends){
            if (user["sender"] == req.session.user){
                _Friendlist.push(user["reciever"])
            } else {
                _Friendlist.push(user["sender"]);
            }
        }
        const _friends_detail = await User.find({
            "userName":{ $in: _Friendlist}
        });

        var _requestList = [];
        for(user of _friends){
            _requestList.push(user["sender"])
        }
        const _request_detail = await User.find({
            "userName":{ $in: _Friendlist}
        });
        //send _request_detail
        return res.send(_friends_detail);
    }catch(err){
        res.status(400);
        return res.send("Database Failure when getting friends ");
    }
}


const sendFriendRequest = async (req, res) => {
    try{
        if(!req.body.receiver){
            res.status(400);
            return res.send("Missing receiver.");
        }
        if(req.body.receiver === req.session.user){
            res.status(400);
            return res.send("Can't be friend to yourself");
        }
        const _me = await User.findOne({"userName":req.session.user});
        if(!_me){
            res.status(400);
            return res.send("Can't get your personal profile.");
        }
        const _them = await User.findOne({"userName":req.body.receiver});
        if(!_them){
            res.status(400);
            return res.send("No such user, make sure your search name is correct.")
        }

        const _request = await Friend.findOne({
            "sender": _them["userName"],
            "receiver": _me["userName"]
        });

        if (_request){
            if (_request["status"] == "PENDING" || _request["status"] == "REJECTED"){
                const result1 = await  Friend.findOneAndUpdate({"sender": _them["userName"], "receiver": req.session.user}, {"status":"ACCEPTED"})
            } else if (_request["status"] == "ACCEPTED"){
                res.status(400)
                res.send("your already friends, you idiot")
            }else if (_request["status"] == "DELETED"){
                const result1 = await  Friend.findOneAndUpdate({"sender": _them["userName"], "receiver": req.session.user}, {"status":"PENDING"})
            }
        }

        
        const _had = await Friend.findOne({
            "sender": _me["userName"],
            "receiver": _them["userName"]
        });
        if(_had){
            if(_had["status"]=="PENDING"){
                res.status(400);
                return res.send("Request Send already.");
            }else if(_had["status"]=="ACCEPTED"){
                res.status(400);
                return res.send("FRIENDS already");
            }
        }
        const _newFriend = await Friend.create({
            "sender": _me["userName"],
            "receiver": _them["userName"],
            "status": "PENDING"
        });
        return res.send(_newFriend);
    }catch(err){
        res.status(400);
        return res.send("Database Failure when sending friend request");
    }
}

const deleteFriendRequest = async (req, res) => {
    try{
        var _friend = await Friend.findOne({
            "sender":req.session.user,
            "receiver":req.params.userName,
            "status":"ACCEPTED"
        });

        if(!_friend){
            _friend = await Friend.findOne({
                "sender":req.params.userName,
                "receiver":req.session.user,
                "status":"ACCEPTED"
            });

            if(!_friend){
                res.session(400)
                return res.send("Not friend at all.");
            }
        }
        const _result = await Friend.findOneAndUpdate({
            "sender":_friend["sender"],
            "receiver":_friend["reciever"],
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

const rejectFriendRequest = async (req, res) => {
    try{
        if(!req.body.sender ){
            return res.send("sender/choice not provided");
        }
        var _request = await Friend.findOne({
            "sender":req.body.sender,
            "receiver":req.session.user,
            "status":"PENDING"
        });
        if(!_request){
            res.status(400);
            return res.send("No such request");
        }else{
            const _update = await Friend.findOneAndUpdate({
            "sender":req.body.sender,
            "receiver":req.session.user,
            "status":"PENDING"
            },
            {
                "status":"REJECTED"
            });
            return res.send(_update);
        }
    }catch(err){
        res.status(400);
        return res.send("Database Failure when dealing friend request");
    }
}


module.exports = {
    getFriends,
    sendFriendRequest,
    getFriends,
    rejectFriendRequest,
    deleteFriendRequest
}