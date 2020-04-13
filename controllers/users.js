var users = require("../models/users.js");

const createUser = (req, res) => {
    if (req.query.name == null || req.query.username == null || req.query.password == null){
        res.send("incomplete data");
        return;
    }

    if (users.find((user) => user.username === req.query.username) != null) {
        res.send("user already exists");
        return;
    }

    users.push({
        "name":req.query.name,
        "username":req.query.username,
        "passsword":req.query.password
    });
    res.send(users);
}

module.exports = {createUser,};