const mongoose = require("mongoose");
const User = mongoose.model("users");
const Route = mongoose.model("route");
var path = require('path');

const ME_RATE = 1.1; //kj
const MC_RATE = 0.016;//g
//reference to : http://ecf.com/files/wp-content/uploads/ECF_BROCHURE_EN_planche.pdf
const axios = require("axios");


const localRoute = async (req, res) =>{
    if(!req.session.user){
        return res.render("map/welcome",{});
    }else{
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
const deleteRoute = async (req, res) =>{
    try{
        if(!req.body._origin || !req.body._end){
            return res.send("Missing argument when deleting.");
        }
        var route = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
        if(!route){
            return res.render("map/welcome",{});
        }else{
            if(route["status"][route["totalTrial"]-1] != "WAIT"){
                return res.render("map/welcome",{});
            }
            const new_status = route["status"].slice(0,route["totalTrial"]-1);
            const new_complete = route["completed"].slice(0,route["totalTrial"]-1);
            route["status"] = new_status;
            route["completed"] = new_complete;
            route["totalTrial"] = route["totalTrial"] - 1;
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
            return res.render("map/map",out);

        }
    }catch(err){
        res.status(400);
        return res.send("DatabaseFailure when deleting savedRoute.");
    }
}
const saveRoute = async (req, res) =>{
  try{  
        if(!req.body._end ||!req.body._origin){
            return res.send("Missing parameter.");
        }
        var _out = {};
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
            return res.render("map/map",out);
        }
        
    }catch(err){
        res.status(400);
        return res.send("Failed when talking to googleMap API");
    }
}

const startRoute = async (req, res) =>{
    try{
        if(!req.body._origin || !req.body._end){
            return res.send("Missing some of origin/destination.");
        }
        const _route = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
        if(!_route){
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
                res.status(400);
                return res.send("Failed when initializing a route");
            }
        }else{
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
        return res.send("Failed when startRoute");
    }
}

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
            return res.render("map/hault",{route:_updatee,userName: req.session.user});
        }
    }catch(err){
        res.status(400);
        return res.send("Failed when halting a route");
    }

}

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
const mapPlan = async (req,res)=>{
    if(req.session.user){
        var out = {
            origin:"---",
            destination:"---",
            userName: req.session.user
        };
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
