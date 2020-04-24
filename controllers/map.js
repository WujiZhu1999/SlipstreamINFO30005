var route = require("../models/route.js"); // need to change for to use

/*const getMap = (req, res) => {
    res.send("<h1>map</h1>");
}*/

//delete
const deleteRoute = (req, res) => {
    if (route.find((route) => route.user === req.session.user) == null 
            && route.find((route) => route.destination === req.body.destination) == null 
            && route.find((route) => route.origin === req.body.origin) == null){
        res.status(400)
        res.send("this route not exist");
        return;
    }
    let index = route.findIndex(
        route => route.origin === req.session.origin 
                && route.origin === req.body.origin 
                && route.destination === req.body.destination
    );
    route.splice(index, 1);
    res.send();
}

//get method
const getMapRoute = (req, res) => {
    //missing params
    if (req.body.to == null || req.body.from == null){
        res.status(400)
        res.send("incomplete data, missing origin or destination point");
        return;
    }
    //not found to get
    if (route.find((route) => route.user === req.session.user) == null 
            && route.find((route) => route.destination === req.body.destination) == null 
            && route.find((route) => route.origin === req.body.origin) == null){
        res.status(400)
        res.send("this route not exist for this users ");
        return;
    }
    //print out route found
    res.send("<h1>route from " + req.body.origin + " to " + req.body.destination + "</h1>");
    res.send(route.find((route) => route.origin === req.session.origin 
        && route.origin === req.body.origin 
        && route.destination === req.body.destination))
    //res.send();
}

//post method
const changeRoute = (req, res) => {
    //no info given to change
    if (req.body.origin == null && req.body.destination == null){
        res.status(400);
        res.send("no info of changes");
    }

    //does not found that route
    if (route.find((route) => route.user === req.session.user) == null 
            && route.find((route) => route.destination === req.body.destination) == null 
            && route.find((route) => route.origin === req.body.origin) == null){
        res.status(400);
        res.send("route does not exist");
        return;
    }

    var route = mapAPI.find((API) => route.origin === req.session.origin 
                                    && route.origin === req.body.origin 
                                    && route.destination === req.body.destination);
    if (req.body.distance != null){
        user["distance"] = req.body.distance;
    }

    if (req.body.duration != null){
        user["duration"] = req.body.duration;
    }

    if (req.body.completed != null){
        user["completed"] = req.body.completed;
    }
    res.send(user);
}

module.exports = {
    //getMap,
    getMapRoute,
    //createMap,
    changeRoute,
    deleteRoute
};