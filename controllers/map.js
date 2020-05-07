const mongoose = require("mongoose");
const User = mongoose.model("users");
const Route = mongoose.model("route");

const ME_RATE = 1.1; //kj
const MC_RATE = 0.016;//g
//reference to : http://ecf.com/files/wp-content/uploads/ECF_BROCHURE_EN_planche.pdf

const axios = require("axios");

const getRoute = async (req, res) =>{
  try{
        const { data } = await axios({
        url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.body.origin}&destination=${req.body.destination}&mode=bicycling&key=AIzaSyB3bEc0lmQ6WNX_Cl98IRfu1E5DRLiG2pE&region=AU`
        });
        if(data["status"]=="OK"){
            var _out = {};
            _out["origin"] = req.body.origin;
            _out["destination"] = req.body.destination;
            _out["user"] = req.session.user;
            _out["distance"] = data["routes"][0]["legs"][0]["distance"]["value"];
            _out["duration"] = data["routes"][0]["legs"][0]["duration"]["value"];
            _out["turns"] = data["routes"][0]["legs"][0]["steps"].length - 1;
            _out["responseString"] = data;

            return res.send(_out);
        }else{
            return res.send("Incorrect query to googleMapApi\n"+data);
        }
    }catch(err){
        res.status(400);
        return res.send("Failed when talking to googleMap API");
    }
}

const startRoute = async (req, res) =>{
    try{
        if(!req.body.origin || !req.body.destination){
            return res.send("Missing some of origin/destination.");
        }
        const _route = await Route.findOne({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination});
        if(!_route){
            const { data } = await axios({
            url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.body.origin}&destination=${req.body.destination}&mode=bicycling&key=AIzaSyB3bEc0lmQ6WNX_Cl98IRfu1E5DRLiG2pE&region=AU`
            });
            if(data["status"]=="OK"){
                var _new = {
                    "user": req.session.user,
                    "origin": req.body.origin,
                    "destination": req.body.destination,
                    "distance": data["routes"][0]["legs"][0]["distance"]["value"],
                    "duration": data["routes"][0]["legs"][0]["duration"]["value"],
                    "turns": data["routes"][0]["legs"][0]["steps"].length - 1,
                    "response": data,
                    "completed": ["NOTYET"],
                    "status":["Live"],
                    "totalTrial": 1 
                }
                const _create = await Route.create(_new);
                return res.send(_create);
            }else{
                res.status(400);
                return res.send("Failed when initializing a route");
            }
        }else{
            if(_route["completed"][_route["totalTrial"]-1] == "NOTYET"){
                var d = new Date();
                _route["completed"][_route["totalTrial"]-1] = d.toString();
                _route["status"][_route["totalTrial"]-1] = "FAILED";
            } 
            _route["completed"][_route["totalTrial"]] = "NOTYET";
            _route["status"][_route["totalTrial"]] = "Live";
            _route["totalTrial"] = _route["totalTrial"] + 1;
            const _update = await Route.findOneAndUpdate({"user":req.session.user,"origin":req.body.origin,"destination":req.body.destination},_route);
            return res.send(_update);
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
            return res.send(_update);
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

                return res.send("successfully return:\n"+_route);

            }else{
                return res.send("Already up to date, lastest route halted/stopped Already");
            }
        }
    }catch(err){
        res.status(400);
        return res.send("Failed when ending a route");
    }
}

const getMap = (req, res) => {
    return res.send("Map");
}

module.exports = {
    getRoute,
    getMap,
    startRoute,
    haltRoute,
    getRoute,
    endRoute
};
