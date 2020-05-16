const mongoose = require("mongoose");
const User = mongoose.model("users");
const Route = mongoose.model("route");
var path = require('path');

const ME_RATE = 1.1; //kj
const MC_RATE = 0.016;//g
//reference to : http://ecf.com/files/wp-content/uploads/ECF_BROCHURE_EN_planche.pdf
const axios = require("axios");

/*
Function list:
    1.localRoute: Since we do want user to have some view about what the map can do
        even if the are not registered. So this is a conditinoal local router which sends
        to welcome page or main page. If send to main page, all saved route will be passed
        though render.
    2.historicalRoute: Find historical finished route based on total trial and out put the 
        top 6.
    3.deleteRoute: This is when a user delete a route that they saved for use earlier. So the
        route won't appaer on their saved route list.
    4.saveRoute: This is when a user choose to save a route for later ride.
    5.startRoute: This is when a user choose to start a route and enter navigation
    6.haultRoute: This is when a user choose to hault a route after starting a route. In this way
        the route will be considered as failed but marked as hault.
    7.endRoute: This is when a user end a route and data counted to personal database(record) the
        route will also be marked as success.
    8.mapPlan: When from the map home page to real map planning page, pass origin and destination for initializing
        the map(although they could still manually do that).
    
*/

const localRoute = async (req, res) =>{
    if(!req.session.user){
        return res.redirect("/");
    }else{
        //return the 6 mostly visited route
        //if has less than 6 in record. use --- for replace which front end will reckon as empty
        const _routes = await historicalRoute(req, res);
        if(_routes.length <=6){
            var i = _routes.length;
            while(i<6){
                _routes[i] = {
                    origin: "---",
                    destination:"---",
                    totalTrial:"0"
                }
                i++;
            }
        }
        return res.render("map/maphome",{userName:req.session.user,routes:_routes});
    }
}

