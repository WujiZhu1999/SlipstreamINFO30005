var users = require("../models/users.js");
var friends = require("../models/friends.js");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Friend = mongoose.model("friends");

const getHomepage = async (req, res) => {
    try{
        var output = await getStats(req, res);
        if(output !== "USERNOTFOUND"){
            output += "<h1 align='center'>Leaderboard</h1>";
            output += "<br>";
            const _lead = await getLeaderboard(req, res);
            const _me = await User.findOne({"userName":req.session.user});
            if(!_me){
                return res.send("OHOHO No such user.");
            }
            _lead.push(_me); 
            _lead.sort((a,b)=>(a.data.totalDistance >= b.data.totalDistance) ? -1 : 1);
            output += _lead;
            return res.send(output);
        }else{
            return res.send("User info can't be found");
        }


    }catch(err){
        res.status(400);
        return res.send("Failed when dealing personal information.");
    }
}

async function getStats(req, res) {
    try{
        const user = await User.findOne({"userName":req.session.user});
        if(!user){
            return "USERNOTFOUND";
        }
        const output = "<dt>Your stats</dt> <dd>"+ user.name +"</dd><dd> DISTANCE: "+ user.data.totalDistance +"</dd><dd>"+user.data.energySaved+" KJ energy Saved </dd>"
                    + "<dd>"+ user.data.carbonSaved + " G carbon Saved </dd>" + "<dd>"+ user.data.streak + " days Streak </dd>"
        return output;
    }catch(err){
        res.status(400);
        return res.send("Failure when fetching personal information for main page(dashboard)");
    }
};

async function getLeaderboard(req, res){
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
        
        
        return _friends_detail;

    }catch(err){
        res.status(400);
        return res.send("Failure when getLeaderboard for friends.");
    }
}

async function returnLeaderboard(req, res) {
    try{
        
        const _friends = await Friend.find({
            "receiver": req.session.user,
            "status": "ACCEPTED"
        });
        const _me = await User.findOne({"userName":req.session.user});
        if(!_me){
            return res.send("OHOHO No such user.");
        }
        var _list = [];
        for(i in _friends){
            _list.push(_friends[i]["sender"]);
        }
        const _friends_detail = await User.find({
            "userName":{ $in: _list}
        });
        _friends_detail.push(_me);
        _friends_detail.sort((a,b)=>(a.data.totalDistance >= b.data.totalDistance) ? -1 : 1);
        return res.send(_friends_detail);

    }catch(err){
        res.status(400);
        return res.send("Failure when getDashboard for friends.");
    }
}
module.exports = {
    getHomepage,
    returnLeaderboard
};