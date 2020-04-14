var users = require("../models/users.js");

const createUser = (req, res) => {
    if (req.body.name == null || req.body.username == null || req.body.password == null){
        res.send("incomplete data");
        res.send(req.body.name);
        res.send(req.body.username);
        res.send(req.body.password);
        return;
    }

    if (users.find((user) => user.username === req.body.username) != null) {
        res.send("user already exists");
        return;
    }

    users.push({
        "name":req.body.name,
        "username":req.body.username,
        "passsword":req.body.password
    });
    res.send(users);
}

module.exports = {createUser,};