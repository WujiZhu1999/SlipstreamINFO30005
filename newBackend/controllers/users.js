var users = require("../models/users.js");
const mongoose = require("mongoose");
const User = mongoose.model("users");

//register a new user
const createUser = async (req, res) => {
    //if the form is incomplete, send an error
    try{
        if (req.body.name && req.body.userName && req.body.password){
            const _had = await User.findOne({"userName":req.body.userName});
            if(_had){
                res.status(400);
                return res.send("User already exists.");
            }
            else{
                const _new  = await User.create({
                    "name":req.body.name,
                    "userName":req.body.userName,
                    "password":req.body.password,
                    "data":{
                        "totalDistance": 0,
                        "energySaved": 0,
                        "carbonSaved": 0,
                        "streak": 0
                    }
                });
                return res.send(_new);
            }
        }
        else{
            res.status(400);
            return res.send("Incomlete Data.");
        }
    }catch(err){
        res.status(400);
        return res.send("Database failed. Create User Failed");
    }
}

//delete a user of the chosen name
const deleteUser = async (req, res) => {
    if(req.body.userName!=req.session.user){return res.send("Not authorized.");}
    try{
        if(!req.params.userName){
            res.status(400);
            return res.send("userNameNotGiven");
        }
        else{
            await User.remove({"userName":req.params.userName});
            return res.send("Removed: "+req.params.userName);
        }
    }catch(err){
        res.status(400);
        return res.send("Database query failed. Delete User Failed");
    }
}

//fetch a users information, but not all the information (ie not password)
const getUser = async (req, res) => {
    try{ 
        const ret = await User.findOne({"userName":req.params.userName});
        if(ret){
            return res.send(ret);
        }
        else{
            return res.send("No such user found.");
        }
    }catch(err){
        res.status(400);
        return res.send("Database query failed. Find User Failed");
    }
}

//edit a user, if they change their information
const changeUser = async (req, res) => {
    try{
        if(!req.body.userName){res.status(400);return res.send("UserNameNotGiven");}
        if(req.body.userName!=req.session.user){return res.send("Not authorized.");}
        const ret = await User.findOne({"userName":req.body.userName});
        if(!ret){
            res.status(400);
            return res.send("user does not exist " + req.body.userName);
        }

        var _new = {};
        if(req.body.name){_new["name"] = req.body.name};
        if(req.body.password){_new["password"] = req.body.password};
        const update = await User.findOneAndUpdate({"userName":req.body.userName},_new);
        return res.send(update); 
    }catch(err){
        res.status(400);
        return res.send("Database query failed. Change User Failed");
    }
}

module.exports = {
    createUser,
    deleteUser,
    getUser,
    changeUser
};