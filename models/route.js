const mongoose = require("mongoose");
const routeSchema = new mongoose.Schema({

    user:String,
    origin:String,
    destination:String,
    distance:Number,
    duration:Number,
    turns:Number,
    response:Object,
    completed:Array,
    status:Array,
    totalTrial:Number
},{ versionKey: false });

const Route = mongoose.model("route", routeSchema, "route");
module.exports = Route;

/*
    the schema we used for store route info from google map api. And in model, we use axios for cross domain
    (user,origin,destinatoin) -> identifier
    duration: in secs
    distance: in meters
    turns: turns needed
    response: store the response object from google map api if we need those info later
    completed: record completed time for each ride(even failed or unfinished)
    status: wait(saved but not start) start(started) failed(failed) failed hault(failured because ask for a restart)
    totalTrial: total atempt on this route
*/