//the help function for geting historical route for a user
const historicalRoute = async (req,res)=>{
    try{
        const _user = await User.findOne({"userName":req.session.user});
        if(!_user){
            res.status(404);
            return res.send("No such user when doing historicalRoute");
        }
        const routes = await Route.find({"user":req.session.user}).sort({totalTrial:-1}).limit(6);
        return routes;
    }catch(err){
        res.status(400);

        return res.send("DatabaseFailure when finding all historicalRoute.");
    }
}
//here delete not means delete the route record from database. But means this route was saved by user
//as waiting for later use. But the user want to delete what they have saved.
const deleteRoute = async (req, res) =>{
    try{
        if(!req.body._origin || !req.body._end){
            return res.send("Missing argument when deleting.");
        }
        //find the route that user want's to clean the wait flag
        var route = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
        if(!route){
            return res.redirect("/");
        }else{
            if(route["status"][route["totalTrial"]-1] != "WAIT"){
                return res.redirect("/");
            }
            const new_status = route["status"].slice(0,route["totalTrial"]-1);
            const new_complete = route["completed"].slice(0,route["totalTrial"]-1);
            route["status"] = new_status;
            route["completed"] = new_complete;
            route["totalTrial"] = route["totalTrial"] - 1;
            //if the route only has one record and that's the saved one(i.e the user only save this route and
            //never tried this route before and delete the save status will delete the route.)
            if(route["totalTrial"] != 0){
                const ret = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end},route);
            }else{
                const ret = await Route.findOneAndDelete({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
            }
            
            const routes = await Route.find({"user":req.session.user})
            var _route  = [];
            for(routee of routes){
                if(routee["status"][routee["totalTrial"]-1] =="WAIT"){
                    _route.push(routee);
                }
            }
            var out = {};
            out["route"] = _route;
            
            out["userName"] = req.session.user;
            return res.render("map/map",out);

        }
    }catch(err){
        res.status(400);
        return res.send("DatabaseFailure when deleting savedRoute.");
    }
}
//save route to wait status for a user to ride the route later
const saveRoute = async (req, res) =>{
  try{  
        if(!req.body._end ||!req.body._origin){
            return res.send("Missing parameter.");
        }
        var _out = {};
        //cross domain calling
        const { data } = await axios({
        url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.body._origin}&destination=${req.body._end}&mode=bicycling&key=AIzaSyB3bEc0lmQ6WNX_Cl98IRfu1E5DRLiG2pE&region=AU`
        });
        if(data["status"]=="OK"){
            _out["origin"] = req.body._origin;
            _out["destination"] = req.body._end;
            _out["user"] = req.session.user;
            _out["distance"] = data["routes"][0]["legs"][0]["distance"]["value"];
            _out["duration"] = data["routes"][0]["legs"][0]["duration"]["value"];
            _out["turns"] = data["routes"][0]["legs"][0]["steps"].length - 1;
            _out["response"] = data;
            _out["completed"] = ["NOTYET"];
            _out["status"] = ["WAIT"];
            _out["totalTrial"]= 1;
        }else{
            return res.send("Incorrect query to googleMapApi\n"+data);
        }
        const route = await Route.findOne({
            "user":req.session.user,
            "origin": req.body._origin,
            "destination": req.body._end
        })
        //live -> failed + new wait record
        //wait -> refresh route info
        //other -> just add a new wait status
        //route never exist -> create a route info and add wait on it
        if(route){
            
            _out["status"] = route["status"];
            _out["completed"] = route["completed"];
            _out["totalTrial"] = route["totalTrial"];
            if(_out["status"][_out["totalTrial"]-1] == "Live"){
                _out["status"][_out["totalTrial"]-1] = "FAILED";
                var d = new Date();
                _out["completed"][_out["totalTrial"]-1] = d.toString();
                _out["completed"][_out["totalTrial"]] = "NOTYET";
                _out["status"][_out["totalTrial"]] = "WAIT";
                _out["totalTrial"] = _out["totalTrial"]+1;
            }else if(_out["status"][_out["totalTrial"]-1] != "WAIT"){
                _out["completed"][_out["totalTrial"]] = "NOTYET";
                _out["status"][_out["totalTrial"]] = "WAIT";
                _out["totalTrial"] = _out["totalTrial"]+1;
            }
            const ret = await Route.findOneAndUpdate({
            "user":req.session.user,
            "origin": req.body._origin,
            "destination": req.body._end},_out);
            const routes = await Route.find({"user":req.session.user})
            var _route  = [];
            for(routee of routes){
                if(routee["status"][routee["totalTrial"]-1] =="WAIT"){
                    _route.push(routee);
                }
            }

            var out = {};
            out["route"] = _route;
            out["userName"] = req.session.user;
            return res.render("map/map",out);
        }else{
            const ret = await Route.create(_out);
            const routes = await Route.find({"user":req.session.user})
            var _route  = [];
            for(routee of routes){
                if(routee["status"][routee["totalTrial"]-1] =="WAIT"){
                    _route.push(routee);
                }
            }
            var out = {};
            out["route"] = _route;
            
            out["userName"] = req.session.user;
            return res.render("map/map",out);
        }
        
    }catch(err){
        res.status(400);
        return res.send("Failed when talking to googleMap API");
    }
}
//start route (user really riding on the route) route status to live
const startRoute = async (req, res) =>{
    try{
        if(!req.body._origin || !req.body._end){
            return res.send("Missing some of origin/destination.");
        }
        const _route = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
        if(!_route){

            //axios cross domain
            //here despite some info extract from the api return. I also put the whole response body to response which easier our later extension on functionalities.
            const { data } = await axios({
            url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.body._origin}&destination=${req.body._end}&mode=bicycling&key=AIzaSyB3bEc0lmQ6WNX_Cl98IRfu1E5DRLiG2pE&region=AU`
            });
            if(data["status"]=="OK"){
                var _new = {
                    "user": req.session.user,
                    "origin": req.body._origin,
                    "destination": req.body._end,
                    "distance": data["routes"][0]["legs"][0]["distance"]["value"],
                    "duration": data["routes"][0]["legs"][0]["duration"]["value"],
                    "turns": data["routes"][0]["legs"][0]["steps"].length - 1,
                    "response": data,
                    "completed": ["NOTYET"],
                    "status":["Live"],
                    "totalTrial": 1 
                }
                const _create = await Route.create(_new);
                return res.render("map/ride",{
                    route: _create,
                    userName: req.session.user
                });
            }else{
                return res.render("error", {error:"route not found", redirect:"/Map"})
                //res.status(400);
                //return res.send("Failed when initializing a route");
            }
        }else{
            //if route exist
            //wait -> live
            //last haven't finish -> fail this and a new one
            if(_route["status"][_route["totalTrial"]-1] == "WAIT"){
                _route["status"][_route["totalTrial"]-1] = "Live";
                const _update = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end},_route);
                const _updatee = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
                return res.render("map/ride",{
                    route:_updatee,
                    userName: req.session.user
                })
            }else if(_route["completed"][_route["totalTrial"]-1] == "NOTYET"){
                var d = new Date();
                _route["completed"][_route["totalTrial"]-1] = d.toString();
                _route["status"][_route["totalTrial"]-1] = "FAILED";
            } 
            _route["completed"][_route["totalTrial"]] = "NOTYET";
            _route["status"][_route["totalTrial"]] = "Live";
            _route["totalTrial"] = _route["totalTrial"] + 1;
            const _update = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end},_route);
            const _updatee = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
            return res.render("map/ride",{
                route:_updatee,
                userName: req.session.user
            })
        }
    }catch(err){
        res.status(400);
        return res.render("error", {error:"Server Error: " + err, redirect:"/Map"})
    }
}
// hault a already started but not yet finished route
const haltRoute = async (req, res) =>{
    try{
        if(!req.body.origin || !req.body.destination){
            return res.send("Missing some of origin/destination.");
        }
        const _route = await Route.findOne({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination});
        if(!_route){
            return res.send("No such route found, make sure your destination/origin are spelled correctly.");
        }else{
            if(_route["completed"][_route["totalTrial"]-1] == "NOTYET"){
                var d = new Date();
                _route["completed"][_route["totalTrial"]-1] = d.toString();
                _route["status"][_route["totalTrial"]-1] = "FAILED__HAULT";
            }else{
                return res.send("Already up to date, lastest route halted/stopped Already");
            }
            const _update = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination},_route);
            _updatee = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
            return res.render("map/map",{route:_updatee,userName: req.session.user});
        }
    }catch(err){
        res.status(400);
        return res.send("Failed when halting a route");
    }

}
//end route which means a user finish the route
const endRoute = async (req, res) =>{
    try{
        if(!req.body.origin || !req.body.destination){
            return res.send("Missing some of origin/destination.");
        }
        const _route = await Route.findOne({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination});
        const _user = await User.findOne({"userName":req.session.user});
        if(!_user){
            res.status(400);
            return res.send("NO SUCH user, how did you hack in!??");
        }
        if(!_route){
            return res.send("No such route found, make sure your destination/origin are spelled correctly.");
        }else{
            //change route status and update person
            if(_route["completed"][_route["totalTrial"]-1] == "NOTYET"){
                var d = new Date();
                _route["completed"][_route["totalTrial"]-1] = d.toString();
                _route["status"][_route["totalTrial"]-1] = "COMPLETED";
                _user["data"]["totalDistance"] += _route["distance"];
                _user["data"]["energySaved"] += _route["distance"] * ME_RATE;
                _user["data"]["carbonSaved"] += _route["distance"] * MC_RATE;
                _user["data"]["streak"] += 1

                const _new_route = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination},_route);
                const _new_user = await User.findOneAndUpdate({"userName":req.session.user},_user);

                return res.render("map/end",{route:_route,userName: req.session.user});

            }else{
                return res.send("Already up to date, lastest route halted/stopped Already");
            }
        }
    }catch(err){
        res.status(400);
        return res.send("Failed when ending a route");
    }
}
//the transition from map home page to the actual map page
const mapPlan = async (req,res)=>{
    if(req.session.user){
        var out = {
            origin:"---",
            destination:"---",
            userName: req.session.user
        };
        // if any of origin/destination is provided
        // change the empty placeholder --- to actual placename
        if(req.body.origin){
            out["origin"] = req.body.origin;
        }
        if(req.body.destination){
            out["destination"] = req.body.destination;   
        }

        const routes = await Route.find({"user":req.session.user})
        var _route  = [];
        for(route of routes){
            if(route["status"][route["totalTrial"]-1] =="WAIT"){
                _route.push(route);
            }
        }
        out["route"] = _route;
        out["userName"] = req.session.user;
        return res.render("map/map",out);
    }else{
        return res.redirect("/");
    }
}

module.exports = {
    saveRoute,
    startRoute,
    haltRoute,
    endRoute,
    localRoute,
    mapPlan,
    deleteRoute
};
