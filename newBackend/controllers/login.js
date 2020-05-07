var users = require("../models/users.js");
const mongoose = require("mongoose");
const User = mongoose.model("users");

const isLoggedIn = (req, res, next) => {
    if (req.session.user != null){
        next();
    } else {
        return res.redirect("/login");
    }
}

//get the login page
const getLogin = (req, res) => {
    //if theyre already logged in, redirect them to the home pages
    if (req.session.user != null){
        return res.redirect("/");
    }else{
        return res.send("<h1>login screen</h1>");
    }
}

//log into the website
const postLogIn = async (req, res) => {
    if(req.session.user){
        req.session.user = null;
    }
    //if the required information is missing, send an error
    if (req.body.userName == null || req.body.password == null){
        res.status(400);
        res.send("missing information");
        return;
    }
    try{
        const _new = await User.findOne({"userName":req.body.userName,"password":req.body.password});
        if(_new){
            req.session.user = req.body.userName;
            return res.redirect("/");
        }else{
            return res.send("Make sure your account and password are both correct.");
        }
        return res.send(_new);
    }catch(err){
        res.status(400);
        return res.send("Database failed. Login Failed");
    }
}


const getRegistration = (req, res) => {
    return res.send("Register Page")
}


//log a user out of the website
const postLogout = (req, res) => {
    req.session.user = null;
    return res.redirect("/login");
}

const getLogout = (req, res) =>{
    req.session.user = null;
    return res.redirect("/login");
}
module.exports = {
    isLoggedIn,
    getLogin,
    postLogIn,
    postLogout,
    getLogout,
    getRegistration
}