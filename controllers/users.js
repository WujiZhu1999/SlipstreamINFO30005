var users = require("../models/users.js");

const createUser = (req, res) => {
    if (req.body.name == null || req.body.userName == null || req.body.password == null){
        res.status(400)
        res.send("incomplete data");
        return;
    }

    if (users.find((user) => user.userName === req.body.userName) != null) {
        res.status(400)
        res.send("user already exists");
        return;
    }

    users.push({
        "name":req.body.name,
        "userName":req.body.userName,
        "passsword":req.body.password,
        "data":{
            "totalDistance": 0,
            "energySaved": 0, //in KJ
            "carbonSaved": 0, //in KG
            "streak": 0 // days
        }
    });
    res.send()
}

const deleteUser = (req, res) => {
    if (users.find((user) => user.userName === req.params.userName) == null){
        res.status(400)
        res.send("user does not exist " + req.params.userName);
        return;
    }

    users.splice(users.findIndex((user) => user.userName === req.params.userName), 1);
    res.send()
}

const getUser = (req, res) => {
    if (users.find((user) => user.userName === req.params.userName) == null){
        res.status(400)
        res.send("user does not exist " + req.body.userName);
        return;
    }

    res.send(users.find((user) => user.userName === req.params.userName))
}

const changeUser = (req, res) => {
    if (users.find((user) => user.userName === req.params.userName) == null){
        res.status(400);
        res.send("user does not exist " + req.body.userName);
        return;
    }

    if (req.body.name == null && req.body.password == null && req.body.userName == null){
        res.status(400);
        res.send("cannot make no change");
    }


    var user = users.find((user) => user.userName === req.params.userName);

    if (req.body.name != null){
        user["name"] = req.body.name;
    }

    if (req.body.password != null){
        user["password"] = req.body.password;
    }

    if (req.body.userName != null){
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