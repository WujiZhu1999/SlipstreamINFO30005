var users = require("../models/users.js");

//register a new user
const createUser = (req, res) => {
    //if the form is incomplete, send an error
    if (req.body.name == null || req.body.userName == null || req.body.password == null){
        res.status(400)
        res.send("incomplete data");
        return;
    }

    //if the user already exists, senda na error
    if (users.find((user) => user.userName === req.body.userName) != null) {
        res.status(400)
        res.send("user already exists");
        return;
    }

    //add the user to the database
    users.push({
        "name":req.body.name,
        "userName":req.body.userName,
        "passsword":req.body.password,
        "data":{
            "totalDistance": 0, //in km
            "energySaved": 0, //in kj
            "carbonSaved": 0, //in kg
            "streak": 0 // days
        }
    });
    res.send()
}

//delete a user of the chosen name
const deleteUser = (req, res) => {
    //if the user doesnt exist, send an error
    if (users.find((user) => user.userName === req.params.userName) == null){
        res.status(400)
        res.send("user does not exist " + req.params.userName);
        return;
    }

    users.splice(users.findIndex((user) => user.userName === req.params.userName), 1);
    res.send()
}

//fetch a users information, but not all the information (ie not password)
const getUser = (req, res) => {
    if (users.find((user) => user.userName === req.params.userName) == null){
        res.status(400)
        res.send("user does not exist " + req.body.userName);
        return;
    }

    res.send(users.find((user) => user.userName === req.params.userName))
}

//edit a user, if they change their information
const changeUser = (req, res) => {
    //if the user doesnt exist, send an error
    if (users.find((user) => user.userName === req.params.userName) == null){
        res.status(400);
        res.send("user does not exist " + req.body.userName);
        return;
    }

    //if there is no change, send an error
    if (req.body.name == null && req.body.password == null && req.body.userName == null){
        res.status(400);
        res.send("cannot make no change");
    }

    //the user to be changed
    var user = users.find((user) => user.userName === req.params.userName);

    if (req.body.name != null){
        user["name"] = req.body.name;
    }

    if (req.body.password != null){
        user["password"] = req.body.password;
    }

    if (req.body.userName != null){
        //if there already exists a user with the userName, send an error
        if (users.find((user) => user.userName === req.body.userName) != null){
            res.status(400);
            res.send("can't change username, user already exists");
            return;
        }
        user["userName"] = req.body.userName;
    }

    res.send(user);
}

module.exports = {
    createUser,
    deleteUser,
    getUser,
    changeUser
};