var API = require("../models/mapAPI.js"); // need to change for to use

/*const getMap = (req, res) => {
    res.send("<h1>map</h1>");
}*/

//to, toID, from, fromID, route

//posh method
const createMap = (req, res) => {
    //if missing parameters
    if (req.body.to == null || req.body.from == null){
        res.status(400)
        res.send("incomplete data, missing origin or destination point");
        return;
    }

    //if route found -> print out info
    //http://host/:userid/path?origin="a"&&destination="b"
    if (mapAPI.find((API) => API.to === req.body.to) != null 
           && mapAPI.find((API) => API.from === req.body.from) != null){
        res.send("<h1>route from " + API.from + " to " + API.to + "</h1>");
        res.send("<h1>route: " + API.route + "</h1>");
        //do i have to recursively call route??????
        return;
    }

    //if not found -> adding (create a route)
    mapAPI.push({
        "to": req.body.to,
        "from":req.bodu.from,
        "toID": req.body.toID,
        "fromID": req.body.fromID,
        "route": req.body.route
    });
    res.send()
}

//delete
const deleteMap = (req, res) => {
    if (mapAPI.find((API) => API.to === req.body.to) == null 
           && mapAPI.find((API) => API.from === req.body.from) == null){
        res.status(400)
        res.send("this route not exist");
        return;
    }
    let index = mapAPI.findIndex(
        API => API.to === req.body.to && API.from === req.body.from
    );
    mapAPI.splice(index, 1);
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
    if (mapAPI.find((API) => API.to === req.body.to) == null 
           && mapAPI.find((API) => API.from === req.body.from) == null){
        res.status(400)
        res.send("this route not exist for this users ");
        return;
    }
    //print out route found
    res.send("<h1>route from " + req.query.to + " to " + req.query.from + "</h1>");
    res.send();
}

//post method
const changeMap = (req, res) => {
    //no info given to change
    if (req.body.to == null && req.body.from == null){
        res.status(400);
        res.send("no info of changes");
    }

    //does not found that route
    if (mapAPI.find((API) => API.to === req.body.to) == null 
           && mapAPI.find((API) => API.from === req.body.from) == null){
        res.status(400);
        res.send("route does not exist");
        return;
    }

    var route = mapAPI.find((API) => API.to === req.body.to && API.from === req.body.from);
    if (req.body.toID != null){
        user["toID"] = req.body.toID;
    }

    if (req.body.fromID != null){
        user["fromID"] = req.body.fromID;
    }

    if (req.body.route != null){
        user["route"] = req.body.route;
    }
    res.send(user);
}

module.exports = {
    //getMap,
    getMapRoute,
    createMap,
    deleteMap
}