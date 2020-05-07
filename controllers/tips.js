var tips = require("../models/tips.js");
const mongoose = require("mongoose");
const Tips = mongoose.model("tips");


//get"s a tip page
const getTips = async (req, res) => {
    try{
        const _all = await Tips.find();
        return res.send(_all);
    }catch(err){
        res.status(400);
        return res.send("Database Failed getting all tips");
    }
}

//get a particular tip based off of the tipNumber
const getTip = async (req, res) => {
    const id = parseInt(req.params.tipNum, 10);
    try{
        const _tip = await Tips.findOne({"tipNum":id});
        if(_tip){
            var out = "<h1> Tip: " + _tip.title + "</h1>" +  "<body>" + _tip.body + "</body>";
            return res.send(out);
        }
        else{
            res.status(404);
            return res.send("This tip does not exists");
        }
    }catch(err){
        res.status(400);
        res.send("Database failed, find one tip");
    }
}

module.exports = {
    getTips,
    getTip,
};