var route = require("../models/route.js"); // need to change for to use
var fakeAPI = require("../models/mapAPI.js")
var routeTo;
var routeFrom;
var toID;
var fromID;

//get API info - check
const getMap = (req, res) => {
    routeTo = fakeAPI[0].to;
    routeFrom = fakeAPI[0].from;
    toID = fakeAPI[0].toID;
    fromID = fakeAPI[0].fromID;
    res.send("API to:" + routeTo + ", ID: " + toID + ", from:" + routeFrom + ", ID: " + fromID);
}

//delete - check
const deleteRoute = (req, res) => {
    if (route.find((route) => route.user === req.session.user && route.destination === req.query.destination && route.origin === req.query.origin) == null){
        res.status(400)
        res.send("this route not exist");
        return;
    }
    let index = route.findIndex(
        route => route.origin === req.body.origin 
                && route.destination === req.body.destination
    );
    route.splice(index, 1);
    res.send()
}

//get method - check
const getRoute = (req, res) => {
    //missing params
    if (req.query.origin == null || req.query.destination == null){
        res.status(400)
        res.send("incomplete data, missing origin or destination point");
        return;
    }
    //not found to get
    if (route.find((route) => route.user === req.session.user && route.destination === req.query.destination && route.origin === req.query.origin) == null){
        res.status(400)
        res.send("this route not exist for this users");
        return;
    }
    //print out route found
    res.send(route.find((route) => route.origin === req.query.origin && route.destination === req.query.destination));
}

//post method - check
const changeRoute = (req, res) => {
    //no info given to change
    if (req.body.origin == null && req.body.destination == null){
        res.status(400);
        res.send("no info of changes");
    }

    //does not found that route
    if (route.find((route) => route.user === req.session.user && route.destination === req.query.destination && route.origin === req.query.origin) == null){
        res.status(400);
        res.send("route does not exist");
        return;
    }

    var temp = route.find((route) => route.origin === req.body.origin && route.destination === req.body.destination);
    if (req.body.distance != null){
        temp["distance"] = parseInt(req.body.distance);
    }

    if (req.body.duration != null){
        temp["duration"] = parseInt(req.body.duration);
    }

    if (req.body.completed != null){
        temp["completed"] = parseInt(req.body.completed);
    }
    res.send(temp);
}

module.exports = {
    getMap,
    getRoute,
    //createMap,
    changeRoute,
    deleteRoute
};