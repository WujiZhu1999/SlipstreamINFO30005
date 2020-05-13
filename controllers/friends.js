const mongoose = require("mongoose");
const User = mongoose.model("users");
const Friend = mongoose.model("friends");

async function friends(req) {
    try{
        var friends = []
        var _friends = await Friend.find({
            "receiver": req.session.user,
            "status": "ACCEPTED"
        });

        for (friend of _friends){
            friends.push(friend.sender);
        }

        _friends = await Friend.find({
            "sender": req.session.user,
            "status": "ACCEPTED"
        });

        for (friend of _friends){
            friends.push(friend.receiver);
        }

        return friends
    }catch(err){
        return "Database Failure when getting friends"
    }
}

async function requests(req){
    try{
        var requestList = [];
        var _requests = await Friend.find({
            "receiver": req.session.user,
            "status": "PENDING"
        });

        for (request of _requests){
            requestList.push(request.sender);
        }
        console.log(requestList)
        return requestList


    } catch(err){
        return "Database Failure when getting friend requests"
    }
    
}

const getFriends = async (req, res) =>{
    res.render("friends/friends", {
        title:"Friends",
        active: "Friends",
        userName: req.session.user,
        friends: await friends(req),
        requests: await requests(req)
    })
}


const sendFriendRequest = async (req, res) => {
    try {
        if(!req.body.receiver){
            res.status(400);
            return res.render("error", {
                error: "Missing receiver",
                redirect: "/Friends"
            });
        }
        if(req.body.receiver === req.session.user){
            res.status(400);
            return res.render("error", {
                error: "Can't be friends with yourself",
                redirect: "/Friends"
            });
        }
        const _me = await User.findOne({"userName":req.session.user});
        if(!_me){
            res.status(400);
            return res.render("error", {
                error: "Server Error: Can't get your personal profile",
                redirect: "/Friends"
            });
        }
        const _them = await User.findOne({"userName":req.body.receiver});
        if(!_them){
            res.status(400);
            return res.render("error", {
                error: "No such user, make sure their username is spelled correctly",
                redirect: "/Friends"
            });
        }

        var request = await Friend.findOne({"sender": req.session.user, "receiver": req.body.receiver})

        if (!request){


            request = await Friend.findOne({"receiver": req.session.user, "sender": req.body.receiver})


            if (!request){
                await Friend.create({
                    "sender": req.session.user,
                    "receiver": req.body.receiver,
                    "status": "PENDING"
                });
                console.log("create new request")
                return res.redirect("/Friends");
            } else {
                if (request.status == "PENDING"){
                    console.log("accept request")
                    console.log(await Friend.findOneAndUpdate({"sender": req.body.receiver, "receiver": req.session.user}, {"status":"ACCEPTED"}));
                    return res.redirect("/Friends");
                } else {
                    return res.render("error", {
                        error: "You are already friends",
                        redirect: "/Friends"
                    });
                }
            }

        }

        return res.render("error", {
            error: "you have already sent a request",
            redirect: "/Friends"
        });
        
    } catch(err){
        return res.render("error", {
            error: err,
            redirect: "/Friends"
        });
    }
}


const deleteFriendRequest = async (req, res) => {
    try{
        
        var _friend = await Friend.findOne({
            "sender":req.session.user,
            "receiver":req.body.friend,
            "status":"ACCEPTED"
        });

        if(!_friend){
            _friend = await Friend.findOne({
                "sender":req.body.friend,
                "receiver":req.session.user,
                "status":"ACCEPTED"
            });

            if(!_friend){
                res.status(400)
                return res.render("error", {
                    error: "You are already not friends",
                    redirect: "/Friends"
                });
            }
        }
        await Friend.deleteOne({"sender":_friend.sender, "receiver":_friend.receiver})

        return res.redirect("/Friends")
    }catch(err){
        res.status(400);
        return res.render("error", {
            error: err,
            redirect: "/Friends"
        });
    }
}

const rejectFriendRequest = async (req, res) => {
    try{
        if(!req.body.sender){
            return res.render("error", {
                error: "sender not specified",
                redirect: "/Friends"
            });
        }


        var _request = await Friend.findOne({
            "sender":req.body.sender,
            "receiver":req.session.user,
            "status":"PENDING"
        });
        if(!_request){
            res.status(400);
            return res.render("error", {
                error: "No such request",
                redirect: "/Friends"
            });
        } else {
            await Friend.deleteOne({"sender":req.body.sender, "receiver":req.session.user})

            return res.redirect("/Friends");
        }
    }catch(err){
        res.status(400);
        return res.render("error", {
            error: err,
            redirect: "/Friends"
        });
    }
}


module.exports = {
    getFriends,
    sendFriendRequest,
    getFriends,
    rejectFriendRequest,
    deleteFriendRequest
}