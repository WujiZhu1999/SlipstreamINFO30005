
var route = require("../models/route.js"); // need to change for to use
var fakeAPI = require("../models/mapAPI.js");

var API = require("../models/mapAPI.js"); // need to change for to use
var users = require("../models/users.js");

//Author: Thy Le
//Student Numbe : 980822
//method return the API general info
const getMap = (req, res) => {
    return res.send("Map");
}

//Author: Thy Le
//Student Numbe : 980822
//method to create an initial route from information from API
const createRoute = (req, res) => {
    //if not found -> adding (create a route)
    route.push({
        "origin": fakeAPI[0].from,
        "destination":fakeAPI[0].to,
        "distance": Math.random(),
        "duration": Math.random(),
        "completed": []
    });
    return res.send(route.find((route) => route.origin === fakeAPI[0].from && route.destination === fakeAPI[0].to));
}

//Author: Thy Le
//Student Numbe : 980822
//method a delete route that specificied with user, to and from
const deleteRoute = (req, res) => {
    if (route.find((route) => route.user === req.session.user && route.destination === req.body.destination && route.origin === req.body.origin) == null){
        res.status(400)
        res.send("this route not exist");
        return;
    }
    let index = route.findIndex(route => route.user === req.session.user && route.origin === req.body.origin && route.destination === req.body.destination);
    route.splice(index, 1);
    return;
}

//Author: Thy Le
//Student Numbe : 980822
//method return a route that specificied with user, to and from
const getRoute = (req, res) => {
    //missing params
    if (req.body.origin == null || req.body.destination == null){
        res.status(400)
        res.send("incomplete data, missing origin or destination point");
        return;
    }
    //not found to get
    else if (route.find((route) => route.user === req.session.user && route.destination === req.body.destination && route.origin === req.body.origin) == null){
        res.status(400)
        res.send("this route not exist for this users");
        return;
    }
    //return route found
    return res.send(route.find((route) => route.user === req.session.user && route.origin === req.body.origin && route.destination === req.body.destination));
}

//Author: Thy Le
//Student Numbe : 980822
//method change a route specificied with user, to and from
const changeRoute = (req, res) => {
    //no info given to change
    if (req.body.origin == null && req.body.destination == null){
        res.status(400);
        res.send("no info of changes");
    }

    //does not found that route
    else if (route.find((route) => route.user === req.session.user && route.destination === req.body.destination && route.origin === req.body.origin) == null){
        res.status(400);
        res.send("route does not exist");
        return;
    }

    var temp = route.find((route) => route.user === req.session.user && route.origin === req.body.origin && route.destination === req.body.destination);
    if (req.body.distance != null){
        temp["distance"] = parseInt(req.body.distance);
    }

    if (req.body.duration != null){
        temp["duration"] = parseInt(req.body.duration);
    }

    if (req.body.completed != null){
        temp["completed"].push(req.body.completed);
    }
    return res.send(temp);
}

//finish a route
const finishRoute = (req, res) =>{
    if(req.body.user){
        var _user = users.find((user) => user.userName == req.body.user);
        if (_user == null){
            return res.send("No user match.");
        }
        else if(req.body.distance){
            _user.data.totalDistance += req.body.distance;
            _user.data.energySaved += 1000*req.body.distance;
            _user.data.carbonSaved += 0.21*req.body.distance/1000;
        }
        return res.send(_user);
    }
    else{
        res.status(400);
        return res.send("Error");
    }
}

module.exports = {
    getMap,
    getRoute,
    createRoute,
    changeRoute,
    deleteRoute,
    finishRoute
};
