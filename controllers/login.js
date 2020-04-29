var users = require("../models/users.js");
//add loginController.isLoggedIn, to the start of all nescesary routes 

//the middleware that will be put on pages that require logging in
const isLoggedIn = (req, res, next) => {
    if (req.session.user != null){
        next();
    } else {
        res.redirect("/login");
    }
}

//get the login page
const getLogin = (req, res) => {
    //if theyre already logged in, redirect them to the home pages
    if (req.session.user != null){
        res.redirect("/");
    }
    res.send("<h1>login screen</h1>");
}

//log into the website
const logIn = (req, res) => {
    //if the required information is missing, send an error
    if (req.body.userName == null || req.body.password == null){
        res.status(400);
        res.send("missing information");
        return;
    }

    //if the user doesnt exist, send an error
    if (users.find((user) => user.userName === req.body.userName) == null){
        res.status(400)
        res.send("login failed, make sure your username and password are spelled right");
        return;
    }

    var user = users.find((user) => user.userName === req.body.userName)

    //if the password is wrong, send an error
    if (user["password"] != req.body.password){
        res.status(400)
        res.send("login failed, make sure your username and password are spelled right");
        return;
    }

    //set the user to the logged in user
    req.session.user = user["userName"];

    //if they came from a page in the website, send them their, otherwise send them to the home screen
    if (req.body.from != null){
        res.redirect(from);
    } else {
        res.redirect("/");
    }

}


const registration = (req, res) => {
    res.send("Register Page")
}

//log a user out of the website
const logOut = (req, res) => {
    req.session.user = null;
    res.send();
}
module.exports = {
    isLoggedIn,
    getLogin,
    logIn,
    logOut,
    registration
}