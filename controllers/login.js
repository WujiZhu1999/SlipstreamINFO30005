var users = require("../models/users.js");
//add loginController.isLoggedIn, to the start of all nescesary routes 


const isLoggedIn = (req, res, next) => {
    if (req.session.user != null){
        next();
    } else {
        res.redirect("/");
    }
}

const getLogin = (req, res) => {
    if (req.session.user != null){
        res.redirect('/');
    }
    res.send("<h1>login screen</h1>");
}

const logIn = (req, res) => {
    if (req.body.userName == null || req.body.password == null){
        res.status(400);
        res.send("missing information");
        return;
    }

    if (users.find((user) => user.userName === req.body.userName) == null){
        res.status(400)
        res.send("login failed, make sure your username and password are spelled right");
        return;
    }
    var user = users.find((user) => user.userName === req.body.userName)
    if (user["password"] != req.body.password){
        res.status(400)
        res.send("login failed, make sure your username and password are spelled right");
        return;
    }

    req.session.user = user["userName"];

    if (req.body.from != null){
        res.redirect(from);
    } else {
        res.redirect('/');
    }

}

const logOut = (req, res) => {
    req.session.user = null;
    res.send();
}
module.exports = {
    isLoggedIn,
    getLogin,
    logIn,
    logOut
}