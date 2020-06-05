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
        var i=0;
        //find route on mongoDB
        const routes = await Route.find({"user":req.session.user})
        var list_route  = [];
        for(route of routes){
            if(route["status"][route["totalTrial"]-1] =="WAIT"){
                list_route.push(route);
                i+=1;
            }
        }

        while(i<6){
            list_route.push({
                origin:"---",
                destination:"---",
                totalTrial:0
            });
            i+=1;
        }
        /*
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
        */
        return res.render("map/maphome2",{userName:req.session.user,routes:list_route});
    }
}

//the help function for geting historical route for a user
const historicalRoute = async (req,res)=>{
    try{
        //find user on mongoDB
        const get_user = await User.findOne({"userName":req.session.user});
        if(!get_user){
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
        if(!req.body.origin || !req.body.destination){
            return res.send("Missing argument when deleting.");
        }
        //find the route that user want's to clean the wait flag
        var route = await Route.findOne({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination});
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
                const ret = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination},route);
            }else{
                const ret = await Route.findOneAndDelete({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination});
            }
            
            const routes = await Route.find({"user":req.session.user})
            var list_route  = [];
            for(routee of routes){
                if(routee["status"][routee["totalTrial"]-1] =="WAIT"){
                    list_route.push(routee);
                }
            }
            var out = {};
            out["routes"] = list_route;
            
            out["userName"] = req.session.user;
            return res.render("map/maphome2",out);

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
        var route_out = {};
        //cross domain calling
        const { data } = await axios({
        url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.body._origin}&destination=${req.body._end}&mode=bicycling&key=AIzaSyB3bEc0lmQ6WNX_Cl98IRfu1E5DRLiG2pE&region=AU`
        });
        if(data["status"]=="OK"){
            route_out["origin"] = req.body._origin;
            route_out["destination"] = req.body._end;
            route_out["user"] = req.session.user;
            route_out["distance"] = data["routes"][0]["legs"][0]["distance"]["value"];
            route_out["duration"] = data["routes"][0]["legs"][0]["duration"]["value"];
            route_out["turns"] = data["routes"][0]["legs"][0]["steps"].length - 1;
            route_out["response"] = data;
            route_out["completed"] = ["NOTYET"];
            route_out["status"] = ["WAIT"];
            route_out["totalTrial"]= 1;
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
            
            route_out["status"] = route["status"];
            route_out["completed"] = route["completed"];
            route_out["totalTrial"] = route["totalTrial"];
            if(route_out["status"][route_out["totalTrial"]-1] == "Live"){
                route_out["status"][route_out["totalTrial"]-1] = "FAILED";
                var d = new Date();
                route_out["completed"][route_out["totalTrial"]-1] = d.toString();
                route_out["completed"][route_out["totalTrial"]] = "NOTYET";
                route_out["status"][route_out["totalTrial"]] = "WAIT";
                route_out["totalTrial"] = route_out["totalTrial"]+1;
            }else if(_out["status"][route_out["totalTrial"]-1] != "WAIT"){
                route_out["completed"][route_out["totalTrial"]] = "NOTYET";
                route_out["status"][route_out["totalTrial"]] = "WAIT";
                route_out["totalTrial"] = route_out["totalTrial"]+1;
            }
            const ret = await Route.findOneAndUpdate({
            "user":req.session.user,
            "origin": req.body._origin,
            "destination": req.body._end},route_out);
            const routes = await Route.find({"user":req.session.user})
            var list_route  = [];
            for(routee of routes){
                if(routee["status"][routee["totalTrial"]-1] =="WAIT"){
                    list_route.push(routee);
                }
            }

            var out = {};
            out["route"] = list_route;
            out["userName"] = req.session.user;
            return res.render("map/map",out);
        }else{
            const ret = await Route.create(route_out);
            const routes = await Route.find({"user":req.session.user})
            var list_route  = [];
            for(routee of routes){
                if(routee["status"][routee["totalTrial"]-1] =="WAIT"){
                    list_route.push(routee);
                }
            }
            var out = {};
            out["route"] = found_route;
            
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
        const found_route = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
        if(!found_route){

            //axios cross domain
            //here despite some info extract from the api return. I also put the whole response body to response which easier our later extension on functionalities.
            const { data } = await axios({
            url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.body._origin}&destination=${req.body._end}&mode=bicycling&key=AIzaSyB3bEc0lmQ6WNX_Cl98IRfu1E5DRLiG2pE&region=AU`
            });
            if(data["status"]=="OK"){
                var route_new = {
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
                const route_create = await Route.create(route_new);
                return res.render("map/ride",{
                    route: route_create,
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
            if(found_route["status"][found_route["totalTrial"]-1] == "WAIT"){
                found_route["status"][found_route["totalTrial"]-1] = "Live";
                const route_update = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end},found_route);
                const route_updatee = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
                return res.render("map/ride",{
                    route:route_updatee,
                    userName: req.session.user
                })
            }else if(found_route["completed"][found_route["totalTrial"]-1] == "NOTYET"){
                var d = new Date();
                found_route["completed"][found_route["totalTrial"]-1] = d.toString();
                found_route["status"][found_route["totalTrial"]-1] = "FAILED";
            } 
            found_route["completed"][found_route["totalTrial"]] = "NOTYET";
            found_route["status"][found_route["totalTrial"]] = "Live";
            found_route["totalTrial"] = found_route["totalTrial"] + 1;
            const route_update = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end},found_route);
            const route_updatee = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
            return res.render("map/ride",{
                route:route_updatee,
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
        //if not provided fully info
        if(!req.body.origin || !req.body.destination){
            return res.send("Missing some of origin/destination.");
        }
        //find info on mongoDB
        const found_route = await Route.findOne({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination});
        //if nothing found on mongoDB
        if(!found_route){
            return res.send("No such route found, make sure your destination/origin are spelled correctly.");
        }else{
            //if route not yet update
            if(found_route["completed"][found_route["totalTrial"]-1] == "NOTYET"){
                var d = new Date();
                found_route["completed"][found_route["totalTrial"]-1] = d.toString();
                found_route["status"][found_route["totalTrial"]-1] = "FAILED__HAULT";
            }else{
                return res.send("Already up to date, lastest route halted/stopped Already");
            }

            const route_update = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination},found_route);
            route_updatee = await Route.findOne({"user":req.session.user,"origin":req.body._origin,"destination":req.body._end});
            return res.render("map/map",{route:route_updatee,userName: req.session.user});
        }
    }catch(err){
        res.status(400);
        return res.send("Failed when halting a route");
    }

}
//end route which means a user finish the route
const endRoute = async (req, res) =>{
    try{
        //if info not fully provided
        if(!req.body.origin || !req.body.destination){
            return res.send("Missing some of origin/destination.");
        }
        //find info on mongoDB
        const found_route = await Route.findOne({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination});
        const found_user = await User.findOne({"userName":req.session.user});
        //if not found user->error
        if(!found_user){
            res.status(400);
            return res.send("NO SUCH user, how did you hack in!??");
        }
        //if not found any route to end ->erro
        if(!found_route){
            return res.send("No such route found, make sure your destination/origin are spelled correctly.");
        }else{
            //change route status and update person
            if(found_route["completed"][found_route["totalTrial"]-1] == "NOTYET"){
                var d = new Date();
                found_route["completed"][found_route["totalTrial"]-1] = d.toString();
                found_route["status"][found_route["totalTrial"]-1] = "COMPLETED";
                found_user["data"]["totalDistance"] += found_route["distance"];
                found_user["data"]["energySaved"] += found_route["distance"] * ME_RATE;
                found_user["data"]["carbonSaved"] += found_route["distance"] * MC_RATE;
                found_user["data"]["streak"] += 1
                
                //update on mongoDB the route and user
                const update_new_route = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination},found_route);
                const update_new_user = await User.findOneAndUpdate({"userName":req.session.user},found_user);
                //render
                return res.render("map/end",{route:found_route,userName: req.session.user});

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
