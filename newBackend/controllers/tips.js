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
            return res.send("This tip does not exists");
        }
    }catch(err){
        res.status(400);
        res.send("Database failed, find one tip");
    }
}

//create a  tip
const createTip = async (req, res) => {
    if (req.body.title == null || req.body.body == null){
        res.status(400)
        return res.send("There is incomplete data while creating tips");
    }
    var newTipNum = await max();
    try{
        const _new = await Tips.create({
            "tipNum": newTipNum + 1,
            "title" : req.body.title,
            "body" : req.body.body
        });
        return res.send(_new);
    }catch(err){
        res.status(400);
        return res.send("Database Failed: Create tips");
    }
}

// Deleting an tip
const deleteTip = async (req, res) => {
    var enteredNumber = parseInt(req.params.tipNum, 10);
    try{
        await Tips.deleteOne({"tipNum":req.params.tipNum});
        res.send("Successfully delete"+req.params.tipNum);
    }catch(err){
        res.status(400);
        return res.send("Database Failed: Delete tips");
    }
}

const max = async () => {
    try{
        const _last = await Tips.find().sort({_id:-1}).limit(1);
        if(_last[0]){
            return _last[0].tipNum;
        }
        else{
            return 0;
        }
    }catch(err){
        console.log("Error occurs while getting latest Article num.");
        return 0;
    }
}

module.exports = {
    getTips,
    getTip,
    createTip,
    deleteTip
};